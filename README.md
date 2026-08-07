# Sarkari-DocuMitra

**AI-Powered Government Document Assistant**

PS-12: Lost in Government Paperwork — an AI assistant for simplifying government documents.

Sarkari-DocuMitra reads any government document you upload and explains it back to you in
plain English and Hindi — what it is, what it means, what's missing, and what to do next.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Known Limitations](#known-limitations)
- [Future Scope](#future-scope)
- [Team](#team)

---

## About the Project

Government paperwork in India is written for officials, not citizens. Forms and notices for
Aadhaar, Udyam, GST, and welfare schemes are full of legal and technical language, and most
guidance available online is English-only. As a result, millions of people — rural citizens,
first-time entrepreneurs, senior citizens, and small business owners — struggle to understand
what a document actually says, whether their information is complete, and what to do next.
Despite India having 900M+ internet users, citizen readiness to navigate e-governance hasn't
kept pace with digitization.

**Sarkari-DocuMitra** closes this last-mile understanding gap. A user uploads a government
document (PDF or photo) through a simple web interface. The app reads the document and sends
it to Google's Gemini AI with a structured prompt, asking for a fixed JSON response covering
everything a citizen actually needs: the document type, a plain-language summary in both
English and Hindi, important dates, fee details, eligibility criteria, the list of required
supporting documents, any missing or incomplete information, clear next-step actions, and an
auto-generated FAQ specific to that document.

The result is rendered as a clean, structured analysis page instead of a wall of legal text —
turning a confusing notice into something a citizen can actually act on. The current build is
a frontend-only React application that calls the Gemini API directly, deployed on Vercel. It
is a working MVP built to demonstrate the core loop — upload, understand, act — with a clear
roadmap toward authentication, document history, and a government scheme recommendation
engine as it matures beyond the hackathon stage.

---

## Key Features

- 📄 **Automatic Document Identification** — detects what kind of document was uploaded
- 🌐 **Bilingual Summaries** — plain-language explanations in English and Hindi
- 📅 **Important Dates Extraction** — surfaces deadlines and key dates
- ✅ **Eligibility Check** — explains who qualifies and how
- 📋 **Required Documents List** — tells the user what else they need
- ⚠️ **Missing Information Detection** — flags incomplete or unclear fields
- ➡️ **Next-Step Recommendations** — tells the user exactly what to do next
- 💬 **AI-Generated FAQ** — auto-creates relevant Q&A for the document

---

## Technology Stack

Sarkari-DocuMitra is built as a lightweight, frontend-only React application that talks
directly to Google's Gemini API — no custom backend is required for the current MVP.

### Frontend

| Technology | Purpose |
|---|---|
| **React 18** | Component-based UI library powering the single-page application |
| **Vite** | Dev server and production bundler, chosen for fast HMR and builds |
| **React Router DOM** | Client-side routing between Landing, Upload, and Analysis pages |
| **Tailwind CSS** | Utility-first styling for a responsive, modern UI |
| **Framer Motion** | Smooth page and element transition animations |
| **Lucide React** | Icon set used throughout the interface |

### AI / Integration

| Technology | Purpose |
|---|---|
| **Google Gemini API** | LLM that reads and simplifies the uploaded document |
| **@google/genai** | Official SDK used to call Gemini from `services/gemini.js` |

### Tooling & Deployment

| Technology | Purpose |
|---|---|
| **ESLint** | Static analysis / lint checks during development |
| **Vercel** | Hosting and CI/CD for the production build |

> The original proposal scoped a fuller stack (Node.js/Express backend, PostgreSQL, an OCR
> engine, JWT/OAuth2 auth, cloud hosting). For this MVP, scope was deliberately narrowed to a
> frontend-only app calling Gemini directly, to ship a complete, working, end-to-end demo
> within the hackathon timeline. The backend/database/auth layers are tracked under
> [Future Scope](#future-scope).

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm v9 or later (ships with Node.js)
- A Google Gemini API key from [Google AI Studio](https://aistudio.google.com/)
- Git

### Installation

```bash
# 1. Clone the repository
git clone <repository-url>
cd sarkari-documitra/frontend

# 2. Install dependencies
npm install

# 3. Configure environment variables
echo "VITE_GEMINI_API_KEY=your_gemini_api_key_here" > .env

# 4. Start the development server
npm run dev
# App runs by default at http://localhost:5173
```

---

## Project Structure

```
sarkari-documitra/
frontend/
├── public/                     Static assets (favicon, manifest, etc.)
├── src/
│   ├── components/
│   │   └── landing/
│   │       ├── Navbar.jsx      Top navigation + logo + login button
│   │       ├── Hero.jsx        Hero section with primary CTA
│   │       ├── Features.jsx    Feature highlight cards
│   │       └── Footer.jsx      Brand info, links, contact section
│   │
│   ├── pages/
│   │   ├── Landing.jsx         Composes the landing page from components
│   │   ├── Upload/              Upload UI: file picker, drag-drop, recents
│   │   └── Analysis.jsx        Renders the AI's structured JSON response
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx       Central route definitions (react-router-dom)
│   │
│   ├── services/
│   │   └── gemini.js           Wraps all calls to the Gemini API,
│   │                            builds the structured prompt, parses response
│   │
│   ├── App.jsx                 Root component, wraps app in BrowserRouter
│   └── main.jsx                Vite/React entry point
│
├── .env                        Local environment variables (not committed)
├── index.html                  Vite HTML entry
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## Environment Variables

Create a `.env` file in `frontend/` with:

| Variable | Description |
|---|---|
| `VITE_GEMINI_API_KEY` | Your Google Gemini API key. Must use the `VITE_` prefix so Vite exposes it to client-side code. |

> ⚠️ In the current MVP this key is used directly from the browser bundle. This is fine for a
> demo but is **not production-safe** — see [Known Limitations](#known-limitations).

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Starts the Vite dev server with hot module replacement |
| `npm run build` | Produces an optimized production build in `dist/` |
| `npm run preview` | Serves the production build locally for a final check |
| `npm run lint` | Runs ESLint across the project (if configured) |

---

## Deployment

The app is deployed on **Vercel**:

| Setting | Value |
|---|---|
| Framework preset | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Environment variable | `VITE_GEMINI_API_KEY` set in Vercel project settings |

---

## Known Limitations

- **API key exposure** — the Gemini API key currently ships inside the client bundle; a
  backend proxy is required before production use.
- **No persistence** — there is no database; refreshing the page loses the current analysis.
- **No authentication** — no login/account system yet.
- **Basic PDF/OCR handling** — not yet hardened for scanned or low-quality images.
- **No document history, dashboard, chatbot, or scheme recommendation engine** yet — these are
  tracked as future work below.

---

## Future Scope

- 🔍 Polished PDF text extraction / OCR
- 📊 Richer analysis dashboard UI
- 🕓 Document history for returning users
- 🔐 User authentication
- 🏅 Government scheme recommendation engine
- 💬 Conversational chatbot for follow-up document queries
- 🌏 Regional language support beyond English + Hindi

---

## Team

**Team Sarkari-DocuMitra**
Akriti Sinha — KIET Deemed to be University
