"use client";

import { useState } from "react";
import Image from "next/image";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Integração com o serviço de envio será adicionada posteriormente.
    console.log("Contact form:", formData);
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  return (
    <section
      id="contact"
      className="px-6 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
        {/* Contact introduction */}
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#3457f6] sm:text-sm">
            Contact
          </span>

          <h2 className="mt-4 font-(family-name:--font-jakarta) text-3xl font-bold leading-[1.12] tracking-tight text-[#191c2b] sm:text-4xl md:text-5xl lg:mt-6 lg:text-[56px]">
            Get in touch
          </h2>

          <p className="mt-5 text-base leading-8 text-[#747783] sm:text-lg lg:mt-6">
            Have a question? We’re here to help. Whether you’re looking for the right course, learning with your team or interested in teaching with Luma, we’d love to hear from you.
          </p>

          <div className="mt-10 space-y-4 lg:mt-14">
            <div className="flex items-start gap-4 rounded-lg bg-[#faf9f6] px-5 py-5">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Image
                  src="/assets/icon-message.png"
                  alt=""
                  width={24}
                  height={24}
                  className="mt-1 shrink-0"
                />
              </div>

              <div>
                <p className="text-sm text-[#191c2b]">Email</p>
                <p className="mt-2 text-sm text-[#3457f6]">contact@luma.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg bg-[#faf9f6] px-5 py-5">
              <div className=" bg-blue-100 p-2 rounded-lg">
                <Image
                  src="/assets/icon-clock.png"
                  alt=""
                  width={24}
                  height={24}
                  className="mt-1 shrink-0 "
                />
              </div>

              <div>
                <p className="text-sm text-[#191c2b]">
                  Response time
                </p>
                <p className="mt-2 text-sm text-[#747783]">
                  Up to 24 hours on business days
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="rounded-2xl border border-[#e2e4e9] bg-white p-6 shadow-[0_12px_40px_rgba(25,28,43,0.04)] sm:p-8 lg:p-10">
          <h3 className="font-(family-name:--font-jakarta) text-2xl font-bold text-[#191c2b] sm:text-3xl">
            Contact us
          </h3>

          <p className="mt-2 text-sm leading-7 text-[#747783]">
            Fill out the fields and we will get in touch.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="grid grid-cols-1 gap-6 ">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-[#191c2b]"
                >
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="min-h-12 w-full rounded-lg border border-[#e2e4e9] focus:bg-white px-4 text-sm text-[#191c2b] outline-none transition-colors placeholder:text-[#a0a2aa] bg-[#faf9f6]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#191c2b]"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="youremail@example.com"
                  className="min-h-12 w-full rounded-lg border border-[#e2e4e9] focus:bg-white px-4 text-sm text-[#191c2b] outline-none transition-colors placeholder:text-[#a0a2aa] bg-[#faf9f6]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-[#191c2b]"
              >
                Your question
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help..."
                className="w-full resize-none rounded-lg border border-[#e2e4e9] focus:bg-white px-4 py-3 text-sm leading-7 text-[#191c2b] outline-none transition-colors placeholder:text-[#a0a2aa] bg-[#faf9f6]"
              />
            </div>

            <button
              type="submit"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#3457f6] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#2445df] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3457f6] "
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
