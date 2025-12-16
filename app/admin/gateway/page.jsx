"use client";

import { useState } from "react";
import CouponForm from "./CouponForm";
import CouponList from "./CouponList";

export default function AdminGatewayPage() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-[2fr,3fr]">
        <section>
          <h1 className="text-2xl font-bold mb-4">Gateway Coupon Admin</h1>
          <p className="text-slate-300 mb-6 text-sm">
            Enter client + user details, select service and discount. A
            time-limited coupon will be generated with a unique gateway link.
          </p>

          <CouponForm onCreated={() => setRefreshKey((k) => k + 1)} />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Recent coupons</h2>
          <CouponList refreshKey={refreshKey} />
        </section>
      </div>
    </main>
  );
}
