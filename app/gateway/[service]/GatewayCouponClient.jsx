"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseClient";

export default function GatewayCouponClient({ serviceKey, couponId }) {
  const [state, setState] = useState({ status: "loading" });
  const [secondsLeft, setSecondsLeft] = useState(null);

  useEffect(() => {
    async function loadCoupon() {
      try {
        const ref = doc(db, "gatewayCoupons", couponId);
        const snap = await getDoc(ref);

        if (!snap.exists()) {
          setState({ status: "invalid", reason: "Coupon not found." });
          return;
        }

        const data = snap.data();

        if (data.serviceKey !== serviceKey) {
          setState({
            status: "invalid",
            reason: "Coupon not valid for this service.",
          });
          return;
        }

        if (data.used || data.status === "PAID") {
          setState({
            status: "invalid",
            reason: "This coupon has already been used.",
          });
          return;
        }

        const now = new Date();
        const expiresAt = data.expiresAt?.toDate
          ? data.expiresAt.toDate()
          : new Date(data.expiresAt);

        if (expiresAt <= now) {
          setState({
            status: "invalid",
            reason: "This offer has expired.",
          });
          return;
        }

        const originalAmount = data.originalAmount;
        const finalAmount = data.finalAmount;
        const discountAmount = data.discountAmount;
        const clientName = data.clientName || "";
        const userName = data.userName || "";
        const payMode = data.payMode || "full";
        const baseAmount = data.effectiveBaseAmount || originalAmount;

        setState({
          status: "valid",
          originalAmount,
          baseAmount,
          finalAmount,
          discountAmount,
          expiresAt,
          clientName,
          userName,
          payMode,
        });

        const diffSec = Math.floor(
          (expiresAt.getTime() - now.getTime()) / 1000
        );
        setSecondsLeft(diffSec > 0 ? diffSec : 0);
      } catch (err) {
        console.error(err);
        setState({
          status: "invalid",
          reason: "Error loading coupon.",
        });
      }
    }

    loadCoupon();
  }, [couponId, serviceKey]);

  useEffect(() => {
    if (secondsLeft === null) return;
    if (secondsLeft <= 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev !== null ? prev - 1 : null));
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);

  if (state.status === "loading") {
    return (
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 animate-pulse">
        <p className="text-slate-300">Preparing your secure gateway…</p>
      </div>
    );
  }

  if (state.status === "invalid") {
    return (
      <div className="bg-red-950/60 border border-red-600 rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-red-200 mb-2">
          Gateway not available
        </h2>
        <p className="text-sm text-red-100 mb-3">{state.reason}</p>
        <p className="text-xs text-red-200/80">
          Please contact your VJC counselor to get a fresh payment link.
        </p>
      </div>
    );
  }

  const minutes = secondsLeft !== null ? Math.floor(secondsLeft / 60) : 0;
  const seconds = secondsLeft !== null ? secondsLeft % 60 : 0;
  const isExpired = secondsLeft !== null && secondsLeft <= 0;

  const payLabel =
    state.payMode === "half"
      ? "50% of service fee now, remaining later"
      : "Full service fee now";

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700/80 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl shadow-slate-900/40">
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div>
          {state.clientName && (
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/80 mb-1">
              Secure payment gateway for
            </p>
          )}
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            {state.clientName || "VJC Client"}
          </h2>
          {state.userName && (
            <p className="text-xs text-slate-400 mt-1">
              Assigned counselor:{" "}
              <span className="text-slate-200 font-medium">
                {state.userName}
              </span>
            </p>
          )}
        </div>
        <div className="text-right">
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
            Time left
          </p>
          <p
            className={`font-mono text-2xl ${
              isExpired ? "text-red-400" : "text-amber-300"
            }`}
          >
            {isExpired
              ? "Expired"
              : `${String(minutes).padStart(2, "0")}:${String(
                  seconds
                ).padStart(2, "0")}`}
          </p>
        </div>
      </div>

      {/* Amount card */}
      <div className="grid md:grid-cols-3 gap-4 md:gap-6 items-end">
        <div className="md:col-span-2 bg-slate-900/70 rounded-xl border border-slate-700 p-4 space-y-3">
          <div className="flex justify-between text-sm">
            <div>
              <p className="text-slate-400">Original service fee</p>
              <p className="text-lg line-through text-slate-500">
                ₹{state.originalAmount.toLocaleString("en-IN")}
              </p>
            </div>
            <div className="text-right">
              <p className="text-slate-400">Effective base for this link</p>
              <p className="text-lg text-slate-100">
                ₹{state.baseAmount.toLocaleString("en-IN")}
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">{payLabel}</p>
            </div>
          </div>

          <div className="flex justify-between items-center border-t border-slate-700 pt-3">
            <div>
              <p className="text-slate-400 text-sm">You save</p>
              <p className="text-xl text-emerald-300 font-semibold">
                ₹{state.discountAmount.toLocaleString("en-IN")}
              </p>
            </div>
            <div className="text-right">
              <p className="text-slate-400 text-sm">Payable now</p>
              <p className="text-3xl font-bold text-white">
                ₹{state.finalAmount.toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/70 rounded-xl border border-slate-700 p-4 space-y-2 text-sm">
          <p className="text-slate-300 font-medium">
            100% secure VJC payment gateway
          </p>
          <ul className="text-slate-400 text-xs space-y-1 list-disc list-inside">
            <li>Auto-expiring link (cannot be reused)</li>
            <li>Mapped to your profile and service only</li>
            <li>Invoice and receipt after successful payment</li>
          </ul>
        </div>
      </div>

      {/* Action */}
      <button
        disabled={isExpired}
        className={`w-full mt-2 py-3 rounded-lg font-semibold text-sm md:text-base transition
        ${
          isExpired
            ? "bg-slate-800 text-slate-500 cursor-not-allowed"
            : "bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/30"
        }`}
        onClick={() => {
          if (isExpired) return;
          // integrate Razorpay / Stripe / UPI here
          alert(
            `Proceed to payment for ${serviceKey} with coupon ${couponId} (₹${state.finalAmount})`
          );
        }}
      >
        {isExpired ? "Offer expired" : "Proceed to secure payment"}
      </button>

      <p className="text-[11px] text-slate-500 text-center">
        By proceeding you agree to VJC Overseas service terms and refund policy
        shared by your counselor.
      </p>
    </div>
  );
}
