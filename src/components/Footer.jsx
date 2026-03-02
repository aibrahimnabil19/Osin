import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-white">
      <div className="max-w-5xl mx-auto flex justify-between py-10">
        
        <section className="flex flex-col gap-7">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="31"
              height="21"
              viewBox="0 0 31 21"
              fill="none"
                stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">

                <path d="M4.5 5.5h6v6h-6z"/>
                <path d="M13.5 5.5h6v6h-6z"/>
                <path d="M4.5 14.5h6v6h-6z"/>
                <path d="M13.5 14.5h6v6h-6z"/>
                <path d="M18.5 2.8l.4 1.3 1.3.4-1.3.4-.4 1.3-.4-1.3-1.3-.4 1.3-.4.4-1.3z"/>
            </svg>

            <h4 className="font-semibold">Aso</h4>
          </div>

          <div className="text-sm text-gray-200">
            <p>Copyright © 2026 Nabil Ibrahim.</p>
            <p>All rights reserved</p>
          </div>

          <div className="flex gap-2">
            <Link
              href={"#"}
              className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-chart-1 text-white"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram text-lg" />
            </Link>

            <Link
              href={"#"}
              className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-chart-1 text-white"
              aria-label="Email"
            >
              <i className="fa-regular fa-envelope text-lg" />
            </Link>

            <Link
              href={"#"}
              className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-chart-1 text-white"
              aria-label="Twitter / X"
            >
              <i className="fa-brands fa-x-twitter text-lg" />
            </Link>

            <Link
              href={"#"}
              className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-chart-1 text-white"
              aria-label="YouTube"
            >
              <i className="fa-brands fa-youtube text-lg" />
            </Link>
          </div>
        </section>

        <section className="flex gap-20">
          <div>
            <h4 className="font-semibold mb-3">Company</h4>

            <div className="flex flex-col gap-2 text-sm text-gray-200">
              <Link href={"/about"} className="hover:text-white">About us</Link>
              <Link href={"/portfolio"} className="hover:text-white">Portfolio</Link>
              <Link href={"/contact"} className="hover:text-white">Contact us</Link>
              <Link href={"#"} className="hover:text-white">Pricing</Link>
              <Link href={"#"} className="hover:text-white">Testimonials</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Support</h4>

            <div className="flex flex-col gap-2 text-sm text-gray-200">
              <Link href={"#"} className="hover:text-white">Help Center</Link>
              <Link href={"#"} className="hover:text-white">Terms of Service</Link>
              <Link href={"#"} className="hover:text-white">Legal</Link>
              <Link href={"#"} className="hover:text-white">Privacy Policy</Link>
              <Link href={"#"} className="hover:text-white">Status</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Stay up to date</h4>

            <div className="relative w-64">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-md bg-blue-50 text-black placeholder:text-gray-500 px-4 py-2 pr-12 outline-none focus:ring-2 focus:ring-white/30"
              />

              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2"
                aria-label="Send"
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M17.7232 0.814977C18.6613 0.502274 19.5538 1.39476 19.2411 2.33287L14.1845 17.5027C13.8561 18.4879 12.5163 18.6191 12.0029 17.7164L8.9078 12.2732C8.64089 11.8038 8.25223 11.4151 7.78283 11.1482L2.33973 8.05315C1.437 7.53983 1.56824 6.19997 2.55342 5.87158L17.7232 0.814977Z"
                    stroke="#D1D5DB"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M10.7856 9.27039L8.78564 11.2704"
                    stroke="#D1D5DB"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
