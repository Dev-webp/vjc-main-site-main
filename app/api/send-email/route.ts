import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const mcqQuestions = {
  Germany: [
    { question: "Select your age", options: ["Below 18", "18 to 35", "35 to 40", "Above 40"] },
    { question: "Qualification", options: ["Is your qualification and University fully recognized", "Is your qualification and University Partially recognized"] },
    { question: "Relevant Work Experience", options: ["5 years in the last 7 years", "2 Years in the last 5 years"] },
    { question: "German Language Proficiency", options: ["A2 level", "B1 Level", "B2 and above"] },
    { question: "English Language Proficiency: C1 Level", options: ["Yes", "No"] },
    { question: "Previous Legal Stay in Germany", options: ["Yes", "No"] },
    { question: "Spouse Qualifying", options: ["Yes", "No"] },
  ],
  Canada: [
    { question: "Your age group", options: ["Below 18", "18 - 35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47 or more"] },
    { question: "Your years of work experience", options: ["1 year", "2 year", "3 year", "4 year", "5 year", "6 year", "7 or more Years"] },
    { question: "Your highest qualification", options: ["Ph.D", "Masters", "Diploma after Bachelors", "Bachelors", "Diploma after secondary"] },
    { question: "Your English Proficiency", options: ["Very High Proficiency", "High Proficiency", "Moderate Proficiency", "Basic Proficiency", "No Proficiency"] },
    { question: "Your French Proficiency", options: ["Very High Proficiency", "High Proficiency", "Moderate Proficiency", "Basic Proficiency", "No Proficiency"] },
    { question: "Are you married?", options: ["Yes", "No"] },
    { question: "Have you worked in Canada for 1 or more years?", options: ["Yes", "No"] },
    { question: "Have you Studied in Canada for 2 or more years?", options: ["Yes", "No"] },
    { question: "Do you have an adult relative in Canada on a PR visa/is a citizen?", options: ["Yes", "No"] },
  ],
  USA: [
    { question: "Select your age", options: ["18-24", "25-32", "33-39", "40-44", "45 and above"] },
    { question: "Your highest qualification", options: ["Ph.D", "Masters", "Diploma after Bachelors", "Bachelors", "Diploma after secondary", "Ph.D related to Your work profile", "Related to STEM"] },
    { question: "Your total work experience", options: ["Less than 1 year", "1 year", "2 year", "3 year", "4 year", "5 year", "6 year", "7 year", "8 years or more years"] },
    { question: "Your English", options: ["Very High Proficiency", "High Proficiency", "Moderate Proficiency", "Basic Proficiency", "No Proficiency"] },
    { question: "Do you hold a job offer from UK and an approved sponsor, and is at an appropriate skill level?", options: ["YES", "NO"] },
  ],
  UK: [
    { question: "Select your age", options: ["18-24", "25-32", "33-39", "40-44", "45 and above"] },
    { question: "Your highest qualification", options: ["Ph.D", "Masters", "Diploma after Bachelors", "Bachelors", "Diploma after secondary", "Ph.D related to Your work profile", "Related to STEM"] },
    { question: "Your total work experience", options: ["Less than 1 year", "1 year", "2 year", "3 year", "4 year", "5 year", "6 year", "7 year", "8 years or more years"] },
    { question: "Your English", options: ["Very High Proficiency", "High Proficiency", "Moderate Proficiency", "Basic Proficiency", "No Proficiency"] },
    { question: "Do you hold a job offer from UK and an approved sponsor, and is at an appropriate skill level?", options: ["YES", "NO"] },
  ],
  Australia: [
    { question: "Select your age", options: ["18-24", "25-32", "33-39", "40-44", "45 and above"] },
    { question: "Your highest qualification", options: ["Ph.D", "Masters", "Diploma after Bachelors", "Bachelors", "Diploma after secondary", "Ph.D related to Your work profile", "Related to STEM"] },
    { question: "Your total work experience", options: ["Less than 1 year", "1 year", "2 year", "3 year", "4 year", "5 year", "6 year", "7 year", "8 years or more years"] },
    { question: "Your English", options: ["Very High Proficiency", "High Proficiency", "Moderate Proficiency", "Basic Proficiency", "No Proficiency"] },
  ],
  Newzealand: [
    { question: "Select your age", options: ["18-24", "25-32", "33-39", "40-44", "45 and above"] },
    { question: "Your highest qualification", options: ["Ph.D", "Masters", "Diploma after Bachelors", "Bachelors", "Diploma after secondary", "Ph.D related to Your work profile", "Related to STEM"] },
    { question: "Your total work experience", options: ["Less than 1 year", "1 year", "2 year", "3 year", "4 year", "5 year", "6 year", "7 year", "8 years or more years"] },
    { question: "Your English", options: ["Very High Proficiency", "High Proficiency", "Moderate Proficiency", "Basic Proficiency", "No Proficiency"] },
    { question: "Do you hold a job offer from UK and an approved sponsor, and is at an appropriate skill level?", options: ["YES", "NO"] },
  ]
};

