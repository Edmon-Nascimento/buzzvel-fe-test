import Image from "next/image";
import Link from "next/link";

const footerSections = [
  {
    title: "EXPLORE",
    links: [
      { label: "Courses", href: "/courses" },
      { label: "Categories", href: "/categories" },
      { label: "Instructors", href: "/instructors" },
      { label: "For Teams", href: "/teams" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Journal", href: "/journal" },
    ],
  },
  {
    title: "SUPPORT",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Contact", href: "/contact" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#171a2b] text-white">
      <div className="mx-auto w-[calc(100%-30px)] max-w-10/12 pt-13.5 pb-5.5 sm:w-[calc(100%-48px)] sm:pt-15 sm:pb-8 lg:pt-19 lg:pb-10">
        {/* Main content */}
        <div className="grid grid-cols-1 gap-12 pb-9.5 sm:gap-11 sm:pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:pb-16.5">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <Link
              href="/"
              aria-label="Luma home"
              className="mb-2 inline-flex items-center"
            >
              <Image
                src="/assets/luma-logo-alt.png"
                alt="Luma Learning"
                width={120}
                height={48}
                className="h-auto w-15 object-contain"
              />
            </Link>

            <p className="font-sans text-sm leading-[1.8] text-[#999baa] sm:max-w-50">
              Practical learning for curious people.
            </p>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 lg:grid-cols-3"
          >
            {footerSections.map((section) => (
              <div
                key={section.title}
                className={
                  section.title === "SUPPORT" ? "col-span-2 lg:col-span-1" : ""
                }
              >
                <h3 className="mb-4.5 font-sans text-xs font-semibold tracking-[1.5px] text-[#e6e7ed]">
                  {section.title}
                </h3>

                <ul className="flex flex-col gap-3.75">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-sans text-sm text-[#999baa] transition-colors duration-200 hover:text-white"
                      >
                        <span className="text-[#999baa]">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="flex min-h-11.25 items-center justify-center border-t border-[#414453] pt-6 sm:justify-start">
          <p className="font-sans text-center text-[13px] text-[#e0e1e8]">
            © 2026 Luma Learning
          </p>
        </div>
      </div>
    </footer>
  );
}
