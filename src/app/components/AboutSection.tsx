"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
<section
  id="about"
  className="
    relative
    scroll-mt-[64px]   /* phones: was 80px → now 64px */
    sm:scroll-mt-[80px]/* small screens: ~header 96px → land a bit higher */
    md:scroll-mt-[88px]/* tablets */
    lg:scroll-mt-[96px]/* large: match big header */
    pt-8 sm:pt-10 md:pt-1
    pb-12 sm:pb-1 md:pb-90
  "
>
      {/* background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute right-[-10%] top-[-8%] h-[46vmin] w-[46vmin] sm:h-[40vmin] sm:w-[40vmin] md:h-[34vmin] md:w-[34vmin] lg:h-[26vmin] lg:w-[26vmin] xl:h-[22vmin] xl:w-[22vmin] rounded-full blur-2xl lg:blur-xl opacity-35 lg:opacity-25"
          style={{
            background:
              "radial-gradient(closest-side at 45% 40%, rgba(34,211,238,.45), transparent 68%), radial-gradient(at 70% 60%, rgba(20,184,166,.35), transparent 65%)",
          }}
        />
        <div
          className="absolute left-[-12%] bottom-[-12%] h-[40vmin] w-[40vmin] sm:h-[36vmin] sm:w-[36vmin] md:h-[30vmin] md:w-[30vmin] lg:h-[24vmin] lg:w-[24vmin] xl:h-[20vmin] xl:w-[20vmin] rounded-full blur-2xl lg:blur-xl opacity-25 lg:opacity-20"
          style={{
            background:
              "radial-gradient(closest-side at 60% 50%, rgba(59,130,246,.25), transparent 70%), radial-gradient(at 30% 50%, rgba(56,189,248,.25), transparent 65%)",
          }}
        />
      </div>

      {/* container */}
      <div className="mx-auto w-[92%] sm:w-[88%] md:w-[80%] lg:w-[57%] xl:max-w-5xl px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Ahmed Tamer</h1>
          <p className="text-lg text-gray-300 mb-2">5th Settlement, New Cairo</p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-400 mb-4">
            <a href="tel:01026661177" className="hover:text-white transition-colors">01026661177</a>
            <span>•</span>
            <a href="mailto:Ahmedtame141@gmail.com" className="hover:text-white transition-colors">Ahmedtame141@gmail.com</a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/ahmed-tamer-at" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <span>•</span>
            <a href="https://github.com/Atamer77" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>

        {/* glass card */}
        <div className="mx-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 md:p-8 lg:p-10 shadow-[0_10px_40px_rgba(2,6,23,.30)]">
          <div className="grid md:grid-cols-2 items-start gap-8 md:gap-12">
            {/* left: portrait */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-black/20"
            >
              {/* aspect ratio wrapper */}
              <div
                className="
                  relative w-full
                  aspect-[4/5]           /* phones: tall portrait */
                  sm:aspect-[3/4]        /* small tablets */
                  md:aspect-[4/3]        /* tablets */
                  lg:aspect-[3/4] xl:aspect-[4/5] /* desktops: taller so whole image fits */
                  max-h-[560px] lg:max-h-[620px] mx-auto
                "
              >
                <Image
                  src="/ahmed_tamer.jpg"
                  alt="Ahmed Tamer portrait"
                  fill
                  priority
                  sizes="(max-width: 640px) 92vw, (max-width: 768px) 88vw, (max-width: 1024px) 80vw, (max-width: 1280px) 70vw, 560px"
                  /* phones show full image; tablets fill; desktops show full again */
                  className="rounded-[inherit] object-cover [object-position:50%_20%]"
                />
              </div>
            </motion.div>

            {/* right: text */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                Objective
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Detail-oriented IT professional with hands-on experience in IT support, system administration, and cybersecurity.</li>
                <li>Skilled in digital forensics and penetration testing to enhance security and operational efficiency.</li>
                <li>Committed to teamwork and continuously advancing expertise in emerging technologies.</li>
              </ul>
                
              <h3 className="text-xl font-semibold text-white mb-3 mt-8">
                Education
              </h3>
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-white">Coventry University The Knowledge Hub</h4>
                  <span className="text-sm text-gray-400 whitespace-nowrap ml-4">Sep 2022 – May 2026</span>
                </div>
                <p className="text-gray-300">Ethical Hacking and Cyber Security</p>
                <p className="text-sm text-gray-400">5th Settlement, New Cairo</p>
              </div>
              <div className="mt-10">
                <a
                  href="/ahmed_tamer_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-cyan-200 hover:bg-cyan-400/20 hover:border-cyan-300/60 transition"
                >
                  <span className="inline-block h-2 w-2 rounded-sm bg-orange-400" />
                  Review CV
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
