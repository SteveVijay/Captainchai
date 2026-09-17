import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Mail, CheckCircle2, RotateCcw, AlertTriangle } from 'lucide-react';
import { playMessageTone, playGlassClink, playConfirmationChime } from '../utils/audio';
import { sendChaiEmail } from '../utils/emailService';

// Scripted Sequential Conversational Steps
const CHAT_STEPS = [
  {
    key: 'name',
    prompt: (data) =>
      "You've reached Captain Chai. If you're here, something's on your mind — or something's wrong. Either way, I'm listening. What's your name?",
    placeholder: 'Enter your name or alias...',
    validate: (val) => val.trim().length >= 2,
    errorMessage: "I need a name or alias to go on.",
  },
  {
    key: 'age',
    prompt: (data) =>
      `How old are you, ${data.name}? Just so I know who I'm looking out for.`,
    placeholder: 'Enter your age...',
    validate: (val) => {
      const num = parseInt(val.trim(), 10);
      return !isNaN(num) && num > 0 && num < 125;
    },
    errorMessage: "Give me a real number. I'm not running paperwork, just keeping facts straight.",
  },
  {
    key: 'location',
    prompt: (data) =>
      `Where are you located right now? Panamukku junction, the canal road, or somewhere outside town?`,
    placeholder: 'e.g. Panamukku Junction, North Canal Road, Old Market, Kochi...',
    validate: (val) => val.trim().length >= 2,
    errorMessage: "Tell me a town, street, or landmark so I know where to look.",
  },
  {
    key: 'email',
    prompt: (data) =>
      `What's your email address? I'll send your message receipt there so you have a record.`,
    placeholder: 'your.email@example.com...',
    validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()),
    errorMessage: "That email doesn't look right. Double-check the address.",
  },
  {
    key: 'urgency',
    prompt: (data) =>
      `What brings you to my line? Are you in immediate danger, leaving a message, or are you someone carrying abilities of your own looking to team up?`,
    placeholder: 'Select or type your purpose...',
    options: [
      'Urgent — Need eyes on this tonight',
      'I have abilities of my own / Looking to team up',
      'Can wait till morning / Leaving a message',
    ],
    validate: (val) => val.trim().length > 0,
    errorMessage: "Let me know the purpose of your transmission.",
  },
  {
    key: 'grievance',
    prompt: (data) => {
      if (data.urgency && data.urgency.toLowerCase().includes('abilities')) {
        return `Alright, ${data.name}. You're in safe hands. Tell me what was done to you or what abilities you are carrying. When did it start? I'm listening.`;
      }
      return `Alright, ${data.name}. Tell me what's going on. Take your time.`;
    },
    placeholder: 'Describe your situation or manifestation in detail...',
    validate: (val) => val.trim().length >= 6,
    errorMessage: "Tell me a little more so I can understand what's happening.",
  },
];

