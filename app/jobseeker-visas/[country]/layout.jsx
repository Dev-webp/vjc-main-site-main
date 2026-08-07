export async function generateMetadata({ params }) {
  const { country } = await params;

  const seo = {
    germany: {
      title: "Apply for Germany Job Seeker Visa 2026",
      description: "Apply for Germany Job Seeker Visa with VJC Overseas.",
    },
    austria: {
      title: "Job Seeker Visa Consultants | VJC Overseas",
      description: "Apply for Austria Job Seeker Visa with VJC Overseas.",
    },
    portugal: {
      title: "Portugal Job Seeker Visa Process & Requirements ",
    },
    sweden: {
      title: "Apply for Sweden Job Seeker Visa 2026 ",
    },
    norway: {
      title: "Apply for Norway Job Seeker Visa 2026",
    },
    uae: {
      title: "UAE Job Seeker Visa Process & Requirements",
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