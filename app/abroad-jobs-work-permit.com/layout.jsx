// app/vjc-jobs-portal/layout.jsx

import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Study Abroad Programs | VJC Overseas",
  description: "Explore global career opportunities with VJC Overseas Jobs Portal. Apply for top international job openings in IT, Healthcare, Nursing, and Pharmaceutical sectors.",
  keywords: "VJC Overseas, Work Abroad 2025, Jobs in Canada, Jobs in Germany, Pharma Jobs, IT Jobs Abroad, VJC Work Permit, Nursing Jobs, Visa Sponsorship Jobs"
};

export default function Layout({ children }) {
  return <ClientLayout>{children}</ClientLayout>;
}
