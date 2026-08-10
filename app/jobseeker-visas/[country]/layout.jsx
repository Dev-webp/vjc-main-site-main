export async function generateMetadata({ params }) {
  const { country } = await params;

  const seo = {
    germany: {
      title: "Apply for Germany Job Seeker Visa 2026",
      description: "Apply for Germany Job Seeker Visa 2026 with VJC Overseas. Check eligibility, required documents, visa process, opportunities and expert guidance for skilled professionals..",
    },
    austria: {
      title: "Austria Job Seeker Visa | VJC Overseas",
      description: "Planning to work abroad? Choose VJC Overseas for Job Seeker Visa services 2026. Get expert guidance, eligibility check and complete visa support.",
    },
    portugal: {
      title: "Portugal Job Seeker Visa Process & Requirements ",
      description: "Apply for Portugal Job Seeker Visa 2026 with VJC Overseas. Check eligibility, requirements, documents, visa process and expert assistance to find job opportunities in Portugal",
    },
    sweden: {
      title: "Sweden Job Seeker Visa | VJC Overseas ",
      descrition: "Planning to work in Sweden? Apply for the Sweden Job Seeker Visa 2026. Get eligibility details, documents, fees and expert guidance from VJC Overseas.",
    },
    norway: {
      title: "Norway Job Seeker Visa Requirements Guide",
      description: "Apply for Norway Job Seeker Visa 2026 with VJC Overseas. Check eligibility, required documents, visa requirements, application process and expert guidance to explore job opportunities in Norway.",
    },
    uae: {
      title: "UAE Job Seeker Visa Process & Requirements",
      description: "Apply for UAE Job Seeker Visa 2026 with VJC Overseas. Check eligibility, required documents, visa fees, application process and expert guidance to explore career opportunities in UAE.",
    },
  };

  return seo[country] || {
    title: "Job Seeker Visa Services 2026 | VJC Overseas",
    description: "Job Seeker Visa Services by VJC Overseas",
  };
}

export default function Layout({ children }) {
  return children;
}