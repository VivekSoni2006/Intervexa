# Getting started

## Requirements
- Node.js 20 or newer
- npm
- A Supabase project with `backend/supabase_schema.sql` and required migrations applied
- Gemini and Deepgram server API keys

## Configure
1. Copy `backend/.env.example` to `backend/.env`.
2. Copy `frontend/.env.example` to `frontend/.env.local`.
3. Add fresh credentials. Keep server secrets only in `backend/.env`.
4. In Supabase Auth URL settings, allow `http://localhost:5173/**`.
5. If using Google sign-in, enable Google in Supabase Auth and configure its OAuth callback in Google Cloud.

## Run on Windows PowerShell
From the repository root:
```powershell
npm install
npm run install:all
npm run dev
```
Open `http://localhost:5173`. API health is `http://localhost:5050/health`.

If dependencies are already installed, run `npm run dev`. Stop with Ctrl+C.
