import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F9F8F3]">
      <div className="mx-auto flex max-w-7xl flex-col px-6 pb-12 pt-10 md:flex-row md:items-center md:gap-12 md:px-10 md:py-20 lg:px-16">
        <div className="relative mx-auto mt-12 w-full max-w-md md:mt-0 md:flex-1 md:max-w-none">
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="absolute -right-4 top-4 h-[92%] w-full rounded-4xl bg-[#FFC99F]"
          />
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-4xl bg-[#f1f3ff] ">
            <Image
              src="/assets/hero-person.png"
              alt="Student learning and developing new skills"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -left-3 top-5 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-lg sm:-left-6 sm:p-4">
            <div>
              <p className="text-sm ">
                <span className="px-1 py-1 rounded-lg mr-3 font-bold text-[#3157F6] bg-blue-100">
                  120+{" "}
                </span>
                expert-led courses
              </p>
            </div>
          </div>

          <div className="absolute -right-3 bottom-5 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-lg sm:-left-6 sm:p-4">
            <div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Image
                    key={index}
                    src="/assets/icon-star.png"
                    alt=""
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                ))}

                <p className="mt-1 ml-3 text-sm text-[#191c2b]">
                  4.9 avg rating
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex flex-1 flex-col items-start">
          <span className="mt-10 py-2 text-sm font-medium text-blue-600 uppercase tracking-wide">
            Learn at your own pace
          </span>

          <h1 className="max-w-xl font-(family-name:--font-jakarta) text-4xl font-extrabold leading-tight tracking-tight text-[#191c2b] sm:text-5xl lg:text-6xl">
            Build skills that actually move you forward.
          </h1>

          <p className="mt-6 leading-relaxed text-[#747783] text-[15px]">
            Practical courses taught by people who do the work every day. Learn
            design, technology, business and more — one focused lesson at a
            time.
          </p>

          <a
            href="#categories"
            className="mt-8 inline-flex items-center justify-center bg-[#3457f6] px-7 py-4 text-sm font-semibold transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 w-full rounded-lg"
          >
            <span className="text-white font-semibold">Explore courses</span>
          </a>

          <a
            href="#categories"
            className="mt-3 inline-flex items-center justify-center bg-white px-7 py-4 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 w-full rounded-lg border border-black/20 hover:bg-gray-50/10"
          >
            <span className="font-semibold">See how it works</span>
          </a>

          {/* Social proof */}
          <div className="mt-7 flex items-center gap-3 self-center">
            {/* Avatars */}
            <div className="flex items-center">
              <Image
                src="/assets/avatar-01.png"
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 rounded-full border-2 border-white object-cover"
              />

              <Image
                src="/assets/avatar-02.png"
                alt=""
                width={36}
                height={36}
                className="-ml-3 h-9 w-9 rounded-full border-2 border-white object-cover"
              />

              <Image
                src="/assets/avatar-03.png"
                alt=""
                width={36}
                height={36}
                className="-ml-3 h-9 w-9 rounded-full border-2 border-white object-cover"
              />
            </div>

            {/* Trust text */}
            <p className="text-sm text-[#747783]">
              <strong className="font-semibold text-[#191c2b]">
                Trusted by 24,000+
              </strong>{" "}
              learners
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
