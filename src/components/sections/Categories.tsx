const categories = [
  {
    number: "01",
    title: "Product Design",
    description:
      "Turn complex problems into clear, useful experiences.",
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
      className="bg-white px-6 py-16 md:px-10 md:py-20 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section introduction */}
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#3457f6]">
            Find your next skill
          </span>

          <h2 className="mt-3 max-w-lg font-(family-name:--font-jakarta) text-3xl font-bold leading-tight tracking-tight text-[#191c2b] sm:text-3xl">
            Learn something worth knowing.
          </h2>

          <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-[#747783]">
            Short, practical courses designed around skills you can put to work immediately.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.number}
              className="rounded-xl border border-[#e2e4e9] p-4 transition-colors hover:border-[#3457f6]"
            >
              <span className="inline-flex rounded bg-[#e8edff] px-1.5 py-1 text-sm font-semibold tracking-wide text-[#3457f6]">
                {category.number}
              </span>

              <h3 className="mt-4 font-(family-name:--font-jakarta) text-xl font-semibold text-[#191c2b]">
                {category.title}
              </h3>

              <p className="mt-2 text-[15px] leading-relaxed text-[#747783]">
                {category.description}
              </p>

              <a
                href={category.href}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#191c2b] transition-colors hover:text-[#3457f6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3457f6]"
              >
                Explore
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
