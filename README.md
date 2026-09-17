# ☕ CAPTAIN CHAI — The Vigil of Panamukku
### *Official Superhero Help Portal & Character Experience*

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Web Audio API](https://img.shields.io/badge/Web_Audio-Synthesized-amber?style=for-the-badge&logo=audio&logoColor=black)]()

> *“Panamukku sleeps easier knowing someone’s watching.”*

---

## 📖 Overview

**Captain Chai** is an emotionally grounded, cinematic web portal built around **Kannan** — a quiet roadside tea stall seller by day and an unseen superhuman guardian by night in the fictional town of **Panamukku**.

Designed with the aesthetic depth and visual restraint of a prestige television series or editorial character dossier, this portal serves two purposes:
1. **An Immersive Narrative Experience**: Telling the story of grief, an unexplained abduction, an altered physiology, and a quiet double life.
2. **A Functional Help & Alliance Terminal**: An interactive helpline where citizens in distress can submit dispatches, ring the mythical hanging stall bell, and other altered individuals can make encrypted contact.

---

## ☕ The Lore & Backstory

### 1. The Roadside Stall & The Loss
Kannan grew up on the corner of Panamukku junction, helping his father brew cutting chai in the early morning fog. When his father died suddenly in a road accident, Kannan — barely out of his teens — gave up his own path in life to take over the stall and support his mother, waking up every morning at 5:00 AM to keep the brass kettle boiling.

### 2. The Abduction & The Alteration
One evening, Kannan was abducted by an unknown stranger, held overnight, and left unconscious on the wet roadside gravel with no memory of what happened. During those missing twelve hours, his biology was modified — infusing him with extraordinary kinetic velocity, heightened acoustic perception, and structural physical density.

### 3. The Father's Recipe as Biochemical Catalyst
When he woke, his mother made him tea using his late father's secret blend of roasted spices, ginger, and black pepper to comfort him. The moment he drank it, the balance of ingredients acted as the precise biochemical catalyst needed to ignite and stabilize his altered cells — causing his senses to sharpen and his fingers to shatter the tempered glass tumbler in his hand.

### 4. The Unrevealed Secret Identity
> *“The people of Panamukku thank Captain Chai every time he saves someone. None of them have ever thought to thank Kannan, the boy who’s poured their tea every morning for years.”*

By day, he wipes wooden benches and serves 20-rupee cups to autorickshaw drivers and regulars. By night, he moves across Panamukku in silence, disappearing before anyone can ask his name. Only his mother quietly suspects the truth in his weary eyes at dawn, but she simply pours his father’s tea and never asks.

### 5. The Urban Legend of the Hanging Brass Bell
Local lore says that if you walk up to the roadside tea stall of Panamukku in the dead of night and pull the hanging weathered brass bell on the awning, Captain Chai will hear the chime across town and materialize out of the steam.

### 6. The Alliance Protocol: The Search for the Others
Kannan knows the entity that abducted and altered him did not stop with one person in Panamukku. Through this portal, he broadcasts an encrypted beacon across the region for other altered individuals to make safe contact, find sanctuary, and stand together.

---

## ✨ Key Features & Interactive Architecture

### 🫖 1. Atmospheric Cinematic Atmosphere
- **Aesthetic Palette**: Deep charcoal soot (`#080605`), warm ambient amber (`#F59E0B`), and burnt gold (`#D97706`) inspired by roadside tungsten stall lighting at night.
- **Dynamic Mist Canvas**: Real-time 2D canvas rendering atmospheric steam and fog particles drifting smoothly with zero performance degradation.
- **Bespoke Logotype**: Dual-tone distressed typography pairing `Bebas Neue`, `Cormorant Garamond`, `Cinzel`, and `Plus Jakarta Sans`.

### 👁️ 2. The Superhero Silhouette (`CaptainSilhouette.jsx`)
- Portrays Captain Chai standing in dark shadow, wearing a weathered tactical jacket with a subtle steam-wisp fabric pattern.
- Features **sharp, piercing glowing amber eyes** with a slow breathing pulse looking directly forward, backed by a dimly lit roadside stall with a warm 60W hanging bulb.

### 🔔 3. The Mythical Hanging Brass Bell (`TeaStallAnchor.jsx`)
- Interactive weathered brass bell hanging from the wooden stall canopy.
- Clicking **"Ring The Bell"** triggers a custom Web Audio API synthesized brass bell chime with rich harmonic overtones.
- Physical pendulum swing animation with steam gathering as **Captain Chai materializes** with his glowing eyes to ask: *“You rang the bell. I'm here. What happened?”*

### 💬 4. Conversational Helpline (`ChatPortal.jsx`)
- Minimalist, dark-mode messaging terminal with natural typing delays and message sequencing:
  1. **Citizen Name / Alias**
  2. **Age Verification**
  3. **Panamukku Location / Sector**
  4. **Email Address**
  5. **Purpose / Urgency** (Emergency, General Grievance, or *Meta-Human Alliance Contact*)
  6. **Detailed Statement / Manifestation**
- Empathic, in-character confirmation with instant record generation.

### 📡 5. The Alliance Beacon (`AllianceBeacon.jsx`)
- A dedicated encrypted frequency for other altered individuals.
- Confidential submission form allowing metahumans to log their abilities and establish safe rendezvous points behind the stall.

### 📧 6. Production Email Dispatch (`emailService.js`)
- Dispatches a formatted HTML receipt directly to the visitor's email address.
- Subject: `Captain Chai has received your message`.
- Full **EmailJS integration** with fallback simulation and live **HTML dossier inspector** modal.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [React 19](https://react.dev/) | Component architecture & state management |
| **Bundler** | [Vite 6](https://vitejs.dev/) | Fast development and optimized production build |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) | Custom theme tokens, tactile surfaces & typography |
| **Motion** | [Framer Motion 12](https://www.framer.com/motion/) | Cinematic scroll reveals, pendulum physics & transitions |
| **Audio Engine** | [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) | Pure procedural synthesis (steam whoosh, tumbler clink, brass bell chime) |
| **Email Delivery** | [@emailjs/browser](https://www.emailjs.com/) | Client-side email dispatch with HTML templates |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, minimalist SVG line glyphs |

---

## 📂 Project Structure

```
├── public/
│   ├── assets/              # Avatar and key visual assets
│   ├── favicon.svg          # Custom cutting chai favicon
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── AllianceBeacon.jsx    # Search for other altered individuals
│   │   ├── CaptainSilhouette.jsx # Silhouette with glowing amber eyes
│   │   ├── ChatPortal.jsx        # Conversational helpline terminal
│   │   ├── EmailConfigModal.jsx  # EmailJS configuration tool
│   │   ├── Footer.jsx            # Panamukku stall coordinates & credits
│   │   ├── Hero.jsx              # Full-bleed cinematic hero with typewriter lines
│   │   ├── Mission.jsx           # The Creed ("I couldn't save my father...")
│   │   ├── Navbar.jsx            # Header with bespoke wordmark & audio toggle
│   │   ├── OriginStory.jsx       # 7-beat narrative scroll sequence
│   │   ├── Powers.jsx            # Tactical capabilities & recipe catalyst
│   │   ├── Preloader.jsx         # Single brightening amber ember
│   │   ├── SteamCanvas.jsx       # Real-time ambient mist/steam canvas
│   │   └── TeaStallAnchor.jsx    # Roadside stall & interactive hanging bell
│   ├── utils/
│   │   ├── audio.js              # Synthesized procedural sound effects
│   │   ├── chaiBlends.js         # Prescribed herbal mood blends
│   │   └── emailService.js       # EmailJS dispatch & HTML template generator
│   ├── App.jsx                   # Master app assembly
│   ├── index.css                 # Custom design tokens, typography & keyframes
│   └── main.jsx                  # React DOM root
├── index.html                    # Page metadata & Google Fonts imports
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- `npm` or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SteveVijay/Captainchai.git
   cd Captainchai
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/](http://localhost:5173/) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## ⚙️ EmailJS Configuration (Optional)

To enable live remote email delivery to visitor mailboxes:
1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Create an Email Service and Email Template.
3. Click the **Settings (⚙️)** button in the bottom-right corner of the website and input your:
   - **Service ID**
   - **Template ID**
   - **Public Key**
4. Dispatches will now automatically route through your EmailJS service. *(Without credentials, the site automatically uses the built-in instant simulator with the live HTML dossier preview)*.

---

## 📜 Creed & Philosophy

> *“I couldn’t save my father. I can still show up for everyone else’s.”*
> — **Kannan (Captain Chai)**

---

<div align="center">
  <sub>Panamukku Roadside Stall No. 4 • Active Night Patrol 20:00 – 05:00</sub>
</div>
