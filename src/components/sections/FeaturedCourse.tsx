
import Image from "next/image";

export function FeaturedCourse() {
  return (
    <section
      id="featured-course"
      className="bg-[#3457f6] px-5 py-14 text-white md:px-10 md:py-20 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Course image */}
        <div className="relative">
          <span className="absolute -top-3 left-0 z-10 rounded-lg bg-[#fff078] px-3 py-2 text-xs font-bold uppercase tracking-widest text-[#191c2b]">
            Featured course
          </span>

          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-white/10 sm:aspect-video md:aspect-16/7">
            <Image
              src="/assets/featured-course.png"
              alt="Designers working together on product design prototypes"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Course information */}
        <div className="mt-9">
          <span className="text-xs font-semibold uppercase tracking-[0.15em]">
            Most popular this month
          </span>

          <h2 className="mt-4 max-w-2xl font-(family-name:--font-jakarta) text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Designing products people understand.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
            Learn how to turn complex workflows into simple,
            intentional product experiences through research,
            structure and thoughtful interaction design.
          </p>

          <p className="mt-6 text-sm text-white/90">
            with Maya Chen · Senior Product Designer
          </p>

          {/* Course metadata */}
          <div className="mt-6 flex flex-wrap gap-3">
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
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#course-details"
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-lg bg-[#fff078] px-6 py-3 text-sm font-bold  transition-colors hover:bg-[#ffe84d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <span className="text-[#191c2b]">View course</span>
            </a>

            <a
              href="#categories"
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-3 px-6 py-3 text-sm font-semibold text-white transition-colors hover:text-[#fff078] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Browse all courses
              <span aria-hidden="true" className="text-lg">
                →
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
