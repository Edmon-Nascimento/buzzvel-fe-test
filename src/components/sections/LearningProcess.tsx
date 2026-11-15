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
      <div className="bg-[#faf9f6] px-6 py-16 md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#3457f6]">
              How Luma works
            </span>

            <h2 className="mx-auto mt-3 max-w-xl font-(family-name:--font-jakarta) text-3xl font-bold leading-tight tracking-tight text-[#191c2b] lg:text-4xl">
              Less browsing. More learning.
            </h2>
          </div>

          {/* Steps */}
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {learningSteps.map((step) => (
              <article key={step.number}>
                {/* Decorative shape */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center">
                  {step.shape === "blue" && (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e5eaff]">
                      <div className="h-4 w-4 rounded-sm bg-[#3457f6]" />
                    </div>
                  )}

                  {step.shape === "coral" && (
                    <div className="flex h-9 w-9 rotate-12 items-center justify-center rounded-md bg-[#ffe3d9]">
                      <div className="h-4 w-4 rounded-full bg-[#ff765d]" />
                    </div>
                  )}

                  {step.shape === "yellow" && (
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#fff2c3]">
                      <div className="h-3 w-3 rounded-full bg-[#ecd64e]" />
                    </div>
                  )}
                </div>

                <span className="text-[15px] font-semibold uppercase tracking-widest text-[#747783]">
                  Step {step.number}
                </span>

                <h3 className="mt-2 font-(family-name:--font-jakarta) text-xl font-semibold text-[#191c2b]">
                  {step.title}
                </h3>

                <p className="mt-2 text-[13px] leading-relaxed text-[#747783] sm:text-sm">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial and statistics */}
      <div className="bg-white px-6 py-10 md:px-10 md:py-16 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Testimonial */}
          <div className="max-w-2xl">
            <span className="block font-(family-name:--font-jakarta) text-5xl font-bold leading-none text-[#3457f6]">
              &quot;
            </span>

            <blockquote className="mt-1 font-(family-name:--font-jakarta) text-[19px] font-semibold leading-relaxed text-[#191c2b] sm:text-xl">
              The lessons are short enough to fit into my week, but detailed
              enough that I actually leave with something I can use.
            </blockquote>

            <div className="mt-6 flex items-center gap-3">
              <Image
                src="/assets/avatar-alex-morgan.png"
                alt="Alex Morgan"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover"
              />

              <div>
                <p className="text-md font-bold text-[#191c2b]">
                  Alex Morgan
                </p>
                <p className="mt-1 text-md text-[#747783]">
                  Product Manager
                </p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#e2e4e9] pt-8 md:mt-14 md:gap-8">
            {statistics.map((statistic) => (
              <div key={statistic.value}>
                <p className="font-(family-name:--font-jakarta) text-4xl font-extrabold tracking-tight text-[#3457f6] sm:text-4xl lg:text-5xl">
                  {statistic.value}
                </p>

                <p className="mt-1 max-w-24 text-[13px] leading-relaxed text-[#747783] sm:text-sm">
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
