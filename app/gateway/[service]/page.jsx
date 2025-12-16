// app/gateway/[service]/page.jsx
import GatewayCouponClient from "./GatewayCouponClient";
import { notFound } from "next/navigation";

const SERVICE_CONFIG = {
  "canada-pr": {
    title: "Canada PR Gateway",
    description:
      "Complete your Canada PR payment securely with a time-limited offer.",
  },
};

export default async function GatewayPage(props) {
  const params = await props.params;
  const sp = await props.searchParams;

  const service = SERVICE_CONFIG[params.service];
  const couponId = sp?.coupon;

  if (!service) return notFound();

  if (!couponId) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center">
        <div className="max-w-3xl mx-auto w-full px-4 py-10">
          <h1 className="text-3xl font-bold mb-2">{service.title}</h1>
          <p className="text-slate-300 mb-6">{service.description}</p>
          <p className="text-amber-300">
            No coupon in URL. Add{" `?coupon=<docId>`"} to open a gateway link.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Service param: {params.service}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="max-w-3xl mx-auto w-full px-4 py-10 space-y-4">
        <h1 className="text-3xl font-bold mb-1">{service.title}</h1>
        <p className="text-slate-300 mb-4">{service.description}</p>

        <GatewayCouponClient serviceKey={params.service} couponId={couponId} />
      </div>
    </main>
  );
}
