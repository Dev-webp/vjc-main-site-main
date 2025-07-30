"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import jwt from "jsonwebtoken";

export default function VerifyPage() {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const token = params.get("token");

    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_EMAIL_SECRET);
        localStorage.setItem("vjc_user_email", decoded.email);
        router.push("/vjc-jobs-portal");
      } catch (err) {
        console.error("Invalid or expired token.");
      }
    }
  }, []);

  return <p className="text-center mt-10">Verifying...</p>;
}
