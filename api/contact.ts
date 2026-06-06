import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_UeYanT4A_BaZKTP5LDM2iMUiGwrHs9ihx");

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    const data = await resend.emails.send({
      from: `Portfolio Contact <onboarding@resend.dev>`,
      to: "bharathip310@gmail.com",
      replyTo: email,
      subject: `New Message from ${name}: ${subject || 'No Subject'}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    });

    res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error("Resend API Error:", error);
    res.status(500).json({ error: error.message || "Failed to send email" });
  }
}
