import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Reveal } from "@/hooks/use-reveal";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Musekwa Tsiamo Precious — Professional Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Musekwa Tsiamo Precious — a motivated young South African professional developing business, computer and AI skills through Business Management studies and the CAPACITI AI Skills Acceleration Programme.",
      },
      { property: "og:title", content: "Musekwa Tsiamo Precious — Professional Portfolio" },
      {
        property: "og:description",
        content:
          "A motivated young South African professional developing business, computer and AI skills — open to internships and opportunities to grow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------- shared pieces ---------- */

function SectionHeading({ letter, title }: { letter: string; title: string }) {
  return (
    <Reveal className="flex items-baseline gap-3">
      <span className="font-meta text-[11px] font-medium tracking-[0.2em] text-accent">
        ({letter})
      </span>
      <h2 className="font-display text-2xl font-semibold tracking-tight text-balance md:text-3xl">
        {title}
      </h2>
    </Reveal>
  );
}

function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[20px] border border-border bg-panel p-4 backdrop-blur-xl md:p-5 ${className}`}
    >
      {children}
    </div>
  );
}

const TECHNICAL_SKILLS = [
  "Microsoft Word",
  "Microsoft Excel",
  "Microsoft PowerPoint",
  "Computer literacy",
  "AI-assisted tools",
  "Basic digital skills",
];

const SOFT_SKILLS = [
  "Communication",
  "Teamwork",
  "Time management",
  "Problem-solving",
  "Adaptability",
  "Willingness to learn",
  "Responsibility",
  "Organisation",
];

const PROJECTS = [
  {
    title: "Personal CV & Job Application Website",
    note: "A professional website that presents my CV, education, computer skills, certificates and career goals. It helps potential employers learn more about me and easily access my contact information and qualifications.",
    tags: ["Website"],
    placeholder: false,
  },
  {
    title: "Project title",
    note: "Describe the problem, your approach and the outcome here.",
    tags: ["Tech · add"],
    placeholder: true,
  },
  {
    title: "Project title",
    note: "Use this slot for a third project, internship build or coursework.",
    tags: ["Tool · add", "Tech · add"],
    placeholder: true,
  },
];

const CONTACT_ROWS = [
  {
    label: "Email",
    value: "tsiamoprecious238@gmail.com",
    href: "mailto:tsiamoprecious238@gmail.com",
  },
  {
    label: "Phone",
    value: "072 952 5762",
    href: "tel:+27729525762",
  },
  {
    label: "GitHub",
    value: "github.com/PreciousMaker",
    href: "https://github.com/PreciousMaker",
  },
];

/* ---------- page ---------- */

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background font-body text-foreground antialiased">
      {/* soft background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-24 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl md:h-[520px] md:w-[520px]" />
        <div className="absolute top-56 -right-24 h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl md:top-80 md:right-10 md:h-[420px] md:w-[420px]" />
        <div className="absolute bottom-10 -left-20 h-[320px] w-[320px] rounded-full bg-primary/[0.07] blur-3xl md:-left-24 md:h-[440px] md:w-[440px]" />
      </div>

      {/* sticky navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-panel backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-lg font-semibold tracking-tight">M. Tsiamo</span>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:inline">
              Portfolio
            </span>
          </div>
          <nav className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground md:gap-6">
            <a href="#about" className="transition-colors hover:text-foreground">
              About
            </a>
            <a href="#skills" className="transition-colors hover:text-foreground">
              Skills
            </a>
            <a href="#projects" className="hidden transition-colors hover:text-foreground md:inline">
              Projects
            </a>
            <a
              href="#contact"
              className="rounded-full bg-primary/10 px-3 py-1.5 text-primary transition-colors hover:bg-primary/20"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 pb-16">
        {/* hero */}
        <section className="pt-10 pb-10 md:pt-16">
          <Reveal className="grid place-items-center rounded-[28px] border border-border bg-panel p-7 backdrop-blur-2xl md:p-12">
            <img
              src={portrait}
              alt="Portrait of Musekwa Tsiamo Precious"
              width={1024}
              height={1024}
              className="size-28 rounded-full object-cover outline-1 -outline-offset-1 outline-black/5 md:size-36"
            />
            <p className="rise mt-5 text-[11px] font-medium uppercase tracking-[0.22em] text-accent [animation-delay:120ms]">
              South Africa — open to opportunities
            </p>
            <h1 className="rise mt-2 text-center font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance [animation-delay:200ms] md:text-6xl">
              Musekwa Tsiamo Precious
            </h1>
            <p className="rise mt-3 max-w-xl text-center text-sm leading-relaxed text-muted-foreground text-pretty [animation-delay:300ms] md:text-base">
              A hardworking, motivated and enthusiastic young South African professional developing
              business, computer and AI skills — eager to learn, grow professionally and gain
              opportunities to put them to work.
            </p>
            <div className="rise mt-5 flex flex-wrap items-center justify-center gap-3 [animation-delay:420ms]">
              <a
                href="#contact"
                className="rounded-full bg-foreground px-5 py-2.5 text-xs font-semibold text-background transition-colors hover:bg-foreground/80"
              >
                Get in touch
              </a>
              <a
                href="#about"
                className="rounded-full border border-border bg-panel px-5 py-2.5 text-xs font-semibold text-foreground backdrop-blur transition-colors hover:border-primary/40"
              >
                View profile
              </a>
            </div>
          </Reveal>
        </section>

        {/* about */}
        <section id="about" className="py-10">
          <SectionHeading letter="a" title="About me" />
          <Reveal delay={120} className="mt-4">
            <Panel className="rounded-[22px] md:mx-auto md:max-w-3xl md:p-7">
              <p className="text-sm leading-relaxed text-pretty md:text-base">
                I am passionate about personal development, technology and building my professional
                skills. I am currently growing my knowledge through Business Management studies and
                the CAPACITI AI Skills Acceleration Programme. I am a fast learner, responsible,
                adaptable and willing to take on new challenges.
              </p>
            </Panel>
          </Reveal>
        </section>

        {/* skills */}
        <section id="skills" className="py-10">
          <SectionHeading letter="b" title="Skills" />
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Reveal delay={120}>
              <Panel>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Technical skills
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {TECHNICAL_SKILLS.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Panel>
            </Reveal>
            <Reveal delay={220}>
              <Panel>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Soft skills
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {SOFT_SKILLS.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-foreground/5 px-3 py-1.5 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Panel>
            </Reveal>
          </div>
        </section>

        {/* projects */}
        <section id="projects" className="py-10">
          <SectionHeading letter="c" title="Projects" />
          <Reveal delay={100}>
            <p className="mt-1 text-xs text-muted-foreground">
              More projects coming soon — new cards will be added here as they are completed.
            </p>
          </Reveal>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {PROJECTS.map((project, index) => (
              <Reveal key={index} delay={140 + index * 100}>
                <div
                  className={
                    project.placeholder
                      ? "h-full rounded-[20px] border border-dashed border-primary/30 bg-panel p-4 backdrop-blur-xl"
                      : "h-full rounded-[20px] border border-border bg-panel p-4 shadow-sm backdrop-blur-xl"
                  }
                >
                  <div className="flex items-center justify-between">
                    {project.placeholder ? (
                      <>
                        <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                          Placeholder
                        </span>
                        <span className="font-meta text-[10px] tracking-[0.14em] text-muted-foreground">
                          EDIT ME
                        </span>
                      </>
                    ) : (
                      <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                        Project
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 font-display text-lg font-medium tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {project.note}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-2.5 py-1 text-[10px] font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* education */}
        <section id="education" className="py-10">
          <SectionHeading letter="d" title="Education" />
          <div className="mt-4 space-y-3">
            <Reveal delay={140}>
              <Panel>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-base font-medium tracking-tight">
                      Sedibeng TVET College
                    </h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      Business Management — N4
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] text-primary">
                    2026
                  </span>
                </div>
              </Panel>
            </Reveal>
            <Reveal delay={240}>
              <Panel>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-base font-medium tracking-tight">
                      Sinthumule Senior Secondary School
                    </h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">Grade 12 — completed 2023</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-foreground/5 px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em]">
                    2023
                  </span>
                </div>
              </Panel>
            </Reveal>
          </div>
        </section>

        {/* certifications */}
        <section id="certifications" className="py-10">
          <SectionHeading letter="e" title="Certifications" />
          <Reveal delay={140} className="mt-4">
            <div className="rounded-[20px] border border-dashed border-accent/40 bg-accent/5 p-4 md:p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                In progress
              </p>
              <h3 className="mt-2 font-display text-lg font-medium tracking-tight">
                CAPACITI AI Skills Acceleration Programme
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-pretty">
                Currently participating and developing digital and AI-related skills with
                AI-assisted tools. This certification will be listed here once it is officially
                received.
              </p>
            </div>
          </Reveal>
        </section>

        {/* experience */}
        <section id="experience" className="py-10">
          <SectionHeading letter="f" title="Experience" />
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Reveal delay={140}>
              <Panel className="h-full p-5">
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                  Building now
                </span>
                <p className="mt-3 text-sm leading-relaxed text-pretty">
                  I do not yet have formal work experience. I am actively building my professional
                  experience through education, skills development, training and practical projects
                  — and I am ready to bring that momentum into a professional role.
                </p>
              </Panel>
            </Reveal>
            <Reveal delay={240}>
              <Panel className="h-full bg-primary/10 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                  Professional development
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">
                  CAPACITI AI Skills Acceleration Programme
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-pretty">
                  Developing my digital and AI-related skills and gaining practical experience with
                  AI-assisted development tools.
                </p>
              </Panel>
            </Reveal>
          </div>
        </section>

        {/* contact */}
        <section id="contact" className="py-10">
          <SectionHeading letter="g" title="Contact" />
          <div className="mt-4 space-y-3">
            {CONTACT_ROWS.map((row, index) => (
              <Reveal key={row.label} delay={140 + index * 100}>
                <a
                  href={row.href ?? "#contact"}
                  className="flex items-center justify-between rounded-[18px] border border-border bg-panel p-4 backdrop-blur-xl transition-all hover:border-primary/40 hover:bg-primary/5 md:px-6"
                >
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {row.label}
                    </p>
                    <p className="mt-0.5 text-sm">{row.value}</p>
                  </div>
                  <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[10px] font-semibold text-accent">
                    Open
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal delay={400}>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:mx-auto md:max-w-2xl md:text-center">
              I am open to internships, learnerships and entry-level opportunities where I can use
              my skills and continue developing my career. Feel free to reach out by email or
              phone.
            </p>
          </Reveal>
        </section>

        {/* footer */}
        <footer className="border-t border-border pt-8 pb-2">
          <p className="text-center text-xs text-muted-foreground">
            Musekwa Tsiamo Precious — professional portfolio
          </p>
          <p className="mt-1 text-center text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
            Built to be shared with employers
          </p>
        </footer>
      </main>
    </div>
  );
}
