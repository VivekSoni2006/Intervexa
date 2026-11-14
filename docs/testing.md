# Testing

From the repository root:
```powershell
npm run build
npm test --prefix backend -- --runInBand
```

Manual end-to-end checks:
1. Sign up, verify email, sign in, and refresh the page.
2. Sign in with Google and confirm the redirect returns to the dashboard.
3. Start an interview using at least 50 characters of source material.
4. Generate a question, submit a typed answer, and test microphone transcription.
5. Complete the interview and review its history.
6. Generate a written exam, save answers, submit, and review the marked result.
7. Update profile information and verify it persists.
8. Tailor a CV using a session with associated job-description material.
9. Confirm a signed-out user cannot open protected routes.
10. Confirm one user cannot retrieve another user's sessions.

Provider-backed checks require valid, freshly rotated credentials and the correct Supabase schema/migrations.
