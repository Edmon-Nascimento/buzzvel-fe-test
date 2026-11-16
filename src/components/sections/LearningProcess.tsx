
import Image from "next/image";

const learningSteps = [
  {
    number: "01",
    title: "Choose your focus",
    description:
      "Find courses based on the skill you want to build, not endless content categories.",
    shape: "blue",
  },
  {
    number: "02",
    title: "Learn from experience",
    description:
      "Follow concise lessons created by professionals who actually use these skills.",
    shape: "coral",
  },
  {
    number: "03",
    title: "Put it into practice",
    description:
      "Every course includes practical exercises designed to turn knowledge into action.",
    shape: "yellow",
  },
];

const statistics = [
  {
    value: "24K+",
    description: "active learners",
  },
  {
    value: "120+",
    description: "expert-led courses",
  },
  {
    value: "92%",
    description: "complete their first course",
  },
];

export function LearningProcess() {
  return (
    <section id="process">
      {/* Learning process */}
      <div className="bg-[#faf9f6] px-6 py-20 sm:px-8 sm:py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3457f6] sm:text-sm">
              How Luma works
            </span>

            <h2 className="mx-auto mt-4 max-w-full font-(family-name:--font-jakarta) text-3xl font-bold leading-[1.15] tracking-tight text-[#191c2b] sm:text-4xl md:text-5xl lg:mt-6 lg:text-[56px]">
              Less browsing. More learning.
            </h2>
          </div>

          {/* Steps */}
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:mt-16 md:grid-cols-3 md:gap-10 lg:mt-24 lg:gap-16 xl:gap-20">
            {learningSteps.map((step) => (
              <article key={step.number} className="flex flex-col">
                {/* Decorative shape */}
                <div className="mb-7 flex h-14 w-14 items-center justify-center lg:mb-9 lg:h-16 lg:w-16">
                  {step.shape === "blue" && (
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e5eaff] lg:h-16 lg:w-16">
                      <div className="h-5 w-5 rounded-sm bg-[#3457f6] lg:h-6 lg:w-6" />
                    </div>
                  )}

                  {step.shape === "coral" && (
                    <div className="flex h-11 w-11 rotate-12 items-center justify-center rounded-md bg-[#ffe3d9] lg:h-12 lg:w-12">
                      <div className="h-5 w-5 rounded-full bg-[#ff765d] lg:h-6 lg:w-6" />
                    </div>
                  )}

                  {step.shape === "yellow" && (
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fff2c3] lg:h-12 lg:w-12">
                      <div className="h-4 w-4 rounded-full bg-[#ecd64e] lg:h-5 lg:w-5" />
                    </div>
                  )}
                </div>

                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#747783] lg:text-base">
                  Step {step.number}
                </span>

                <h3 className="mt-3 font-(family-name:--font-jakarta) text-xl font-bold text-[#191c2b] sm:text-2xl lg:mt-4 lg:text-[28px]">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-[#747783] sm:text-base sm:leading-8 lg:mt-4 lg:text-[17px] lg:leading-8">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial and statistics */}
      <div className="bg-white px-6 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-24">
          {/* Testimonial */}
          <div className="max-w-2xl">
            <span className="block font-(family-name:--font-jakarta) text-6xl font-bold leading-none text-[#3457f6] lg:text-7xl">
              &quot;
            </span>

            <blockquote className="mt-2 font-(family-name:--font-jakarta) text-xl font-semibold leading-relaxed text-[#191c2b] sm:text-2xl lg:text-[28px] lg:leading-normal">
              The lessons are short enough to fit into my week, but detailed
              enough that I actually leave with something I can use.
            </blockquote>

            <div className="mt-8 flex items-center gap-4 lg:mt-10">
              <Image
                src="/assets/avatar-alex-morgan.png"
                alt="Alex Morgan"
                width={52}
                height={52}
                className="h-12 w-12 rounded-full object-cover lg:h-14 lg:w-14"
              />

              <div>
                <p className="text-base font-bold text-[#191c2b] lg:text-lg">
                  Alex Morgan
                </p>
                <p className="mt-1 text-sm text-[#747783] lg:text-base">
                  Product Manager
                </p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-4 border-t border-[#e2e4e9] pt-8 sm:gap-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0 xl:pl-16 lg:grid-cols-1 lg:gap-1">
            {statistics.map((statistic) => (
              <div key={statistic.value}>
                <p className="font-(family-name:--font-jakarta) text-3xl font-extrabold tracking-tight text-[#3457f6] sm:text-4xl lg:text-4xl xl:text-[56px]">
                  {statistic.value}
                </p>

                <p className="mt-2 max-w-full text-xs leading-relaxed text-[#747783] sm:text-sm lg:mt-3 lg:text-base lg:leading-7">
                  {statistic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
