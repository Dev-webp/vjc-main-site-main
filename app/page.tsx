import HomeClient from "./HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Visa Consultants in Hyderabad & Bangalore | VJC Overseas",
};

export default function Page() {
  return <HomeClient />;
}