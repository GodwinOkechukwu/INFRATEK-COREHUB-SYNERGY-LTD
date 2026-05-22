"use client";
import React, { useEffect, useRef, useState } from "react";
import Picture from "../picture/Picture";
import Link from "next/link";

import { homeImage1, heroBg, homeImage2, homeImage3, homeImage4, homeImage5 } from "@public/images";

const AllCategorySection = () => {
  return (
    <>
      <section className="relative min-h-[100dvh] sm:min-h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Picture
            src={heroBg}
            alt="Laptop keyboard — top-notch accessories backdrop"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.5) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-20 flex flex-col items-center w-full">
          {/* ── Text block ──────────────────────────────────────────────────
            Headline + sub-copy, centred on all viewports.
        ──────────────────────────────────────────────────────────────── */}
          <div className="text-center px-5 sm:px-8 pt-16 sm:pt-20 md:pt-24 lg:pt-28 max-w-2xl lg:max-w-3xl mx-auto">
            {/* Main headline */}
            <h1
              className="
              text-white font-[300]
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              leading-tight tracking-tight
              mb-5 sm:mb-6
            "
            >
              Discover Timeless
              <br className="hidden xs:block" /> Elegance with Timezone
            </h1>

            {/* Sub-copy */}
            <p
              className="
              text-gray-400
              text-sm sm:text-base md:text-[0.95rem]
              leading-relaxed
              max-w-lg sm:max-w-xl mx-auto
              mb-8 sm:mb-10
            "
            >
              we believe that every second counts. Our carefully curated
              collection of luxury and everyday timepieces offers more than just
              a way to keep time— they reflect your style, precision, and
              craftsmanship.
            </p>

            <Link
              href="/category"
              className="
              inline-block
              bg-white text-gray-900
              text-sm sm:text-base font-medium
              px-10 py-3 sm:px-12 sm:py-3.5
              rounded-full
              shadow-lg shadow-white/10
              hover:bg-gray-100
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black
            "
            >
              Shop now
            </Link>
          </div>
          <div
            className="
            relative mt-10 sm:mt-12 md:mt-14
            w-[90%] sm:w-[75%] md:w-[60%] lg:w-[52%] xl:w-[46%]
            max-w-[700px]
          "
          >
            <Picture
              src={homeImage1}
              alt="Laptop keyboard — top-notch accessories backdrop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                image: homeImage2,
                title: "Secure Payment",
                description: "100% secure payment",
              },
              {
                image: homeImage3,
                title: "30 Days Return",
                description: "If goods have problems",
              },
              {
                image: homeImage4,
                title: "24/7 Support",
                description: "Dedicated support",
              },
              {
                image: homeImage5,
                title: "Free Delivery",
                description: "For all order over 80$",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-[#2b292f] p-6 text-center shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <Picture
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllCategorySection;
