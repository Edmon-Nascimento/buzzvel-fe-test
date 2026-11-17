import Image from "next/image";

const communityImages = [
  {
    src: "/assets/community-01.png",
    position: "left-[7%] top-[19%] w-[19%] h-[30%]",
  },
  {
    src: "/assets/community-02.png",
    position: "left-[29%] top-[3%] w-[19%] h-[34%]",
  },
  {
    src: "/assets/community-03.png",
    position: "left-[51%] top-[5%] w-[19%] h-[28%]",
  },
  {
    src: "/assets/community-04.png",
    position: "left-[73%] top-[15%] w-[23%] h-[40%]",
  },
  {
    src: "/assets/community-05.png",
    position: "left-0 top-[51%] w-[26%] h-[41%]",
  },
  {
    src: "/assets/community-06.png",
    position: "left-[29%] top-[39%] w-[19%] h-[34%]",
  },
  {
    src: "/assets/community-07.png",
    position: "left-[51%] top-[34%] w-[19%] h-[28%]",
  },
  {
    src: "/assets/community-08.png",
    position: "left-[73%] top-[58%] w-[19%] h-[26%]",
  },
  {
    src: "/assets/community-09.png",
    position: "left-[29%] top-[75%] w-[19%] h-[25%]",
  },
  {
    src: "/assets/community-10.png",
    position: "left-[51%] top-[67%] w-[19%] h-[30%]",
  },
];

export function Community() {
  return (
    <section
      id="community"
      className="overflow-hidden bg-[#faf9f6] px-6 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        {/* Content */}
        <div className="max-w-xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#3457f6] sm:text-xs">
            The people
          </span>

          <h2 className="mt-3 font-(family-name:--font-jakarta) text-[28px] font-bold leading-[1.12] tracking-tight text-[#191c2b] sm:text-4xl lg:mt-4 lg:text-[42px] lg:leading-[1.12]">
            Meet international students &amp; teachers
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#747783] sm:text-base sm:leading-8 lg:mt-6 lg:max-w-117.5 lg:text-[16px]">
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
            senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
            facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus
            urna, faucibus aenean lorem faucibus integer.
          </p>

          <a
            href="#community"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg border border-[#dfe2eb] bg-white px-5 py-3 text-xs font-bold text-[#191c2b] shadow-sm transition-all duration-200 hover:border-[#3457f6] hover:text-[#3457f6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3457f6] sm:mt-7 sm:min-h-12 sm:px-6 sm:text-sm"
          >
            Explore teachers and students
          </a>
        </div>

        {/* Community image collage */}
        <div className="relative mx-auto aspect-[1.05/1] w-full max-w-115 lg:max-w-117.5">
          {/* Background circle */}
          <div className="absolute left-1/2 top-1/2 aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e5eaff]" />

          {/* Images */}
          {communityImages.map((item, index) => (
            <div
              key={item.src}
              className={`absolute ${item.position} overflow-hidden rounded-sm bg-white shadow-[0_2px_5px_rgba(25,28,43,0.18)]`}
            >
              <Image
                src={item.src}
                alt=""
                fill
                sizes="(max-width: 640px) 20vw, (max-width: 1024px) 18vw, 110px"
                className="object-cover"
                priority={index < 4}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
