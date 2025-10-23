"use client";

import React, { useState } from "react";

const ACCENT = "#00BFFF";

type Status = { type: "idle" | "sending" | "ok" | "error"; message?: string };

export default function ContactSection() {
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();
    const honeypot = (data.get("company") as string) || ""; // honeypot

    if (!name || !email || !message) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    try {
      // Create mailto link with form data
      const subject = `New message from ${name}`;
      const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
      const mailtoLink = `mailto:Ahmedtamer141@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
      
      // Open user's default email client
      window.location.href = mailtoLink;
      
      // Reset form and show success message
      form.reset();
      setStatus({ 
        type: "ok", 
        message: "Email client opened! Please send your message." 
      });
      
    } catch (err) {
      console.error(err);
      setStatus({ 
        type: "error", 
        message: "Couldn't open email client. Please try again or email me directly at Ahmedtamer141@gmail.com" 
      });
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-6">
      <div className="relative rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent" />
        <form onSubmit={onSubmit} className="relative grid gap-5">
          <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" htmlFor="name">
              <Input id="name" name="name" placeholder="Your name" required />
            </Field>
            <Field label="Email" htmlFor="email">
              <Input id="email" name="email" type="email" placeholder="you@email.com" required />
            </Field>
          </div>

          <Field label="Message" htmlFor="message">
            <Textarea id="message" name="message" placeholder="Tell me a bit about your project…" required rows={6} />
          </Field>

          {status.type === 'error' && (
            <p className="text-sm text-red-400">{status.message}</p>
          )}

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={status.type === "sending"}
              className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium text-white transition border border-white/10"
              style={{
                background: "rgba(0,191,255,0.15)",
                borderColor: `${ACCENT}33`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,191,255,0.22)";
                e.currentTarget.style.borderColor = `${ACCENT}66`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0,191,255,0.15)";
                e.currentTarget.style.borderColor = `${ACCENT}33`;
              }}
            >
              {status.type === "sending" ? "Sending..." : "Send message"}
            </button>

            {status.type === "ok" && (
              <p className="text-sm text-emerald-400">{status.message}</p>
            )}
          </div>
        </form>

        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:items-end gap-2 text-sm text-white/80 text-center sm:text-right">
            <a 
              href="mailto:Ahmedtamer141@gmail.com" 
              className="break-all block hover:opacity-80 hover:underline"
            >
              Ahmedtamer141@gmail.com
            </a>

            <div className="flex flex-wrap justify-center sm:justify-end items-center gap-3">
              <a
                href="https://github.com/Atamer77"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:opacity-80"
              >
                GitHub
              </a>
              <span className="opacity-40">•</span>
              <a
                href="https://www.linkedin.com/in/ahmed-tamer-at"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:opacity-80"
              >
                LinkedIn
              </a>
              <span className="opacity-40">•</span>
              <a
                href="tel:01026661177"
                className="underline underline-offset-4 hover:opacity-80"
              >
                Phone
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- UI bits ---------- */

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="grid gap-2 text-left">
      <span className="text-sm text-white/80">{label}</span>
      {children}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-2.5 text-white/90 placeholder-white/40
                  outline-none transition focus:border-[#00BFFF]/60 focus:ring-2 focus:ring-[#00BFFF]/30`}
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      rows={6}
      className={`w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-white/90 placeholder-white/40
                  outline-none transition focus:border-[#00BFFF]/60 focus:ring-2 focus:ring-[#00BFFF]/30 resize-y`}
    />
  );
}
