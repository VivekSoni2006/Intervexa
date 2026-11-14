# Deployment

Deploy the frontend as a static Vite site and the Express backend as a Node.js service that supports HTTP and WebSocket upgrades.

Before release:
- Set `NODE_ENV=production`.
- Set exact production `CORS_ORIGIN` and `FRONTEND_URL`.
- Configure production Supabase Site URL and redirect allowlist.
- Add backend-only Supabase secret, Gemini, and Deepgram keys to the hosting provider's secret manager.
- Set frontend `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, and production `VITE_API_URL` at build time.
- Apply database schema and migrations; review RLS policies and Storage buckets.
- Configure HTTPS and WebSocket support for `/api/v1/interviews/agent`.
- Test OAuth, email delivery, uploads, AI provider access, and user data isolation.
- Do not commit `.env` or `.env.local` files.
