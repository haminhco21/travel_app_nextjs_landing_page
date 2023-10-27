import Image from "next/image";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="max-container w-full  padding-container pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between lg:gap-10 gap-5">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You to Easy Path
          </h2>
          <p className="regular-16 text-gray-30 lg:max-w-[520px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>
      <div className="flexCenter max-container relative w-full ">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="2xl:rounded-5xl object-cover object-center w-full"
        />
        <div className="absolute flex pl-5 pr-7 gap-3 py-8 rounded-3xl bg-white border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col gap-8">
            <div className="flex w-full flex-col gap-2">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-30">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20">Aguas Calientes</p>
            </div>
            <div className="flex w-full flex-col gap-2">
              <p className="regular-16 text-gray-30">Start track</p>

              <p className="bold-20 capitalize whitespace-nowrap ">
                Wonorejo Pasuruan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
