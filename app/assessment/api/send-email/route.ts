import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const mcqQuestions = {
  Germany: [
    { question: "Select your age", options: ["Below 18", "18 to 35", "35 to 40", "Above 40"] },
    { question: "Qualification", options: ["Is your qualification and University fully recognized", "Is your qualification and University Partially recognized"] },
    { question:"Relevant Work Experience", options:["5 years in the last 7 years","2 Years in the last 5 years"] },
    { question:"German Language Proficiency", options:["A2 level","B1 Level","B2 and above"] },
    { question:"English Language Proficiency: C1 Level", options:["Yes","No"] },
    { question:"Previous Legal Stay in Germany", options:["Yes","No"] },
    { question:"Spouse Qualifying", options:["Yes","No"] },
  ],
  Canada: [
    { question: "Your age group", options: ["Below 18", "18 - 35", "36", "37","38","39","40","41","42","43","44","45","46","47 or more"] },
    { question: "Your years of work experience", options: ["1 year", "2 year", "3 year", "4 year","5 year","6 year","7 or more Years"] },
    { question: "Your highest qualification", options: ["Ph.D","Masters","Diploma after Bachelors","Bachelors","Diploma after secondary"] },
    { question:"Your English Proficiency", options:["Very High Proficiency","High Proficiency","Moderate Proficiency","Basic Proficiency","No Proficiency"]},
    { question:"Your French Proficiency", options:["Very High Proficiency","High Proficiency","Moderate Proficiency","Basic Proficiency","No Proficiency"]},
    { question:"Are you married?", options:["Yes","No"] },
    { question:"Have you worked in Canada for 1 or more years?", options:["Yes","No"]},
    { question:"Have you Studied in Canada for 2 or more years?", options:["Yes","No"]},
    { question:"Do you have an adult relative in Canada on a PR visa/is a citizen?", options:["Yes","No"]},
  ],
  USA: [
    { question: "Select your age", options: ["18-24", "25-32", "33-39", "40-44","45 and above"] },
    { question: "Your highest qualification", options: ["Ph.D","Masters","Diploma after Bachelors","Bachelors","Diploma after secondary","Ph.D related to Your work profile","Related to STEM"] },
    { question:"Your total work experience", options:["Less than 1 year","1 year","2 year","3 year","4 year","5 year","6 year","7 year","8 years or more years"]},
    { question:"Your English", options:["Very High Proficiency","High Proficiency","Moderate Proficiency","Basic Proficiency","No Proficiency"]},
    { question:"Do you hold a job offer from UK and an approved sponsor, and is at an appropraite skill level?", options:["YES","NO"]}
  ],
  UK: [
    { question: "Select your age", options: ["18-24", "25-32", "33-39", "40-44","45 and above"] },
    { question: "Your highest qualification", options: ["Ph.D","Masters","Diploma after Bachelors","Bachelors","Diploma after secondary","Ph.D related to Your work profile","Related to STEM"] },
    { question:"Your total work experience", options:["Less than 1 year","1 year","2 year","3 year","4 year","5 year","6 year","7 year","8 years or more years"]},
    { question:"Your English", options:["Very High Proficiency","High Proficiency","Moderate Proficiency","Basic Proficiency","No Proficiency"]},
    { question:"Do you hold a job offer from UK and an approved sponsor, and is at an appropraite skill level?", options:["YES","NO"]}
  ],
  Australia:[
    { question: "Select your age", options: ["18-24", "25-32", "33-39", "40-44","45 and above"] },
    { question: "Your highest qualification", options: ["Ph.D","Masters","Diploma after Bachelors","Bachelors","Diploma after secondary","Ph.D related to Your work profile","Related to STEM"] },
    { question:"Your total work experience", options:["Less than 1 year","1 year","2 year","3 year","4 year","5 year","6 year","7 year","8 years or more years"]},
    { question:"Your English", options:["Very High Proficiency","High Proficiency","Moderate Proficiency","Basic Proficiency","No Proficiency"]},
  ],
  Newzealand: [
    { question: "Select your age", options: ["18-24", "25-32", "33-39", "40-44","45 and above"] },
    { question: "Your highest qualification", options: ["Ph.D","Masters","Diploma after Bachelors","Bachelors","Diploma after secondary","Ph.D related to Your work profile","Related to STEM"] },
    { question:"Your total work experience", options:["Less than 1 year","1 year","2 year","3 year","4 year","5 year","6 year","7 year","8 years or more years"]},
    { question:"Your English", options:["Very High Proficiency","High Proficiency","Moderate Proficiency","Basic Proficiency","No Proficiency"]},
    { question:"Do you hold a job offer from UK and an approved sponsor, and is at an appropraite skill level?", options:["YES","NO"]}
  ]
};

export async function POST(request: Request) {
  const { name, email, phone, age, message, selectedCountry, mcqAnswers, landingPage } = await request.json();

  let mcqDetails = "";
  if (selectedCountry && mcqQuestions[selectedCountry]) {
    mcqDetails = mcqQuestions[selectedCountry]
      .map((q, idx) => `Q${idx + 1}: ${q.question}\nA: ${mcqAnswers[idx] ?? ""}\n`)
      .join('\n');
  } else {
    mcqDetails = "No MCQ Answers Recorded\n";
  }

  const emailText = `
Landing Page: ${landingPage}

Selected Country: ${selectedCountry}

${mcqDetails}

Name: ${name}
Email: ${email}
Phone: ${phone}
Age: ${age}
Message: ${message}
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

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'vjcbangalore@gmail.com',
      subject: 'New Contact Form Submission From assessment',
      text: emailText,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('Error sending email:', error.message);
    return NextResponse.json({ message: 'Error sending email', error: error.message }, { status: 500 });
  }
}