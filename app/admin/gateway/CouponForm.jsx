"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebaseClient";

const SERVICES = [
  { key: "canada-pr", label: "Canada PR" },
  { key: "australia-pr", label: "Australia PR" },
  { key: "visit-visa", label: "Visit Visa" },
];

export default function CouponForm({ onCreated }) {
  const [clientName, setClientName] = useState("");
  const [userName, setUserName] = useState(""); // staff/admin name
  const [serviceKey, setServiceKey] = useState("canada-pr");
  const [originalAmount, setOriginalAmount] = useState("");
  const [discountPercent, setDiscountPercent] = useState("");
  const [payMode, setPayMode] = useState("full"); // full or half
  const [validMinutes, setValidMinutes] = useState(15);
  const [loading, setLoading] = useState(false);
  const [couponId, setCouponId] = useState(null);

  const baseUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : process.env.NEXT_PUBLIC_BASE_URL;

  async function handleCreateCoupon(e) {
    e.preventDefault();
    setCouponId(null);

    const amount = Number(originalAmount);
    const percent = Number(discountPercent);
    const minutes = Number(validMinutes);

    if (!clientName.trim() || !userName.trim()) {
      alert("Enter client name and user name");
      return;
    }

    if (!amount || !percent || !minutes) {
      alert("Enter valid amount, discount %, and minutes");
      return;
    }

    let baseAmount = amount;
    if (payMode === "half") {
      baseAmount = Math.round(amount / 2);
    }

    const discountAmount = Math.round((baseAmount * percent) / 100);
    const finalAmount = baseAmount - discountAmount;

    setLoading(true);
    try {
      const now = new Date();
      const expiresAt = new Date(now.getTime() + minutes * 60 * 1000);

      const ref = await addDoc(collection(db, "gatewayCoupons"), {
        clientName,
        userName,
        serviceKey,
        payMode, // "full" or "half"
        originalAmount: amount,
        effectiveBaseAmount: baseAmount, // amount considered for this coupon
        discountPercent: percent,
        discountAmount,
        finalAmount,
        used: false,
        status: "ACTIVE",
        createdAt: serverTimestamp(),
        expiresAt,
      });

      setCouponId(ref.id);
      if (onCreated) onCreated();
    } catch (err) {
      console.error(err);
      alert("Failed to create coupon");
    } finally {
      setLoading(false);
    }
  }

  const gatewayUrl =
    couponId && `${baseUrl}/gateway/${serviceKey}?coupon=${couponId}`;

  return (
    <>
      <form
        onSubmit={handleCreateCoupon}
        className="space-y-4 bg-slate-900/60 border border-slate-700 rounded-xl p-6"
      >
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Client name
            </label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm"
              placeholder="Client full name"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-1">
              User / counselor name
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm"
              placeholder="Your name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-1">Service</label>
          <select
            value={serviceKey}
            onChange={(e) => setServiceKey(e.target.value)}
            className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm"
          >
            {SERVICES.map((s) => (
              <option key={s.key} value={s.key}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Full service amount (₹)
            </label>
            <input
              type="number"
              value={originalAmount}
              onChange={(e) => setOriginalAmount(e.target.value)}
              className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm"
              placeholder="56000"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Pay mode
            </label>
            <select
              value={payMode}
              onChange={(e) => setPayMode(e.target.value)}
              className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm"
            >
              <option value="full">Full amount now</option>
              <option value="half">50% now (remaining later)</option>
            </select>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Discount percentage (%)
            </label>
            <input
              type="number"
              value={discountPercent}
              onChange={(e) => setDiscountPercent(e.target.value)}
              className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm"
              placeholder="10"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Valid for (minutes)
            </label>
            <input
              type="number"
              value={validMinutes}
              onChange={(e) => setValidMinutes(e.target.value)}
              className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm"
              placeholder="15"
              min="1"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold py-2.5 rounded-lg disabled:opacity-60"
        >
          {loading ? "Creating coupon..." : "Generate Coupon Link"}
        </button>
      </form>

     {couponId && (
  <div className="mt-6 bg-slate-900/60 border border-emerald-500 rounded-xl p-4 space-y-3">
    <p className="text-sm text-emerald-300">
      Coupon created for <span className="font-semibold">{clientName}</span>.
      Share this link (valid for {validMinutes} minutes):
    </p>
    <code className="block break-all text-xs bg-slate-950/60 px-3 py-2 rounded">
      {gatewayUrl}
    </code>

    <div className="flex gap-2 flex-wrap mt-2">
      <button
        type="button"
        onClick={() =>
          navigator.clipboard
            .writeText(gatewayUrl)
            .then(() => alert("Link copied"))
            .catch(() => alert("Copy failed"))
        }
        className="px-3 py-1.5 rounded bg-slate-800 text-slate-100 hover:bg-slate-700 text-xs"
      >
        Copy link
      </button>

      <button
        type="button"
        onClick={async () => {
          if (navigator.share) {
            try {
              await navigator.share({
                title: "VJC Gateway Link",
                text: `Hi ${clientName}, here is your secure payment gateway link for ${serviceKey}.`,
                url: gatewayUrl,
              });
            } catch {
              // ignore cancel
            }
          } else {
            await navigator.clipboard.writeText(gatewayUrl);
            alert("Link copied (sharing not supported on this device)");
          }
        }}
        className="px-3 py-1.5 rounded bg-emerald-500 text-slate-950 hover:bg-emerald-600 text-xs"
      >
        Share…
      </button>
    </div>
  </div>
)}

    </>
  );
}
