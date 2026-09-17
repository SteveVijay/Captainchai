import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Key, X, Check, Mail, Info } from 'lucide-react';
import { getStoredEmailConfig, saveEmailConfig } from '../utils/emailService';
import { playConfirmationChime, playGlassClink } from '../utils/audio';

export const EmailConfigModal = ({ isOpen, onClose }) => {
  const [config, setConfig] = useState(getStoredEmailConfig());
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    saveEmailConfig(config);
    playConfirmationChime();
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="w-full max-w-md bg-[#120E0C] rounded-2xl border border-amber-900/40 shadow-2xl p-6 text-[#EDE3D8]"
      >
        <div className="flex items-center justify-between pb-4 border-b border-amber-950 mb-6">
          <div className="flex items-center space-x-2.5">
            <Mail className="text-amber-400" size={18} />
            <h3 className="font-cinzel text-base font-bold tracking-wider text-[#F7EFE8]">
              DISPATCH SERVICE CONFIGURATION
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-stone-900/60 hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-3.5 rounded-xl bg-[#1A120E] border border-amber-900/30 text-xs text-stone-300 mb-6 flex items-start space-x-2.5 leading-relaxed font-light">
          <Info size={16} className="text-amber-400 shrink-0 mt-0.5" />
          <p>
            Captain Chai functions out-of-the-box with immediate simulated dispatch and full HTML record inspection. To route through your personal <strong>EmailJS</strong> mailbox service, supply your credentials below.
          </p>
        </div>

        <form onSubmit={handleSave} className="space-y-4 font-sans text-xs">
          <div>
            <label className="block font-mono text-[10px] tracking-wider uppercase text-stone-400 mb-1.5">
              Service ID
            </label>
            <input
              type="text"
              value={config.serviceId}
              onChange={(e) => setConfig({ ...config, serviceId: e.target.value })}
              placeholder="e.g. service_xxxxxxx"
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#090706] border border-amber-950/80 focus:border-amber-500/60 text-stone-200 font-mono text-xs focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-mono text-[10px] tracking-wider uppercase text-stone-400 mb-1.5">
              Template ID
            </label>
            <input
              type="text"
              value={config.templateId}
              onChange={(e) => setConfig({ ...config, templateId: e.target.value })}
              placeholder="e.g. template_xxxxxxx"
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#090706] border border-amber-950/80 focus:border-amber-500/60 text-stone-200 font-mono text-xs focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-mono text-[10px] tracking-wider uppercase text-stone-400 mb-1.5">
              Public Key
            </label>
            <input
              type="text"
              value={config.publicKey}
              onChange={(e) => setConfig({ ...config, publicKey: e.target.value })}
              placeholder="e.g. user_xxxxxxx / public_key"
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#090706] border border-amber-950/80 focus:border-amber-500/60 text-stone-200 font-mono text-xs focus:outline-none"
            />
          </div>

          <div className="pt-4 flex items-center justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-400 text-xs font-mono uppercase transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-[#090706] font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 transition-all cursor-pointer"
            >
              {savedSuccess ? <Check size={14} /> : null}
              <span>{savedSuccess ? 'SAVED' : 'SAVE CREDENTIALS'}</span>
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default EmailConfigModal;
