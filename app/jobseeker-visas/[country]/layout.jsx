export async function generateMetadata({ params }) {
  const { country } = await params;

  const seo = {
    germany: {
      title: "Apply for Germany Job Seeker Visa 2026",
      description: "Apply for Germany Job Seeker Visa with VJC Overseas.",
    },
    austria: {
      title: "Apply for Austria Job Seeker Visa 2026",
      description: "Apply for Austria Job Seeker Visa with VJC Overseas.",
    },
    portugal: {
      title: "Apply for Portugal Job Seeker Visa 2026 ",
    },
    sweden: {
      title: "Apply for Sweden Job Seeker Visa 2026 ",
    },
    norway: {
      title: "Apply for Norway Job Seeker Visa 2026",
    },
    uae: {
      title: "Apply for UAE Job Seeker Visa 2026",
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