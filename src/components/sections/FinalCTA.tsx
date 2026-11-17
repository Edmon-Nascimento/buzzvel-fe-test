import Image from "next/image";
import Link from "next/link";

const avatars = [
  "/assets/avatar-01.png",
  "/assets/avatar-02.png",
  "/assets/avatar-03.png",
  "/assets/avatar-community.png",
];

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#FFF1C2] px-5 py-20 sm:px-8 lg:py-28">
      <Image
        src="/assets/final-cta-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hidden object-cover md:block"
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center">
        <div className="mb-8 flex items-center justify-center">
          <div className="flex -space-x-3">
            {avatars.map((avatar, index) => (
              <Image
                key={avatar}
                src={avatar}
                alt={`Community member ${index + 1}`}
                width={48}
                height={48}
                className="size-12 rounded-full border-[3px] border-[#FFF1C2] object-cover"
              />
            ))}
          </div>
        </div>

        <h2 className="max-w-3xl font-(family-name:--font-jakarta) text-4xl font-bold leading-tight tracking-tight text-[#191c2b] sm:text-5xl lg:text-6xl">
          What will you learn next?
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-7 text-[#191c2b]/75 sm:text-lg sm:leading-8">
          Start with one course. Build from there.
        </p>

        <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <Link
            href="#courses"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#3457f6] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2848dc] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3457f6]"
          >
            <span className="text-white">Explore all courses</span>
          </Link>

          <Link
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center bg-white rounded-lg border border-[#191c2b]/30 px-7 py-3 text-sm font-semibold text-[#191c2b] transition-colors hover:bg-white/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3457f6]"
          >
            Join Luma
          </Link>
        </div>
      </div>
    </section>
  );
}
