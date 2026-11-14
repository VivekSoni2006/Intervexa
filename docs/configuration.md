# Configuration

## Backend: `backend/.env`
Copy from `backend/.env.example`:
- `PORT`: API port, normally `5050`
- `NODE_ENV`: `development` or `production`
- `CORS_ORIGIN`: comma-separated allowed browser origins
- `FRONTEND_URL`: browser application origin
- `SUPABASE_URL`: Supabase project URL
- `SUPABASE_PUBLISHABLE_KEY`: Supabase publishable key
- `SUPABASE_SECRET_KEY`: server-only Supabase secret key
- `GEMINI_API_KEY`: server-only Gemini key
- `DEEPGRAM_API_KEY`: server-only Deepgram key

## Frontend: `frontend/.env.local`
Copy from `frontend/.env.example`:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_API_URL`, normally `http://localhost:5050/api/v1`

Only public configuration belongs in `VITE_` variables. Never expose server-side credentials in browser bundles. Restart Vite and the backend after changing environment files.
