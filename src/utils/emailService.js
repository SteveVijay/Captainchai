import emailjs from '@emailjs/browser';

export const EMAILJS_CONFIG_KEY = 'captain_chai_emailjs_config';

export const getStoredEmailConfig = () => {
  try {
    const saved = localStorage.getItem(EMAILJS_CONFIG_KEY);
    if (saved) return JSON.parse(saved);
  } catch {
    // Ignore
  }
  return {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  };
};

export const saveEmailConfig = (config) => {
  try {
    localStorage.setItem(EMAILJS_CONFIG_KEY, JSON.stringify(config));
  } catch {
    // Ignore
  }
};

/**
 * Generates cinematic, elegant dark/amber HTML template for Captain Chai's receipt confirmation in Panamukku
 */
export const generateChaiEmailHtml = ({ name, age, location, email, urgency, grievance, timestamp }) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Captain Chai — Message Receipt</title>
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #080605; margin: 0; padding: 24px 12px; color: #E8DDD2; }
    .container { max-width: 580px; margin: 0 auto; background-color: #120E0C; border: 1px solid #382419; border-radius: 8px; overflow: hidden; box-shadow: 0 16px 40px rgba(0,0,0,0.8); }
    .header { padding: 32px 28px; border-bottom: 1px solid #281912; background: linear-gradient(180deg, #1A120E 0%, #120E0C 100%); }
    .eyebrow { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #D97706; margin-bottom: 8px; font-weight: 600; font-family: monospace; }
    .title { margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 1px; color: #F5EDE4; }
    .content { padding: 28px; }
    .intro { font-size: 14px; line-height: 1.6; color: #C9BCB0; margin-top: 0; margin-bottom: 24px; }
    .dossier-box { background-color: #0A0807; border: 1px solid #241610; border-radius: 6px; padding: 18px; margin-bottom: 24px; }
    .row { display: flex; margin-bottom: 10px; font-size: 13px; line-height: 1.5; }
    .label { color: #8C7B70; width: 110px; flex-shrink: 0; text-transform: uppercase; font-size: 11px; letter-spacing: 1px; padding-top: 2px; font-family: monospace; }
    .val { color: #F5EDE4; font-weight: 500; word-break: break-word; }
    .grievance-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #D97706; margin-bottom: 8px; font-weight: 600; font-family: monospace; }
    .grievance-text { background-color: #18110D; border-left: 2px solid #D97706; padding: 14px 18px; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #F5EDE4; font-style: italic; }
    .footer { padding: 24px 28px; border-top: 1px solid #1F1510; background-color: #0B0807; font-size: 12px; color: #7C6C62; line-height: 1.6; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="eyebrow">DISPATCH CONFIRMATION // PANAMUKKU</div>
      <h1 class="title">Captain Chai has received your message</h1>
    </div>
    
    <div class="content">
      <p class="intro">
        Hello <strong>${name}</strong>,<br>
        Your dispatch reached the Panamukku portal. Whatever is happening, know that your words have been recorded. If immediate presence is warranted, watch for the quiet roadside stall.
      </p>
      
      <div class="dossier-box">
        <div class="row"><div class="label">Citizen:</div><div class="val">${name} (Age: ${age})</div></div>
        <div class="row"><div class="label">Location:</div><div class="val">${location}</div></div>
        <div class="row"><div class="label">Email:</div><div class="val">${email}</div></div>
        <div class="row"><div class="label">Priority:</div><div class="val" style="color: ${urgency?.toLowerCase().includes('urgent') ? '#EF4444' : '#F59E0B'};">${urgency || 'Standard Watch'}</div></div>
        <div class="row"><div class="label">Logged At:</div><div class="val">${timestamp}</div></div>
      </div>
      
      <div class="grievance-label">STATEMENT ON RECORD:</div>
      <div class="grievance-text">
        "${grievance}"
      </div>
    </div>
    
    <div class="footer">
      <p style="margin: 0 0 6px 0;"><strong>Captain Chai Help Portal</strong> • Panamukku Roadside Watch (Stall No. 4)</p>
      <p style="margin: 0;">This is an automated transmission confirming that your message was safely recorded.</p>
    </div>
  </div>
</body>
</html>
  `.trim();
};

/**
 * Sends real email via EmailJS or falls back safely with complete HTML payload preview
 */
export const sendChaiEmail = async (dispatchData) => {
  const config = getStoredEmailConfig();
  const timestamp = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'medium',
  });

  const payload = {
    ...dispatchData,
    timestamp,
    email_html: generateChaiEmailHtml({ ...dispatchData, timestamp }),
  };

  // If EmailJS credentials are configured
  if (config.serviceId && config.templateId && config.publicKey) {
    try {
      const templateParams = {
        to_email: dispatchData.email,
        to_name: dispatchData.name,
        from_name: 'Captain Chai',
        subject: 'Captain Chai has received your message',
        visitor_name: dispatchData.name,
        visitor_age: dispatchData.age,
        visitor_location: dispatchData.location,
        visitor_email: dispatchData.email,
        urgency: dispatchData.urgency || 'Standard',
        grievance: dispatchData.grievance,
        timestamp: timestamp,
        message_html: payload.email_html,
      };

      const res = await emailjs.send(
        config.serviceId,
        config.templateId,
        templateParams,
        config.publicKey
      );

      return {
        success: true,
        mode: 'emailjs',
        response: res,
        payload,
      };
    } catch (err) {
      console.warn('EmailJS delivery encounter:', err);
      return {
        success: true,
        mode: 'fallback',
        error: err?.text || err?.message || 'Email service connection unavailable',
        payload,
      };
    }
  }

  // Simulated transmission delay for reliable local static site deployment
  await new Promise((resolve) => setTimeout(resolve, 1100));

  return {
    success: true,
    mode: 'simulated',
    payload,
  };
};
