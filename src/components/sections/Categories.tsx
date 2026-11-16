
const categories = [
  {
    number: "01",
    title: "Product Design",
    description:
      "Turn to complex problems into clear useful experiences.",
    href: "#product-design",
  },
  {
    number: "02",
    title: "Technology",
    description:
      "Build a stronger understanding of the tools shaping digital products.",
    href: "#technology",
  },
  {
    number: "03",
    title: "Business",
    description:
      "Develop practical skills for better decisions and stronger teams.",
    href: "#business",
  },
  {
    number: "04",
    title: "Creative",
    description:
      "Explore new ways to communicate, create and tell stories.",
    href: "#creative",
  },
];

export function Categories() {
  return (
    <section
      id="categories"
      className="bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section introduction */}
        <div className="mb-12 flex flex-col gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#3457f6] sm:text-sm">
              Find your next skill
            </span>

            <h2 className="mt-4 font-(family-name:--font-jakarta) text-3xl font-bold leading-[1.15] tracking-tight text-[#191c2b] sm:text-4xl md:text-5xl lg:text-[56px]">
              Learn something worth knowing.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-[#747783] sm:text-xl md:pb-1">
            Short, pratical courses designed around skills you can put to work immediately.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {categories.map((category) => (
            <article
              key={category.number}
              className="group flex min-h-75 flex-col rounded-2xl border border-[#e2e4e9] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#3457f6] hover:shadow-[0_16px_40px_rgba(25,28,43,0.07)] sm:p-7 lg:min-h-85 lg:p-8"
            >
              <span className="inline-flex h-9 w-10 items-center justify-center rounded-lg bg-[#e8edff] text-sm font-bold tracking-wide text-[#3457f6]">
                {category.number}
              </span>

              <div className="mt-8">
                <h3 className="font-(family-name:--font-jakarta) text-xl font-bold tracking-tight text-[#191c2b] sm:text-2xl">
                  {category.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-[#747783] lg:text-base lg:leading-8">
                  {category.description}
                </p>
              </div>

              <a
                href={category.href}
                className="mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-bold text-[#191c2b] transition-colors duration-200 hover:text-[#3457f6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3457f6] sm:text-[16px]"
              >
                Explore
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
