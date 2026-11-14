# Feature status

## Implemented in the web client
- Supabase email/password sign-in and registration
- Google sign-in initiation
- Password reset email and reset form
- Protected dashboard and profile editing
- Interview setup from pasted source material or a supported uploaded document
- Interview turn generation and answer submission
- Optional recorded answer capture and Deepgram transcription
- Written exam generation, answer persistence, submission, and result review
- History list, session detail, and personal notes
- CV tailoring flow against a selected interview session

## Limitations to verify
- Browser interview audio is recorded and transcribed per answer; the web client does not yet implement full-duplex streaming audio playback through the Deepgram voice-agent WebSocket.
- CV output rendering depends on the exact fields returned by the configured backend and should be checked with a real CV.
- Production OAuth redirect URLs, RLS policies, storage buckets, and provider quotas must be verified in the target Supabase project.
- A successful frontend build does not prove external provider credentials or database migrations are valid; run end-to-end tests with fresh keys.
