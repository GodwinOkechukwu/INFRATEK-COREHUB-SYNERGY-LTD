"use client";
import React from "react";
import Picture from "../picture/Picture";
import Link from "next/link";
import { homeImage1, heroBg } from "@public/images";

const AllCategorySection = () => {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative w-full overflow-hidden pt-[150px] md:pt-0 rounded-2xl max-w-[1300px] m-auto">
        {/* Hero image with purple overlay */}
        <div className="relative w-full aspect-video ">
          <Picture
            src={homeImage1}
            alt="Complete hardware solutions"
            className="w-full h-full object-cover"
          />
          {/* Purple-tinted dark overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(60,10,90,0.55) 0%, rgba(30,10,60,0.45) 50%, rgba(10,10,20,0.6) 100%)",
            }}
            aria-hidden="true"
          />
          {/* Headline centered over image */}
          <div className="absolute inset-0 flex items-center justify-center z-10 px-6 ">
            <h1
              className="text-white  text-center font-extrabold text-[30px] md:text-[100px] leading-tight tracking-tight"
              // style={{ fontSize: "clamp(1.6rem, 5vw, 3.5rem)" }}
            >
              Complete Hardware
              <br />
              Solutions for Every
              <br />
              Digital Need
            </h1>
          </div>
          {/* Bottom fade into dark bg */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1/3"
            style={{
              background:
                "linear-gradient(to top, rgba(15,15,15,0.8), transparent)",
            }}
            aria-hidden="true"
          />
        </div>

        {/* ── About Us Section ── */}
        <div className="bg-[#0f0f0f] px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <h2 className="text-white text-4xl font-bold leading-snug">
              About
              <br />
              us
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm sm:text-sm slg:text-base leading-relaxed ">
              ClearPathSummit Innovations is a trusted distributor of premium
              computer hardware and digital technology solutions in Nigeria. We
              provide a wide range of high-performance gadgets and IT equipment
              designed to support businesses, gamers, creators, students, and
              tech enthusiasts. Our products include;
              <br />
              Laptops & Desktop Computers, Gaming Accessories, Computer
              Components, Networking Devices, Office Tech Equipment, Monitors,
              Keyboards, Mice, Printers, Storage Devices, CCTV & Security
              Systems, Smart Gadgets, and other cutting-edge digital accessories
              built for productivity, performance, and innovation.
            </p>
          </div>
        </div>
        <div className="relative w-full">
          {/* Same background image */}
          <Picture
            src={heroBg}
            alt="Why choose us backdrop"
            className="w-full h-[460px] block"
          />

          {/* Dark + warm overlay to match the orange-purple keyboard vibe */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(40,10,60,0.72) 0%, rgba(20,10,30,0.60) 50%, rgba(10,5,10,0.55) 100%)",
            }}
            aria-hidden="true"
          />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-between px-8 py-2 md:px-14  ">
            {/* Heading */}
            <h2 className="text-white text-center font-extrabold text-3xl md:text-5xl tracking-tight mt-5 pb-5">
              Why Choose us
            </h2>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:relative md:bottom-20">
              {[
                {
                  icon: "↗",
                  title: "Speed",
                  description:
                    "Blazing-fast delivery and processing so you get your hardware up and running without the wait.",
                },
                {
                  icon: "🔒",
                  title: "Security",
                  description:
                    "Every transaction is encrypted and protected. Shop with confidence knowing your data is always safe.",
                },
                {
                  icon: "📶",
                  title: "Support",
                  description:
                    "Our expert team is available around the clock to help you with setup, troubleshooting, and advice.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  {/* Icon box */}
                  <div
                    className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: "rgba(255,255,255,0.12)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllCategorySection;
