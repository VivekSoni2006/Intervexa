# Intervexa

Intervexa is an AI-assisted web application for interview preparation, written exams, session review, and CV tailoring.

## Technology

- Frontend: React 18, Vite, React Router
- Backend: Node.js and Express
- Authentication and data: Supabase Auth and PostgreSQL
- AI question generation and assessment: Google Gemini
- Speech transcription and live voice gateway: Deepgram

## Features in this web build

- Supabase email/password signup and login, Google sign-in, password reset
- Protected dashboard and account profile
- Interview setup using pasted material or supported document upload
- Interview turn generation, answer submission, and Deepgram audio transcription
- Written exam generation, answer saving, submission, and result review
- Session history and personal notes
- CV tailoring against an interview/job-description session

Live two-way voice-agent streaming is provided by the backend WebSocket gateway. The current browser interface uses recorded-answer transcription plus text-based turn submission; it does not yet provide a full-duplex streaming microphone/audio playback experience. Do not describe that browser experience as full-duplex until it is implemented and tested.

## Requirements

- Node.js 20+ and npm
- Supabase project with the supplied schema applied
- Fresh Supabase publishable and secret keys
- Fresh Gemini and Deepgram API keys
- Google OAuth client configured in Supabase (optional)

## Setup

1. In Supabase SQL Editor, run `backend/supabase_schema.sql` on the intended Intervexa project. Review migrations in `backend/migrations` and apply any that are not already reflected in the schema.
2. Configure Supabase Authentication URL settings:
   - Site URL: `http://localhost:5173`
   - Redirect URL allowlist: `http://localhost:5173/**`
3. Copy `backend/.env.example` to `backend/.env` and set server-side credentials.
4. Copy `frontend/.env.example` to `frontend/.env.local`. Only the Supabase URL and publishable key belong in browser variables.
5. From the project root run:

```powershell
npm install
npm run install:all
npm run dev
```

Open `http://localhost:5173`. Backend health: `http://localhost:5050/health`.

## Environment security

Never put `SUPABASE_SECRET_KEY`, `GEMINI_API_KEY`, `DEEPGRAM_API_KEY`, or a Google OAuth Client Secret in any `VITE_` variable. Never commit `.env` or `.env.local`. Rotate credentials that have been pasted into chats, logs, screenshots, or source control.

## Navigation

- `/` landing page
- `/auth`, `/auth/forgot`, `/auth/reset`
- `/dashboard`
- `/practice/interview` and `/practice/interview/:id`
- `/practice/exam` and `/practice/exam/:id`
- `/practice/exam/:id/result`
- `/history` and `/history/:id`
- `/profile`
- `/cv-tailor`

## Project structure

```text
Intervexa/
├── backend/                 # Express API and feature modules
│   ├── src/modules/         # Auth, interviews, exams, speech, history, CV, etc.
│   ├── migrations/
│   ├── supabase_schema.sql
│   └── .env.example
├── frontend/
│   ├── src/App.jsx          # Web routes and user workflows
│   ├── src/api.js
│   ├── src/supabase.js
│   └── .env.example
├── docs/
└── package.json
```

## Troubleshooting

- Restart both dev servers after changing environment variables.
- A `401` usually means the browser session is missing/expired or the frontend and backend point to different Supabase projects.
- A `404` from a feature endpoint may indicate the SQL schema/migrations have not been applied.
- Speech transcription requires a valid Deepgram key and microphone permission; microphone access requires localhost or HTTPS.
- If AI generation fails, verify the Gemini key on the backend only.
