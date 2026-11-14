# Intervexa architecture

Intervexa is a React single-page web application served by Vite in development. React Router controls page navigation. Supabase Auth manages user identity and issues access tokens. The browser sends those tokens as Bearer credentials to the Express API.

The Express backend validates Supabase access tokens, applies user ownership checks, and accesses Supabase PostgreSQL/Storage. Gemini powers generation and assessment. Deepgram powers recorded-audio transcription and the backend voice-agent WebSocket gateway.

```text
Browser (React + Vite)
  ├── Supabase Auth (publishable key)
  └── Express REST API (Bearer access token)
        ├── Supabase PostgreSQL / Storage
        ├── Gemini
        └── Deepgram
```

The browser must never receive the Supabase secret key, Gemini key, Deepgram key, or Google OAuth client secret.