export const ChatPortal = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userData, setUserData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionComplete, setSubmissionComplete] = useState(false);
  const [emailResult, setEmailResult] = useState(null);
  const [showEmailPreview, setShowEmailPreview] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isSubmitting]);

  // Initial greeting when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        playMessageTone();
        setMessages([
          {
            id: 'init-msg',
            sender: 'captain',
            text: CHAT_STEPS[0].prompt({}),
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
        setIsTyping(false);
      }, 450);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend) => {
    const text = typeof textToSend === 'string' ? textToSend : inputValue;
    if (!text.trim() || isTyping || isSubmitting) return;

    const currentStep = CHAT_STEPS[currentStepIndex];
    const userVal = text.trim();

    // Validate
    if (!currentStep.validate(userVal)) {
      playGlassClink();
      setMessages((prev) => [
        ...prev,
        {
          id: `user-${Date.now()}`,
          sender: 'user',
          text: userVal,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
        {
          id: `err-${Date.now()}`,
          sender: 'captain',
          isError: true,
          text: currentStep.errorMessage,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setInputValue('');
      return;
    }

    playMessageTone();
    const updatedData = { ...userData, [currentStep.key]: userVal };
    setUserData(updatedData);
    setInputValue('');

    // Append user message
    setMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        sender: 'user',
        text: userVal,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);

    const nextStepIdx = currentStepIndex + 1;

    if (nextStepIdx < CHAT_STEPS.length) {
      setCurrentStepIndex(nextStepIdx);
      setIsTyping(true);

      setTimeout(() => {
        playMessageTone();
        const nextPrompt = CHAT_STEPS[nextStepIdx].prompt(updatedData);
        setMessages((prev) => [
          ...prev,
          {
            id: `captain-${Date.now()}`,
            sender: 'captain',
            text: nextPrompt,
            options: CHAT_STEPS[nextStepIdx].options,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
        setIsTyping(false);
      }, 650);
    } else {
      // Final submission
      handleFinalSubmission(updatedData);
    }
  };

  const handleFinalSubmission = async (finalData) => {
    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      const result = await sendChaiEmail(finalData);
      setEmailResult(result);

      setIsSubmitting(false);
      setSubmissionComplete(true);
      playConfirmationChime();

      const isMetaHuman = finalData.urgency && finalData.urgency.toLowerCase().includes('abilities');
      const confirmationText = isMetaHuman
        ? "Got it. If you're carrying abilities, keep a low profile and stay out of the spotlight. I've recorded your signal and I'll find a safe way to reach you."
        : "Got it. I'm on my way — or as close as I can be. You'll hear from me.";

      setMessages((prev) => [
        ...prev,
        {
          id: `final-ack-${Date.now()}`,
          sender: 'captain',
          text: confirmationText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch (err) {
      setIsSubmitting(false);
      setSubmissionError("Something didn't go through. Try again in a moment.");
    }
  };

  const handleResetConversation = () => {
    setMessages([]);
    setCurrentStepIndex(0);
    setUserData({});
    setInputValue('');
    setIsSubmitting(false);
    setSubmissionComplete(false);
    setEmailResult(null);
    setShowEmailPreview(false);
    setSubmissionError(null);

    setIsTyping(true);
    setTimeout(() => {
      playMessageTone();
      setMessages([
        {
          id: 'reset-init',
          sender: 'captain',
          text: CHAT_STEPS[0].prompt({}),
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setIsTyping(false);
    }, 400);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      
      {/* Messaging Terminal Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl h-[88vh] sm:h-[82vh] bg-[#0E0A08] rounded-xl border border-amber-950/80 shadow-[0_25px_70px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden text-[#EDE3D8]"
      >
        {/* Terminal Header */}
        <div className="px-6 py-4 bg-[#140D0A] border-b border-amber-950 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-9 h-9 rounded bg-[#1C120D] border border-amber-900/40 flex items-center justify-center">
              <div className="flex space-x-1.5 animate-amber-eyes">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-wordmark text-lg tracking-wider text-[#F7EFE8]">
                  PANAMUKKU HELPLINE
                </h3>
                <span className="text-[9px] font-mono tracking-widest text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-950/40 border border-emerald-900/40 uppercase">
                  ACTIVE
                </span>
              </div>
              <p className="text-[11px] font-sans text-stone-300">
                Direct line to Captain Chai (Kannan)
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={handleResetConversation}
              title="Reset conversation"
              className="p-2 rounded bg-stone-900/80 hover:bg-stone-800 text-stone-400 hover:text-amber-300 transition-colors cursor-pointer"
            >
              <RotateCcw size={14} />
            </button>
            <button
              onClick={onClose}
              title="Close portal"
              className="p-2 rounded bg-stone-900/80 hover:bg-stone-800 text-stone-400 hover:text-stone-200 transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Message Log */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-[#080605]">
          {messages.map((msg) => {
            const isCaptain = msg.sender === 'captain';
            return (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex flex-col ${isCaptain ? 'items-start' : 'items-end'}`}
              >
                <div
                  className={`max-w-[88%] sm:max-w-[78%] p-4 rounded text-xs sm:text-sm leading-relaxed ${
                    isCaptain
                      ? msg.isError
                        ? 'bg-rose-950/60 border border-rose-850 text-rose-200'
                        : 'bg-[#140E0A] border border-amber-950 text-[#EDE3D8]'
                      : 'bg-gradient-to-r from-amber-700 to-amber-600 text-[#080605] font-semibold shadow-md'
                  }`}
                >
                  <p className="font-sans whitespace-pre-wrap">{msg.text}</p>

                  {/* Option quick select pills */}
                  {msg.options && !submissionComplete && currentStepIndex === 4 && (
                    <div className="mt-3 pt-3 border-t border-amber-950 flex flex-col gap-1.5">
                      {msg.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSendMessage(opt)}
                          className="text-left px-3 py-2 rounded bg-[#0A0705] hover:bg-amber-950/40 border border-stone-800 hover:border-amber-700/50 text-stone-300 hover:text-amber-200 text-xs transition-colors cursor-pointer"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}

                  <div
                    className={`text-[9px] mt-1.5 flex justify-end font-mono ${
                      isCaptain ? 'text-stone-300' : 'text-black/60'
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Typing indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-2 text-xs font-mono text-amber-500/80 p-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>Captain Chai is typing...</span>
            </motion.div>
          )}

          {/* Submitting state */}
          {isSubmitting && (
            <div className="p-4 rounded bg-amber-950/30 border border-amber-900/40 text-center my-4">
              <span className="font-mono text-xs text-amber-300 tracking-wider">
                TRANSMITTING DISPATCH TO PANAMUKKU PATROL...
              </span>
            </div>
          )}

          {/* Submission error message */}
          {submissionError && (
            <div className="p-4 rounded bg-rose-950/60 border border-rose-800 text-xs text-rose-200 flex items-center space-x-2">
              <AlertTriangle size={16} className="text-rose-400 shrink-0" />
              <span>{submissionError}</span>
            </div>
          )}

          {/* Submission Complete Sincere State */}
          {submissionComplete && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="my-6 p-6 rounded stall-card stall-border-asymmetric text-center"
            >
              <div className="w-11 h-11 rounded-full bg-amber-950/60 border border-amber-500/50 mx-auto mb-4 flex items-center justify-center text-amber-400">
                <CheckCircle2 size={22} />
              </div>

              <h4 className="font-wordmark text-2xl text-[#F7EFE8] uppercase tracking-wider mb-2">
                TRANSMISSION RECORDED
              </h4>

              <p className="font-sans text-xs sm:text-sm text-stone-300 max-w-md mx-auto mb-6 leading-relaxed font-light">
                A confirmation has been sent to <strong className="text-amber-300">{userData.email}</strong>. Kannan is watching the streets through the night. Stay safe.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => setShowEmailPreview(!showEmailPreview)}
                  className="px-4 py-2 rounded bg-stone-900 hover:bg-stone-800 border border-amber-900/50 text-amber-300 text-xs font-sans tracking-wide transition-colors cursor-pointer flex items-center space-x-2"
                >
                  <Mail size={14} />
                  <span>{showEmailPreview ? 'Hide Receipt Record' : 'View Dispatched Receipt'}</span>
                </button>

                <button
                  onClick={handleResetConversation}
                  className="px-4 py-2 rounded bg-stone-900/60 hover:bg-stone-800 text-stone-400 text-xs font-sans transition-colors cursor-pointer"
                >
                  Start New Message
                </button>
              </div>

              {/* Email Receipt Preview */}
              {showEmailPreview && emailResult?.payload && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-6 text-left rounded bg-[#080605] border border-stone-800 p-4 text-xs overflow-hidden"
                >
                  <div className="text-[10px] font-mono text-amber-400/80 mb-2 pb-2 border-b border-stone-800 flex justify-between">
                    <span>CONFIRMATION DISPATCH TO: {userData.email}</span>
                    <span>{emailResult.payload.timestamp}</span>
                  </div>

                  <div
                    className="max-h-60 overflow-y-auto rounded bg-[#100B08] p-3 text-stone-300 text-[11px] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: emailResult.payload.email_html }}
                  />
                </motion.div>
              )}
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        {!submissionComplete && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputValue);
            }}
            className="p-3 sm:p-4 bg-[#120E0C] border-t border-amber-950/60 flex items-center space-x-2 sm:space-x-3"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={CHAT_STEPS[currentStepIndex]?.placeholder || 'Type your message to Captain Chai...'}
              autoFocus
              className="flex-1 px-4 py-3 rounded bg-[#080605] border border-amber-950 focus:border-amber-600/60 text-stone-200 placeholder-stone-600 font-sans text-xs sm:text-sm focus:outline-none"
            />

            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping || isSubmitting}
              className="px-5 py-3 rounded bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 disabled:opacity-30 disabled:cursor-not-allowed text-[#080605] font-sans font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center space-x-1.5"
            >
              <span>Send</span>
              <Send size={14} />
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default ChatPortal;
