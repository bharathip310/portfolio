import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import PDFDocument from "pdfkit";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Resend with the provided key or from environment
  const resend = new Resend(process.env.RESEND_API_KEY || "re_UeYanT4A_BaZKTP5LDM2iMUiGwrHs9ihx");

  // API Route for sending emails
  app.post("/api/contact", async (req, res) => {
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
  });

  // API Route for generating and downloading the resume
  app.get("/api/download-resume", (req, res) => {
    try {
      const doc = new PDFDocument({ margin: 50 });
      const chunks: Buffer[] = [];

      doc.on('data', (chunk) => {
        chunks.push(chunk);
      });

      doc.on('end', () => {
        const result = Buffer.concat(chunks);
        res.setHeader('Content-disposition', 'attachment; filename="Bharathi_P_Resume.pdf"');
        res.setHeader('Content-type', 'application/pdf');
        res.setHeader('Content-Length', result.length);
        res.send(result);
      });

      // Add content to PDF
      doc.fontSize(24).font('Helvetica-Bold').text('BHARATHI P', { align: 'center' });
      doc.fontSize(14).font('Helvetica').text('Full Stack Developer', { align: 'center' });
      doc.moveDown(0.5);
      doc.fontSize(10).text('Cuddalore, Tamil Nadu | 7010624085 | bharathip310@gmail.com', { align: 'center' });
      doc.moveDown(2);

      // Summary
      doc.fontSize(14).font('Helvetica-Bold').text('PROFESSIONAL SUMMARY');
      doc.moveDown(0.5);
      doc.fontSize(10).font('Helvetica').text('Motivated and detail-oriented Full Stack Developer and third-year BE Computer Science student at Meenakshi Sundararajan Engineering College. Experienced in building end-to-end web applications using React, Node.js, Express, HTML, Python, and MongoDB. Completed an internship at Eagle Hi-Tech Softclou Pvt Ltd with hands-on exposure to real-world web development. Passionate about crafting scalable, user-friendly software solutions.');
      doc.moveDown(1.5);

      // Skills
      doc.fontSize(14).font('Helvetica-Bold').text('TECHNICAL SKILLS');
      doc.moveDown(0.5);
      doc.fontSize(10).font('Helvetica-Bold').text('Frontend: ', { continued: true }).font('Helvetica').text('HTML5, CSS3, JavaScript, React.js');
      doc.font('Helvetica-Bold').text('Backend: ', { continued: true }).font('Helvetica').text('Node.js, Express.js, Python');
      doc.font('Helvetica-Bold').text('Database: ', { continued: true }).font('Helvetica').text('MongoDB');
      doc.font('Helvetica-Bold').text('Tools & Others: ', { continued: true }).font('Helvetica').text('Git, VS Code, Typewriting (Fast & Accurate)');
      doc.moveDown(1.5);

      // Experience
      doc.fontSize(14).font('Helvetica-Bold').text('INTERNSHIP EXPERIENCE');
      doc.moveDown(0.5);
      doc.fontSize(12).text('Web Development Intern | Eagle Hi-Tech Softclou Pvt Ltd', { continued: true }).text('Chennai, Tamil Nadu', { align: 'right' });
      doc.fontSize(10).font('Helvetica-Oblique').text('Certificate of Internship — Successfully Completed', { align: 'left' });
      doc.moveDown(0.5);
      doc.font('Helvetica').text('• Designed and developed responsive web pages using HTML, CSS, and JavaScript.');
      doc.text('• Gained hands-on experience in full stack development using React.js for frontend and Node.js/Express for backend.');
      doc.text('• Collaborated in a professional software development environment, applying real-time skills.');
      doc.text('• Demonstrated strong commitment to learning, growth, and delivering quality work.');
      doc.moveDown(1.5);

      // Projects
      doc.fontSize(14).font('Helvetica-Bold').text('PROJECTS');
      doc.moveDown(0.5);
      doc.fontSize(11).text('Smart Helmet Public Safety System');
      doc.fontSize(10).font('Helvetica').text('• Integrated hardware and software to enhance rider safety through helmet detection, accident monitoring, and emergency alerts.');
      doc.text('• Technologies used: Python, IoT sensors, embedded systems.');
      doc.moveDown();
      doc.fontSize(11).font('Helvetica-Bold').text('Heart Disease Prediction System');
      doc.fontSize(10).font('Helvetica').text('• Built a machine learning model to analyze medical data and predict heart disease risk, supporting early diagnosis and preventive healthcare.');
      doc.text('• Technologies used: Python, scikit-learn, data analysis libraries.');
      doc.moveDown(1.5);

      // Education
      doc.fontSize(14).font('Helvetica-Bold').text('EDUCATION');
      doc.moveDown(0.5);
      doc.fontSize(11).text('BE in Computer Science Engineering', { continued: true }).text('2024 – Present', { align: 'right' });
      doc.fontSize(10).font('Helvetica').text('Meenakshi Sundararajan Engineering College, Chennai', { align: 'left' });
      doc.moveDown(0.5);
      doc.fontSize(11).font('Helvetica-Bold').text('12th Standard (HSC)', { continued: true }).text('2023–24 | 82%', { align: 'right' });
      doc.fontSize(10).font('Helvetica').text('St. Andrews Matric HR Sec School, Thirumanthurai', { align: 'left' });
      doc.moveDown(0.5);
      doc.fontSize(11).font('Helvetica-Bold').text('10th Standard (SSLC)', { continued: true }).text('2021–22 | 75%', { align: 'right' });
      doc.fontSize(10).font('Helvetica').text('St. Andrews Matric HR Sec School, Thirumanthurai', { align: 'left' });
      doc.moveDown(1.5);

      // Hackathons
      doc.fontSize(14).font('Helvetica-Bold').text('HACKATHONS & COMPETITIONS');
      doc.moveDown(0.5);
      doc.fontSize(10).font('Helvetica-Bold').text('• Smart India Hackathon — ', { continued: true }).font('Helvetica').text("Participated in India's largest open innovation hackathon.");
      doc.fontSize(10).font('Helvetica-Bold').text('• GUVI HCL — ', { continued: true }).font('Helvetica').text('Completed technical challenge/competition organized by GUVI.');
      doc.moveDown(1.5);

      // Declaration
      doc.fontSize(14).font('Helvetica-Bold').text('DECLARATION');
      doc.moveDown(0.5);
      doc.fontSize(10).font('Helvetica').text('I hereby declare that the information provided above is accurate and true to the best of my knowledge and belief.');
      doc.moveDown(1.5);
      
      const currentY = doc.y;
      doc.text('Date: 06.06.2026', 50, currentY);
      doc.text('Place: Chennai', 250, currentY);
      doc.font('Helvetica-Bold').text('Bharathi P', 450, currentY);

      doc.end();
    } catch (error) {
      console.error('Error generating PDF:', error);
      res.status(500).json({ error: "Failed to generate PDF" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Note: this may need to be slightly adjusted depending on Express version
    // express v4 uses app.get('*', ...)
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
