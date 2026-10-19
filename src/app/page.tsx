import {
  BriefcaseBusiness,
  BrainCircuit,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Download,
  ExternalLink,
  GitBranch,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Server,
  Terminal,
} from 'lucide-react';
import {
  achievements,
  certificates,
  contactLinks,
  education,
  experience,
  profile,
  projects,
  skillCategories,
} from '@/data/portfolio';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  siGithub,
  siLeetcode,
  siHackerrank,
} from 'simple-icons';
const iconMap = {
  Code2,
  Layers3,
  Server,
  BrainCircuit,
  Cloud,
  Database,
};
const linkedInIcon = {
  path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.555 9h3.564v11.452H3.555V9zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
};
const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];
function BrandIcon({
  icon,
  size = 15,
}: {
  icon: { path: string };
  size?: number;
}) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}
export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300 selection:bg-[var(--text)] selection:text-[var(--bg)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-6xl items-center justify-between py-4">
            <a href="#home" className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--text)]/80">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--panel)] text-[10px]">
                {profile.name
                  .split(' ')
                  .map((part) => part[0])
                  .slice(0, 2)
                  .join('')}
              </span>
              <span>{profile.name}</span>
            </a>

            <div className="hidden items-center gap-7 text-[10px] uppercase tracking-[0.28em] text-[var(--muted)] md:flex">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-[var(--text)]">
                  {item}
                </a>
              ))}
              <a href={profile.resume} download className="transition hover:text-[var(--text)]">
                Resume
              </a>
            </div>

            <ThemeToggle />
          </nav>
        </header>

        <section id="home" className="py-12 sm:py-20 lg:py-24">
          <div className="w-full">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--text)]">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--text)]" />
              {profile.yearsOfExperience} experience
            </div>

           <p className="mb-4 text-sm font-medium tracking-wide text-violet-700 dark:text-violet-300 sm:text-base">
              Hi, my name is
            </p>

            <h1 className="max-w-full text-[clamp(3.5rem,7vw,7rem)] font-bold leading-[1.02] tracking-[-0.055em] text-[var(--text)]">
              Priyanka Kadam.
            </h1>

            <p className="mt-3 max-w-5xl text-[clamp(2rem,4.8vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-[var(--muted)]">
              I build software that solves real problems.
            </p>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              I&apos;m a software engineer working across full-stack applications and backend systems, focused on building reliable, thoughtful products.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--text)] px-5 py-3 text-sm font-medium text-[var(--bg)] transition hover:opacity-90">
                View selected work
                <ChevronRight size={16} />
              </a>

              <a href={profile.resume} download className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel)] px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:opacity-90">
                <Download size={16} />
                Download Resume
              </a>
            </div>

           <div className="mt-10 flex flex-wrap items-center gap-3">
  {[
    { label: 'GitHub', href: profile.github || '#contact', brandIcon: siGithub },
    { label: 'LinkedIn', href: profile.linkedin.startsWith('http') ? profile.linkedin : `https://www.${profile.linkedin}`,  brandIcon: linkedInIcon },
    { label: 'LeetCode', href: profile.leetcode || '#contact', brandIcon: siLeetcode },
    { label: 'HackerRank', href: profile.hackerrank || '#contact', brandIcon: siHackerrank },
    { label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
    { label: 'Location', href: '#contact', Icon: MapPin },
  ].map(({ label, href, Icon, brandIcon }) => (
    <a
      key={label}
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--panel)] text-[var(--text)] transition hover:opacity-90"
      aria-label={label}
      title={label}
    >
      {brandIcon ? (
        <BrandIcon icon={brandIcon} size={16} />
      ) : (
        Icon && <Icon size={15} />
      )}
    </a>
  ))}
