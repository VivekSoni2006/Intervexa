# Authentication

Supabase Auth provides email/password registration and login, Google OAuth, email confirmation, and password recovery.

The frontend uses only `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`. It obtains the current session and sends its access token to protected API requests as `Authorization: Bearer <token>`.

Configure the Supabase Site URL and redirect allowlist for local and production origins. Configure the Google OAuth Client ID and Client Secret in Supabase's Google provider settings; never place the client secret in frontend variables.

The backend validates access tokens using the Supabase project configuration.