type CountryKey = keyof typeof mcqQuestions;

export async function POST(request: Request) {
  const contentType = request.headers.get('content-type');

  if (contentType?.includes("application/json")) {
    const data = await request.json();

    // ✅ Auth welcome
    if (data.type === "auth-welcome" && data.email) {
      const name = data.name ?? "VJC User";
      const welcomeMessage = `
Welcome ${name},

Thank you for signing in to VJC Overseas Jobs Portal!

We're excited to help you explore global career and visa opportunities.

Visit us at: https://vjc-overseas.com

Best regards,  
VJC Overseas Team
`;

      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
          tls: { rejectUnauthorized: true },
        });

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: data.email,
          subject: "Welcome to VJC Overseas Jobs Portal 🎉",
          text: welcomeMessage,
        });

        return NextResponse.json({ message: "Welcome email sent successfully" });
      } catch (error: any) {
        console.error("Error sending welcome email:", error.message);
        return NextResponse.json({ message: "Error sending welcome email", error: error.message }, { status: 500 });
      }
    }
    if (data.type === "job-application" && data.email) {
  const name = data.name ?? "VJC User";
  const jobTitle = data.appliedJob?.title ?? "a job";
  const jobCountryUrl = data.portalUrl || "https://vjc-overseas.com/vjc-jobs-portal";

  const message = `
Hello ${name},

Thank you for applying to "${jobTitle}" via the VJC Overseas Job Portal.

We've successfully received your application.

You can explore more jobs here: ${jobCountryUrl}

Job Details:
- Job Title: ${data.appliedJob?.title}
- Company: ${data.appliedJob?.company}
- Location: ${data.appliedJob?.location}
- Domain: ${data.appliedJob?.domain}

Your submitted profile:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}
- Experience: ${data.experience}
- Country: ${data.country}
- Resume: ${data.resumeName ?? "Not provided"}
- Skills: ${(data.skills || []).join(", ")}
- Message: ${data.message || "N/A"}

Best regards,  
VJC Overseas Team
`;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: { rejectUnauthorized: true },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: `Your Application to ${jobTitle} at VJC Overseas`,
      text: message,
    });

    return NextResponse.json({ message: "Application email sent successfully" });
  }catch (err: any) {
        console.error("Apply Now Email Error:", err.message);
        return NextResponse.json({ error: "Failed to send application email" }, { status: 500 });
  }
}

    // ✅ Apply Now Logic
    if (data.type === "job-apply" && data.name && data.email && data.appliedJob) {
      const { name, email, country, skills, appliedJob } = data;

      const html = `
        <h3>Applicant Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Skills:</strong> ${skills}</p>
        <h4>Applied for:</h4>
        <p><strong>Job Title:</strong> ${appliedJob.title}</p>
        <p><strong>Company:</strong> ${appliedJob.company}</p>
        <p><strong>Location:</strong> ${appliedJob.location}</p>
        <p><strong>Domain:</strong> ${appliedJob.domain}</p>
      `;

      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: "vjcbangalore@gmail.com",
          subject: `New Job Application: ${appliedJob.title}`,
          html,
        });

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: email,
          subject: `Your Application for ${appliedJob.title}`,
          html: `
            <p>Hi ${name},</p>
            <p>Thank you for applying to <strong>${appliedJob.title}</strong> at <strong>${appliedJob.company}</strong>.</p>
            <p>Our team will review your profile and contact you shortly.</p>
            <br/>
            <p>— VJC Overseas</p>
          `,
        });

        return NextResponse.json({ message: "Application emails sent" });
      } catch (err: any) {
        console.error("Apply Now Email Error:", err.message);
        return NextResponse.json({ error: "Failed to send application email" }, { status: 500 });
      }
    }

    // Preserve data for later use
    request.json = async () => data;
  }

  // ✅ Resume Upload (multipart)
  if (contentType?.includes('multipart/form-data')) {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const selectedJob = formData.get('selectedJob') as string;
    const message = formData.get('message') as string;
    const landingPage = formData.get('landingPage') as string;
    const resumeFile = formData.get('resume') as File;

    let attachment = null;
    if (resumeFile && typeof resumeFile === 'object') {
      const buffer = Buffer.from(await resumeFile.arrayBuffer());
      attachment = {
        filename: resumeFile.name,
        content: buffer,
      };
    }

    const jobDetails = `
New Job Application:
Name: ${name}
Email: ${email}
Phone: ${phone}
Job Title: ${selectedJob}
Message: ${message}
Landing Page: ${landingPage}
`;

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        tls: { rejectUnauthorized: true },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'vjcbangalore@gmail.com',
        subject: `New Job Application - ${selectedJob} from ${name}`,
        text: jobDetails,
        attachments: attachment ? [attachment] : [],
      });

      return NextResponse.json({ message: 'Job application email sent successfully' });
    } catch (error: any) {
      console.error('Error sending job email:', error.message);
      return NextResponse.json({ message: 'Error sending job email', error: error.message }, { status: 500 });
    }
  }

  // ✅ Contact or MCQ
  const data = await request.json();
  const landingPage = data.landingPage ?? "";
  const isNormalForm = !!(data.experience || data.qualification);

  let details = `Landing Page: ${landingPage}\n\n`;

  if (isNormalForm) {
    details += `Name: ${data.name ?? ""}
Email: ${data.email ?? ""}
Phone: ${data.phone ?? ""}
Country: ${data.country ?? ""}
Age: ${data.age ?? ""}
Experience: ${data.experience ?? ""}
Qualification: ${data.qualification ?? ""}
Message: ${data.message ?? ""}
`;
  } else if (data.selectedCountry && data.mcqAnswers && (data.selectedCountry in mcqQuestions)) {
    const countryKey = data.selectedCountry as CountryKey;
    const mcqDetails = mcqQuestions[countryKey]
      .map((q, idx) => `Q${idx + 1}: ${q.question}\nA: ${data.mcqAnswers[idx] ?? ""}\n`)
      .join('\n');

    details += `Selected Country: ${data.selectedCountry}\n\n${mcqDetails}
Name: ${data.name ?? ""}
Email: ${data.email ?? ""}
Phone: ${data.phone ?? ""}
Age: ${data.age ?? ""}
Message: ${data.message ?? ""}
`;
  } else {
    details += `Name: ${data.name ?? ""}
Email: ${data.email ?? ""}
Phone: ${data.phone ?? ""}
Message: ${data.message ?? ""}
`;
  }

  details += `\nLanding Page: ${landingPage}\n`;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: { rejectUnauthorized: true },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: ' ',
      subject: `New Contact Form Submission from ${landingPage || "Unknown URL"}`,
      text: details,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('Error sending form email:', error.message);
    return NextResponse.json({ message: 'Error sending email', error: error.message }, { status: 500 });
  }
}
