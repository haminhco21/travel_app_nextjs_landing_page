import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

const CampSite = ({ backgroundImage, title, subTitle, peopleJoin }) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} lg:rounded-r-5xl bg-no-repeat bg-cover 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="bg-green-50 rounded-full p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-white bold-20">{title}</p>
            <p className="text-white regular-14">{subTitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
                className="inline-block rounded-full w-10 h-10"
              />
            ))}
          </span>
          <p className="text-white bold-16 md:bold-20">{peopleJoin}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className=" 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subTitle="Prigen, Pasuruan"
          peopleJoin="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Putuk Truno Camp"
          subTitle="Prigen, Pasuruan"
          peopleJoin="50+ Joined"
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] relative rounded-3xl overflow-hidden xl:py-20 xl:rounded-5xl xl:px-16 ">
          <h3 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            {" "}
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h3>
          <p className="regular-14 xl:regular-16 text-white mt-5">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>
        </div>
      </div>
    </section>
  );
};

export default Camp;
