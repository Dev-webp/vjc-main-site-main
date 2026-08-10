import HomeClient from "./HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Visa Consultants in Hyderabad & Bangalore | VJC Overseas",
  description: "Choose VJC Overseas as your trusted visa consultants in Hyderabad and Bangalore. Get expert guidance for PR visa, study visa, work visa, tourist visa, and immigration services.",
};

export default function Page() {
  return <HomeClient />;
}