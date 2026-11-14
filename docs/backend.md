# Backend

The backend is a Node.js / Express API. It listens on `PORT` (5050 in local development) and exposes versioned routes under `/api/v1`.

| Route group | Purpose |
|---|---|
| `/auth` | Authentication helpers |
| `/users` | User profile and account operations |
| `/interviews` | Interview preparation, turns, answers and lifecycle |
| `/exams` | Exam preparation, answer saving and marking |
| `/questions` | Question generation |
| `/responses` | Response retrieval and submission |
| `/speech` | Deepgram transcription and speech utilities |
| `/feedback` | Feedback operations |
| `/history` | Session history, statistics, notes and archive |
| `/cv` | CV tailoring |
| `/job-descriptions` | Job description resources |

All feature routes require a valid Supabase access token. User ownership is enforced by the backend services and database policies.
