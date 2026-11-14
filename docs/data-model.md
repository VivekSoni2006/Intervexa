# Data model

Intervexa stores application data in Supabase PostgreSQL. The authoritative schema is `backend/supabase_schema.sql`; incremental changes are in `backend/migrations/`.

The schema includes user profiles, job descriptions, interview sessions and questions, exam questions and answers, user responses, feedback, session statistics, tailored CV records, reminders, and audit information.

Apply the base schema to the intended Supabase project and review/apply each migration before using the corresponding feature. Keep row-level security enabled and verify policies against the authenticated user's ID. Never use the service/secret key in browser code.
