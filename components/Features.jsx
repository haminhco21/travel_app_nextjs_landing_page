import { FEATURES } from "@/constants";
import Image from "next/image";

const Features = () => {
  return (
    <section className="flexCenter bg-feature-bg bg-center flex-col py-24 bg-no-repeat overflow-hidden">
      <div className="max-container padding-container relative flex  justify-end w-full">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>
        <div className="flex flex-col w-full z-20 lg:w-[60%] ">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="lg:bold-64 bold-40">Our Features</h2>
          </div>
          <ul className="mt-10 flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 lg:mt-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ title, icon, description }) => {
  return (
    <li className="flex flex-1 flex-col items-start w-full">
      <div className="rounded-full p-4 lg:p-7 bg-green-500">
        <Image src={icon} alt="map" width={32} height={32} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 bg-white/80 lg:mt-[30px] lg:bg-none text-gray-20">
        {description}
      </p>
    </li>
  );
};

export default Features;
