# Frontend

The frontend uses React 18, Vite, React Router, and Lucide icons.

## Routes
- `/`: landing page
- `/auth`, `/auth/forgot`, `/auth/reset`: sign-in, sign-up, password recovery
- `/dashboard`: protected workspace
- `/practice/interview`: interview setup
- `/practice/interview/:id`: interview session with typed answers and optional recorded-answer transcription
- `/practice/exam`: exam setup
- `/practice/exam/:id`: exam sitting
- `/practice/exam/:id/result`: marked exam review
- `/history`, `/history/:id`: session history and review
- `/profile`: account profile
- `/cv-tailor`: tailor a CV against an interview/job-description session

Protected routes redirect signed-out visitors to `/auth`. Supabase session changes update the application navigation state.
