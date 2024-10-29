import React from "react";

import { SanityImage } from "@components/sanity/sanityImage";

export const SymptomCard = ({ heading, subheading, icon }) => {
  return (
    <div
      className="w-[300px] md:w-[480px] bg-white self-stretch rounded-3xl"
      style={{ flex: "0 0 auto" }}
    >
      <div className="p-8 md:py-14 md:px-16 flex flex-col justify-between h-full items-center gap-y-3 md:gap-y-10 text-center">
        <div className="bg-grey rounded-full w-[162px] h-[162px] md:w-[250px] md:h-[250px] flex items-center justify-center">
          <SanityImage image={icon} className="w-16 md:w-24" />
        </div>
        <h3 className="blockH3">{heading}</h3>
        <p className="blockH7">{subheading}</p>
      </div>
    </div>
  );
};
