"use client";

import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  limit,
} from "firebase/firestore";
import { db } from "@/lib/firebaseClient";

export default function CouponList({ refreshKey }) {
  const [items, setItems] = useState([]);

  const baseUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const q = query(
      collection(db, "gatewayCoupons"),
      orderBy("createdAt", "desc"),
      limit(20)
    );
    const unsub = onSnapshot(q, (snap) => {
      const docs = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setItems(docs);
    });
    return () => unsub();
  }, [refreshKey]);

  if (!items.length) {
    return (
      <p className="text-sm text-slate-400">
        No coupons yet. Generate one using the form.
      </p>
    );
  }

  const now = new Date();

  const renderStatus = (c) => {
    const expiresAt = c.expiresAt?.toDate
      ? c.expiresAt.toDate()
      : new Date(c.expiresAt);
    if (c.status === "PAID") return "PAID";
    if (expiresAt < now) return "EXPIRED";
    return "ACTIVE";
  };

  async function handleCopy(url) {
    try {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard");
    } catch {
      alert("Could not copy link");
    }
  }

  async function handleShare(url, text) {
    if (navigator.share) {
      try {
        await navigator.share({ title: "VJC Gateway Link", text, url });
      } catch {
        // user cancelled
      }
    } else {
      await handleCopy(url);
    }
  }

  return (
    <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
      {items.map((c) => {
        const link = `${baseUrl}/gateway/${c.serviceKey}?coupon=${c.id}`;
        const status = renderStatus(c);

        return (
          <div
            key={c.id}
            className="bg-slate-900/60 border border-slate-700 rounded-lg p-3 text-xs space-y-2"
          >
            {/* Clickable main area */}
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="block hover:bg-slate-800/60 rounded-md px-2 py-1 -mx-2 -mt-1"
            >
              <div className="flex justify-between">
                <span className="font-semibold text-slate-100">
                  {c.clientName || "Unknown client"}
                </span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                    status === "PAID"
                      ? "bg-emerald-600/30 text-emerald-300"
                      : status === "EXPIRED"
                      ? "bg-red-600/20 text-red-300"
                      : "bg-amber-500/20 text-amber-300"
                  }`}
                >
                  {status}
                </span>
              </div>

              <p className="text-slate-300">
                {c.serviceKey} • {c.payMode === "half" ? "50% now" : "Full now"}
              </p>

              <p className="text-slate-400">
                Base: ₹
                {(c.effectiveBaseAmount || c.originalAmount).toLocaleString(
                  "en-IN"
                )}{" "}
                | Disc: ₹{c.discountAmount?.toLocaleString("en-IN")} | Pay: ₹
                {c.finalAmount?.toLocaleString("en-IN")}
              </p>

              <p className="text-slate-500">
                User: {c.userName || "-"} | ID: {c.id}
              </p>
            </a>

            {/* Actions */}
            <div className="flex gap-2 justify-end">
              <button
                onClick={() =>
                  handleShare(
                    link,
                    `Hi, here is your secure VJC gateway link for ${c.serviceKey}:`
                  )
                }
                className="px-2 py-1 rounded bg-slate-800 text-slate-100 hover:bg-slate-700"
              >
                Share
              </button>
              <button
                onClick={() => handleCopy(link)}
                className="px-2 py-1 rounded bg-slate-800 text-slate-100 hover:bg-slate-700"
              >
                Copy link
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
