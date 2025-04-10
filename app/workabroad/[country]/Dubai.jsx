import React from 'react';

const highlight = {
  color: 'orange',
  fontWeight: 'bold',
};

const paragraphStyle = {
  fontFamily: 'Times New Roman, serif',
  fontSize: '18px',
  lineHeight: '1.8',
  marginBottom: '20px',
};

const DubaiWorkPermit = () => {
  return (
    <div style={{ padding: '30px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ ...paragraphStyle, fontSize: '28px', fontWeight: 'bold' }}>
        Dubai Work Permit Visa – <span style={highlight}>VJC Overseas</span>
      </h1>

      <p style={paragraphStyle}>
        Welcome to <span style={highlight}>VJC Overseas</span>, your trusted partner for obtaining a Dubai Work Permit Visa. 
        If you’re seeking to enhance your career prospects, experience a dynamic work environment, and explore a thriving city 
        with unparalleled opportunities, a Dubai work visa is your gateway to success.
      </p>

      <h2 style={{ ...paragraphStyle, fontWeight: 'bold' }}>Why Choose Dubai for Work?</h2>
      <p style={paragraphStyle}>
        Dubai is one of the world’s fastest-growing economies, attracting skilled professionals from every corner of the globe. 
        The city offers an exciting blend of modernity, culture, and business innovation. With its strategic location, 
        world-class infrastructure, and no income tax policies, Dubai presents an ideal destination for foreign workers.
      </p>

      <h2 style={{ ...paragraphStyle, fontWeight: 'bold' }}>Benefits of Dubai Work Permit Visa</h2>
      <ul style={{ ...paragraphStyle, paddingLeft: '20px' }}>
        <li><strong>No Income Tax:</strong> Professionals keep 100% of their earnings.</li>
        <li><strong>International Work Experience:</strong> Collaborate with a global workforce.</li>
        <li><strong>High Earning Potential:</strong> Competitive salaries with added benefits.</li>
        <li><strong>World-Class Healthcare & Education:</strong> Top facilities, often covered by employers.</li>
        <li><strong>Safe and Secure Environment:</strong> Low crime rates and strict law enforcement.</li>
        <li><strong>Access to Thriving Industries:</strong> Opportunities in finance, tourism, healthcare, and tech.</li>
      </ul>

      <h2 style={{ ...paragraphStyle, fontWeight: 'bold' }}>Salary Scale in Dubai for Foreign Workers</h2>
      <ul style={{ ...paragraphStyle, paddingLeft: '20px' }}>
        <li>Software Engineers & IT Professionals: AED 10,000 – AED 25,000</li>
        <li>Healthcare Professionals: AED 12,000 – AED 30,000</li>
        <li>Construction & Engineering: AED 8,000 – AED 20,000</li>
        <li>Accountants & Analysts: AED 12,000 – AED 22,000</li>
        <li>Sales & Marketing: AED 8,000 – AED 18,000</li>
      </ul>
      <p style={paragraphStyle}>
        Additional perks often include housing, insurance, paid leave, and performance bonuses.
      </p>

      <h2 style={{ ...paragraphStyle, fontWeight: 'bold' }}>Living in Dubai – A Lifestyle Like No Other</h2>
      <ul style={{ ...paragraphStyle, paddingLeft: '20px' }}>
        <li><strong>High Quality of Life:</strong> Access to malls, fine dining, and beaches.</li>
        <li><strong>Cultural Diversity:</strong> Welcoming to all ethnicities and cultures.</li>
        <li><strong>Modern Infrastructure:</strong> Dubai Metro, taxis, and smart transport systems.</li>
        <li><strong>Work-Life Balance:</strong> Plenty of leisure options and a peaceful lifestyle.</li>
      </ul>

      <h2 style={{ ...paragraphStyle, fontWeight: 'bold' }}>Why Choose <span style={highlight}>VJC Overseas</span>?</h2>
      <ul style={{ ...paragraphStyle, paddingLeft: '20px' }}>
        <li>Expert consultation on visa process and documentation.</li>
        <li>Fast and smooth application handling.</li>
        <li>Personal help with housing, healthcare, and settling in.</li>
        <li>Legal support to stay compliant with Dubai regulations.</li>
      </ul>

      <h2 style={{ ...paragraphStyle, fontWeight: 'bold' }}>Get Your Dubai Work Permit Visa Today!</h2>
      <p style={paragraphStyle}>
        Embark on your professional journey in Dubai with confidence. <span style={highlight}>VJC Overseas</span> provides 
        tailored support to ensure your Dubai Work Permit Visa process is seamless. Reach out now to begin your exciting future!
      </p>
    </div>
  );
};

export default DubaiWorkPermit;
