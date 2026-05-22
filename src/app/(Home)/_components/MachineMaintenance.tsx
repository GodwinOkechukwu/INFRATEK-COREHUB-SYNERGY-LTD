"use client";

import React from "react";
import Picture from "@src/components/picture/Picture";
import { heroBg } from "@public/images";

const MachineMaintenance = () => {
  return (
    <section className="relative">
      <div className="w-full h-[526px] z-10">
        <Picture
          src={heroBg}
          alt="Laptop keyboard — top-notch accessories backdrop"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute px-4 sm:px-0 inset-0 flex gap-4 flex-col items-center justify-center z-20 w-full">
        <h3 className="max-w-[785px] text-center font-normal text-white text-[40px] sm:text-[40px]">
          Your One Stop Technology Store
        </h3>
        <p className="max-w-[611px] text-white font-normal text-center text-[10px] sm:text-[20px] ">
          Discover the charm of vintage devices or invest in pre-owned <br />
          timepieces that stand the test of time.
        </p>
      </div>
    </section>
  );
};

export default MachineMaintenance;
