"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Form from "../Form";
import Link from "next/link";

function renderInfoWithLinks(info, infoLinks) {
  if (!infoLinks || infoLinks.length === 0) return info;
  let result = [];
  let lastIndex = 0;
  infoLinks.forEach((link, idx) => {
    const labelIndex = info.indexOf(link.label, lastIndex);
    if (labelIndex !== -1) {
      if (labelIndex > lastIndex) {
        result.push(info.substring(lastIndex, labelIndex));
      }
      result.push(
        <a
          key={link.label + idx}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded font-semibold mx-1 transition"
        >
          {link.label}
        </a>
      );
      lastIndex = labelIndex + link.label.length;
    }
  });
  if (lastIndex < info.length) {
    result.push(info.substring(lastIndex));
  }
  return result;
}

export default function MigrateCountry() {
  const router = useRouter();
  const pathname = usePathname();
  const [allVisas, setAllVisas] = useState([]);
  const [parentVisa, setParentVisa] = useState(null);
  const [childVisas, setChildVisas] = useState([]);

  useEffect(() => {
    async function fetchVisas() {
      try {
        const res = await fetch("/api/migrate");
        const data = await res.json();
        setAllVisas(data);

        // Extract country slug from pathname
        const countrySlug = pathname.split("/").pop();
        const foundParent = data.find((v) => v.slug === countrySlug && (!v.parentSlug || v.parentSlug === ""));
        setParentVisa(foundParent || null);

        // Find all children for this parent
        const children = data.filter((v) => v.parentSlug === countrySlug);
        setChildVisas(children);
      } catch (err) {
        console.error(err);
      }
    }
    fetchVisas();
  }, [pathname]);

  if (!parentVisa) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh]">
        <h2 className="text-2xl text-red-600 font-bold mb-4">
          Country not found!
        </h2>
        <button
          onClick={() => router.push("/migrate")}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold shadow transition"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{parentVisa.metaTitle || parentVisa.name || "Visa Not Found"}</title>
        <meta
          name="description"
          content={parentVisa.metaDescription || parentVisa.description || "No visa found for this country."}
        />
      </Head>

      <div className="w-full min-h-screen flex flex-col">
        {/* TOP SECTION - Parent Visa Hero */}
        <div
          className="relative w-full min-h-[80vh] mt-14 bg-cover bg-center"
          style={{ backgroundImage: `url(${parentVisa.image})` }}
        >
          <div className="absolute inset-0 bg-black/50 z-0" />
          <div className="relative z-10 w-full h-full flex items-center justify-center px-6 lg:px-12 ">
            <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10">
              <motion.div
                className="w-full lg:w-1/2 text-white text-center lg:text-left pt-24 sm:pt-32 lg:pt-0 lg:pl-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-semibold uppercase leading-tight">
                  {parentVisa.name}
                </h1>
                <p className="mt-4 text-base sm:text-lg lg:text-xl max-w-xl">
                  {parentVisa.description}
                </p>
              </motion.div>
              <div className="w-full lg:w-1/2 mt-8 lg:mt-12">
                <Form />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="relative z-10 w-full bg-white px-4 sm:px-6 lg:px-12 pt-10 pb-16">
          <div className="flex justify-center md:justify-start mb-8 ml-0 md:ml-16">
            <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent">
              <span className="block md:text-left text-center">Secure Dream Job,</span>
              <span className="block text-center">{parentVisa.name}</span>
            </h2>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-8 md:gap-10 items-start">
            {/* LEFT SIDE - Child Visa Buttons */}
            <div className="w-full md:w-1/3">
              {childVisas.length > 0 ? (
                childVisas.map((childVisa, i) => (
                  <div key={childVisa.id} className="mb-4 w-full">
                    <Link
                      href={`/migrate/${parentVisa.slug}/${childVisa.slug}`}
                      className="w-full flex items-center justify-between text-lg font-semibold px-6 py-4 rounded-xl transition duration-300 shadow-lg cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                    >
                      {childVisa.name}
                      <ArrowRight className="w-6 h-6" />
                    </Link>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No child visas available yet
                </div>
              )}
            </div>

            {/* RIGHT SIDE - Parent Visa Content */}
            <div className="w-full md:w-2/3 p-4 md:p-6 rounded-xl border border-gray-300 shadow-md relative min-h-[1300px] max-h-[1650px]" style={{ overflowY: "auto" }}>
              <div className="flex flex-col gap-4">
                {/* Image and Addon description container */}
                <div className="flex items-start gap-4">
                  {parentVisa?.descriptionImage && (
                    <div className="max-w-[50%]">
                      <Image
                        src={parentVisa.descriptionImage}
                        alt={parentVisa.name + " Description"}
                        width={parseInt(parentVisa.descriptionImageWidth || 120)}
                        height={parseInt(parentVisa.descriptionImageHeight || 80)}
                        style={{
                          objectFit: "cover",
                          borderRadius: "8px",
                          boxShadow: "0 2px 10px rgba(0,0,0,.12)",
                          display: "block",
                        }}
                        unoptimized
                        draggable={false}
                      />
                    </div>
                  )}

                  <div className="flex-1">
                    {parentVisa?.addonHeading && (
                      <h3 className="font-bold text-xl mb-2">{parentVisa.addonHeading}</h3>
                    )}
                    {parentVisa?.addonDescription && (
                      <div
                        className="text-gray-700 text-lg leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: parentVisa.addonDescription }}
                      />
                    )}
                  </div>
                </div>

                {/* Parent Info Content */}
                <div
                  className="text-gray-700 text-lg leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: parentVisa ? parentVisa.info : "No visa found for this country.",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
