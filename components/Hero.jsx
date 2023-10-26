import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="max-container padding-container border-2 border-red-600 flex flex-col xl:flex-row gap-20 py-10 md:gap-28 lg:py-20 pb-32">
      <div className="hero-map" />
      {/* LEFT */}

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 ">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute top-[-30px] left-[-5px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-50 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  key={index}
                  src="/star.svg"
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