</div>
          </div>
        </section>

        <section id="about" className="reveal scroll-mt-28 py-16 sm:py-20">
          <div className="mb-8 flex items-center justify-between gap-4">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">About</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-6">
              <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--bg)] p-5">
                <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
                  <span>Profile</span>
                  <span>Resume</span>
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Current role</div>
                    <div className="mt-2 text-2xl font-medium tracking-[-0.04em] text-[var(--text)]">SDE1, Deutsche Bank</div>
                  </div>

                  <div className="space-y-3 text-sm leading-7 text-[var(--muted)]">
                    <div className="flex items-center justify-between gap-4 border-b border-[var(--line)] pb-2">
                      <span className="uppercase tracking-[0.2em] text-[var(--muted)]">Experience</span>
                      <span className="text-[var(--text)]">1+ years</span>
                    </div>
                    <div className="flex items-center justify-between gap-4 border-b border-[var(--line)] pb-2">
                      <span className="uppercase tracking-[0.2em] text-[var(--muted)]">Education</span>
                      <span className="text-[var(--text)]">B.Tech C.E.</span>
                    </div>
                    <div className="flex items-center justify-between gap-4 border-b border-[var(--line)] pb-2">
                      <span className="uppercase tracking-[0.2em] text-[var(--muted)]">Location</span>
                      <span className="text-[var(--text)]">Pune, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5 text-[var(--muted)]">
              <p className="text-lg leading-8 text-[var(--text)]">{profile.intro}</p>
              <p className="leading-8">
                I build software that matters: systems that solve meaningful problems, interfaces that feel effortless, and decisions that are grounded in clarity, performance, and human needs.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="reveal scroll-mt-24 py-16 sm:py-20">
          <div className="mb-8">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">Skills</p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {skillCategories.map((category) => (
              <div key={category.title} className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-4">
                <div className="mb-3 flex items-center gap-3 text-[var(--text)]">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--bg)] text-[var(--text)]">
                    {(() => {
                      const Icon = iconMap[category.icon as keyof typeof iconMap] ?? Code2;
                      return <Icon size={14} />;
                    })()}
                  </div>
                  <h3 className="text-[11px] font-medium uppercase tracking-[0.22em]">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span key={item} className="rounded-full border border-[var(--line)] bg-[var(--bg)] px-2.5 py-1 text-[10px] uppercase tracking-[0.08em] text-[var(--muted)]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="reveal scroll-mt-24 py-16 sm:py-20">
          <div className="mb-8">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">Projects</p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.05em] text-[var(--text)] sm:text-5xl">Selected work.</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="rounded-[1.8rem] border border-[var(--line)] bg-[var(--panel)] p-5 transition-transform duration-200 hover:-translate-y-1">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">{project.category}</span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">01</span>
                </div>

                <h3 className="mt-5 text-2xl font-medium tracking-[-0.04em] text-[var(--text)]">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{project.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-[var(--line)] bg-[var(--bg)] px-2.5 py-1 text-[10px] uppercase tracking-[0.08em] text-[var(--muted)]">
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-6 text-[var(--muted)]">{project.impact}</p>

                <div className="mt-6 flex items-center justify-between gap-3">
                  {project.link ? (
                    <a href={project.link} target={project.link.startsWith('http') ? '_blank' : undefined} rel={project.link.startsWith('http') ? 'noreferrer' : undefined} className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text)]">
                      {project.category.includes('AI') ? 'View paper' : 'View project'}
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="text-sm text-[var(--muted)]">Project link unavailable</span>
                  )}
                  {project.repo ? (
                    <a href={project.repo} target="_blank" rel="noreferrer" className="text-sm text-[var(--muted)] hover:text-[var(--text)]">
                      GitHub
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="reveal scroll-mt-24 py-16 sm:py-20">
          <div className="mb-8">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">Experience</p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.05em] text-[var(--text)] sm:text-5xl">Career momentum.</h2>
          </div>

          <div className="space-y-4">
            {experience.map((role) => (
              <div key={role.title} className="rounded-[1.8rem] border border-[var(--line)] bg-[var(--panel)] p-5 sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">{role.period}</div>
                    <h3 className="mt-2 text-xl font-medium tracking-[-0.04em] text-[var(--text)] sm:text-2xl">{role.title}</h3>
                    <div className="mt-2 text-sm text-[var(--muted)]">{role.company}</div>
                  </div>
                </div>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">{role.summary}</p>

                <ul className="mt-5 space-y-3 text-sm text-[var(--muted)] sm:text-base">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 leading-7">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--text)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="reveal py-16 sm:py-20">
          <div className="mb-8">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">Education & recognition</p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.05em] text-[var(--text)] sm:text-5xl">Credentials.</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {education.map((item) => (
              <div key={item.title} className="rounded-[1.8rem] border border-[var(--line)] bg-[var(--panel)] p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--bg)] text-[var(--text)]">
                    <GraduationCap size={16} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">{item.period}</span>
                </div>
                <h3 className="mt-5 text-xl font-medium text-[var(--text)]">{item.title}</h3>
                <p className="mt-2 text-base text-[var(--muted)]">{item.school}</p>
                <p className="mt-3 leading-7 text-[var(--muted)]">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[1.8rem] border border-[var(--line)] bg-[var(--panel)] p-6">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
              <Database size={14} />
              Highlights
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {achievements.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-4 text-sm leading-7 text-[var(--muted)]">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--text)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="certificates" className="reveal scroll-mt-24 py-16 sm:py-20">
          <div className="mb-8">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">Certifications</p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.05em] text-[var(--text)] sm:text-5xl">Validated learning.</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {certificates.map((certificate) => (
              <div key={certificate.title} className="rounded-[1.8rem] border border-[var(--line)] bg-[var(--panel)] p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--bg)] text-[var(--text)]">
                    <GraduationCap size={16} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">{certificate.issued}</span>
                </div>
                <h3 className="mt-5 text-xl font-medium text-[var(--text)]">{certificate.title}</h3>
                <p className="mt-2 text-base text-[var(--muted)]">{certificate.issuer}</p>
                <p className="mt-3 leading-7 text-[var(--muted)]">{certificate.credential}</p>
                <a href={certificate.file} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--text)]">
                  View certificate
                  <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="reveal scroll-mt-24 py-16 pb-24 sm:py-20 sm:pb-28">
          <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-6 sm:p-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">Connect</p>
                <h2 className="mt-3 max-w-xl text-3xl font-medium tracking-[-0.05em] text-[var(--text)] sm:text-5xl">Let&apos;s build something meaningful.</h2>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={profile.resume} download className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--text)] px-5 py-3 text-sm font-medium text-[var(--bg)] transition hover:opacity-90">
                  <Download size={15} />
                  Download resume
                </a>
                <a href={`mailto:${profile.email}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-[var(--bg)] px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:opacity-90">
                  <Mail size={15} />
                  Email me
                </a>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {contactLinks.map((link) => {
                const iconMapForContacts = {
                  Email: Mail,
                  GitHub: GitBranch,
                  LinkedIn: BriefcaseBusiness,
                };
                const Icon = iconMapForContacts[link.label as keyof typeof iconMapForContacts] ?? Mail;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="rounded-[1.4rem] border border-[var(--line)] bg-[var(--bg)] p-4 text-left"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--panel)] text-[var(--text)]">
                      <Icon size={16} />
                    </div>
                    <div className="mt-4 text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">{link.label}</div>
                    <div className="mt-2 text-base font-medium text-[var(--text)]">{link.label === 'Email' ? 'Send email' : 'Open profile'}</div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
