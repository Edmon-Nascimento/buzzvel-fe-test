import Image from "next/image";

export function FeaturedCourse() {
  return (
    <section
      id="featured-course"
      className="bg-[#3457f6] px-5 py-16 text-white sm:px-8 sm:py-20 md:px-10 md:py-24 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Course image */}
        {/* Course image */}
        <div className="relative">
          <span className="absolute -top-3 left-4 z-10 rounded-lg bg-[#fff078] px-3 py-2 text-xs font-bold uppercase tracking-widest text-[#191c2b] sm:left-6">
            Featured course
          </span>

          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-white/10 sm:aspect-video lg:aspect-[2.4/1]">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="/assets/featured-course-lg.png"
              />

              <Image
                src="/assets/featured-course.png"
                alt="Designers working together on product design prototypes"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1200px"
                className="object-cover"
              />
            </picture>
          </div>
        </div>

        {/* Course information */}
        <div className="mt-9 grid grid-cols-1 gap-10 sm:mt-12 lg:mt-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16">
          {/* Main content */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] sm:text-sm">
              Most popular this month
            </span>

            <h2 className="mt-4 max-w-3xl font-(family-name:--font-jakarta) text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-[56px]">
              Designing products people understand.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8 lg:text-lg">
              Learn how to turn complex workflows into simple, intentional
              product experiences through research, structure and thoughtful
              interaction design.
            </p>

            <p className="mt-6 text-sm text-white/90 sm:text-base">
              with Maya Chen · Senior Product Designer
            </p>
          </div>

          {/* Course metadata and actions */}
          <div className="flex flex-col items-start lg:pb-1">
            {/* Course metadata */}
            <div className="flex flex-wrap gap-3">
              <span className="rounded-lg border border-white/60 px-3 py-2 text-sm">
                8 lessons
              </span>

              <span className="rounded-lg border border-white/60 px-3 py-2 text-sm">
                2h 40min
              </span>

              <span className="rounded-lg border border-white/60 px-3 py-2 text-sm">
                Intermediate
              </span>
            </div>

            {/* Actions */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:gap-4 lg:flex-col xl:flex-row">
              <a
                href="#course-details"
                className="inline-flex min-h-12 w-full flex-1 items-center justify-center rounded-lg bg-[#fff078] px-6 py-3 text-sm font-bold transition-colors hover:bg-[#ffe84d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <span className="text-[#191c2b]">View course</span>
              </a>

              <div>
                <a
                  href="#categories"
                  className="inline-flex min-h-12 w-full flex-1 items-center justify-center gap-3 px-6 py-3 text-sm font-semibold text-white transition-colors hover:text-[#fff078] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Browse all courses
                  <span aria-hidden="true" className="text-lg">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
