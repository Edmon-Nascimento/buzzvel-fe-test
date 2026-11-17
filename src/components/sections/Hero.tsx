import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F9F8F3]">
      <div className="mx-auto flex max-w-7xl flex-col px-6 pb-12 pt-10 md:flex-row-reverse md:items-center md:gap-12 md:px-10 md:py-20 lg:px-16">
        {/* Hero visual */}
        <div className="relative mx-auto mt-12 w-full max-w-md md:mt-0 md:max-w-none md:flex-1">
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="absolute -right-4 top-4 h-[92%] w-full rounded-4xl bg-[#FFC99F]"
          />

          {/* Main image */}
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-4xl bg-[#f1f3ff]">
            <Image
              src="/assets/hero-person.png"
              alt="Student learning and developing new skills"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Courses badge */}
          <div className="absolute -left-3 top-5 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-lg sm:-left-6 sm:p-4">
            <div>
              <p className="text-sm">
                <span className="mr-3 rounded-lg bg-blue-100 px-1 py-1 font-bold text-[#3157F6]">
                  120+
                </span>
                expert-led courses
              </p>
            </div>
          </div>

          {/* Rating badge */}
          <div className="absolute -right-3 bottom-5 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-lg">
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

                <p className="ml-3 mt-1 text-sm text-[#191c2b]">
                  4.9 avg rating
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex flex-1 flex-col items-start">
          <span className="mt-10 py-2 text-sm font-medium uppercase tracking-wide text-blue-600">
            Learn at your own pace
          </span>

          <h1 className="max-w-xl font-(family-name:--font-jakarta) text-4xl font-extrabold leading-tight tracking-tight text-[#191c2b] sm:text-5xl lg:text-6xl">
            Build skills that actually move you forward.
          </h1>

          <p className="mt-6 text-[15px] leading-relaxed text-[#747783] md:text-xl">
            Practical courses taught by people who do the work every day. Learn
            design, technology, business and more — one focused lesson at a
            time.
          </p>

          {/* Hero actions */}
          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
            <a
              href="#categories"
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-lg bg-[#3457F6] px-6 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              <span className="text-white">Explore courses</span>
            </a>

            <a
              href="#process"
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-lg border border-black/20 bg-white px-6 text-sm font-semibold text-[#191c2b] transition-colors hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              See how it works
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-7 flex items-center gap-3 self-center md:self-start">
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
