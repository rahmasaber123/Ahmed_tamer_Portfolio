// src/app/components/ExperienceTimeline.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Experience = {
  title: string;
  org: string;
  period: string;
  bullets: string[];
};

const EXPERIENCES: Experience[] = [
  // Professional Experience
  {
    title: "IT Intern",
    org: "Jotun Abu Dhabi",
    period: "August 2024 – September 2024",
    bullets: [
      "Assisted in IT support tasks, troubleshooting hardware, software, and network-related issues.",
      "Managed system updates, software installations, and user access configurations.",
      "Worked with IT infrastructure, including servers, cloud services, and security protocols.",
      "Collaborated with cross-functional teams to enhance IT processes and ensure smooth system operations.",
    ],
  },
  {
    title: "CIB Summer Internship",
    org: "Commercial International Bank",
    period: "June 2025 – August 2025",
    bullets: [
      "Supported daily IT operations by shadowing the IT team and assisting with routine system checks.",
      "Gained hands-on experience with enterprise IT systems and security protocols.",
      "Participated in IT infrastructure maintenance and user support tasks.",
    ],
  },
  // Certificates
  {
    title: "Security Operations Fundamentals",
    org: "Palo Alto Networks Academy",
    period: "August 2024 – September 2024",
    bullets: [
      "Earned a strong foundation in threat detection, incident response, and security monitoring.",
      "Prepared to support secure IT environments and SOC operations.",
    ],
  },
  {
    title: "SprintX Cybersecurity Summer Camp",
    org: "Microsoft",
    period: "June 2024 – September 2024",
    bullets: [
      "Completed intensive training in ethical hacking, digital forensics, and cloud security concepts.",
      "Enhanced understanding of modern cyber defense strategies and best practices.",
    ],
  }
];


const INITIAL_VISIBLE = 3;        // show first 3
const BATCH_SIZE = 2;             // then load 2 more each time the sentinel hits

export default function ExperienceTimeline() {
  const [visible, setVisible] = useState(INITIAL_VISIBLE);

  // sentinel that triggers when scrolled near the end
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sentinelRef, { margin: "0px 0px -30% 0px" });

  useEffect(() => {
    if (inView) {
      setVisible((v) => Math.min(v + BATCH_SIZE, EXPERIENCES.length));
    }
  }, [inView]);

  const items = EXPERIENCES.slice(0, visible);
  const hasMore = visible < EXPERIENCES.length;

  return (
    <div className="relative">
      {/* vertical rail (now in #00BFFF) */}
      <div className="pointer-events-none absolute left-[10px] top-0 h-full w-px bg-gradient-to-b from-[#00BFFF]/60 via-[#00BFFF]/20 to-transparent md:left-3" />

      <ol className="space-y-12 pl-10 md:pl-12">
        {items.map((exp, i) => (
          <TimelineItem key={i} {...exp} index={i} />
        ))}

        {/* Lazy-load sentinel */}
        {hasMore && (
          <li className="relative">
            <div ref={sentinelRef} className="h-6 w-full" />
            {/* Fallback button (keyboard/low-power devices) */}
            <div className="mt-2">
              <button
                type="button"
                onClick={() =>
                  setVisible((v) => Math.min(v + BATCH_SIZE, EXPERIENCES.length))
                }
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
              >
                Show more
              </button>
            </div>
          </li>
        )}
      </ol>
    </div>
  );
}

function TimelineItem({
  title,
  org,
  period,
  bullets,
  index,
}: Experience & { index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative"
    >
      {/* glow dot in #00BFFF */}
      <span
        className="
          absolute -left-[20px] top-1 h-4 w-4 rounded-full
          bg-[#00BFFF]
          shadow-[0_0_30px_8px_rgba(0,191,255,0.35)]
          ring-2 ring-[#00BFFF]/5
          md:-left-[30px]
        "
        aria-hidden
      />

      <header className="mb-2">
        <h3 className="text-lg md:text-xl font-semibold text-white">{title}</h3>
        <p className="text-[#00BFFF]/90 text-sm md:text-base">{org}</p>
        <p className="text-[13px] md:text-sm text-slate-400">{period}</p>
      </header>

      <ul
        className="
          mt-3 list-disc list-inside pl-2
          marker:text-[#00BFFF]
          text-[15px] leading-relaxed text-slate-300
          space-y-2
        "
      >
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      {/* subtle card backdrop */}
      <div className="pointer-events-none absolute -inset-x-2 -inset-y-3 -z-10 rounded-2xl bg-gradient-to-br from-white/2 to-white/0 backdrop-blur-[1px] ring-1 ring-white/5" />
    </motion.li>
  );
}
