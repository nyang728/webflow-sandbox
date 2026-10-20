// Test endpoint: validates the contact form and echoes success.
// Nothing is stored or emailed. Swap in a real handler (or a Webflow form) later.
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = body ?? {};
  if (!name || !email || !message) {
    return Response.json({ error: "Name, email, and message are required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  return Response.json({
    message: `Thanks, ${name}! Your message was received by the sandbox (test only - nothing was sent).`,
  });
}
