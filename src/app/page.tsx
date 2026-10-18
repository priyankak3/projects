'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
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
  Palette,
  Server,
  Sparkles,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import {
  achievements,
  certificates,
  contactLinks,
  education,
  experience,
  profile,
  projects,
  skillCategories,
  // stats,
} from '@/data/portfolio';

const iconMap = {
  Code2,
  Layers3,
  Server,
  BrainCircuit,
  Cloud,
  Palette,
  Database,
};

const introMotion = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: 'easeOut' as const },
};

export default function Home() {
  const particleCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointer = (event: PointerEvent) => {
      pointerRef.current = {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      };
    };

    window.addEventListener('pointermove', handlePointer);

    return () => {
      window.removeEventListener('pointermove', handlePointer);
    };
  }, []);

  useEffect(() => {
    const canvas = particleCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      hue: number;
      twinkle: number;
      seed: number;
      alpha: number;
    }> = [];
    const shootingStars: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      length: number;
      life: number;
      alpha: number;
    }> = [];
    let animationFrameId = 0;

    const makeParticles = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const count = width < 768 ? 60 : 120;
      particles.length = 0;

      for (let i = 0; i < count; i += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 1.35 + 0.7,
          hue: 190 + Math.random() * 120,
          twinkle: Math.random() * Math.PI * 2,
          seed: Math.random() * 1000,
          alpha: 0.3 + Math.random() * 0.45,
        });
      }
    };

    const render = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;

      if (canvas.width !== Math.floor(width * dpr) || canvas.height !== Math.floor(height * dpr)) {
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const grad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.45,
        0,
        width * 0.5,
        height * 0.45,
        Math.max(width, height) * 0.7,
      );
      grad.addColorStop(0, 'rgba(168, 85, 247, 0.09)');
      grad.addColorStop(0.5, 'rgba(34, 211, 238, 0.06)');
      grad.addColorStop(1, 'rgba(5, 8, 22, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      if (shootingStars.length < 5 && Math.random() < 0.045) {
        const startX = Math.random() * width;
        const startY = Math.random() * height * 0.55;
        const direction = Math.random() < 0.5 ? 1 : -1;

        shootingStars.push({
          x: direction === 1 ? -80 : width + 80,
          y: startY + 20,
          vx: (8 + Math.random() * 5) * direction,
          vy: 2.2 + Math.random() * 3,
          length: 70 + Math.random() * 100,
          life: 1,
          alpha: 1,
        });
      }

      for (let i = shootingStars.length - 1; i >= 0; i -= 1) {
        const star = shootingStars[i];
        star.x += star.vx;
        star.y += star.vy;
        star.life -= 0.018;
        star.alpha = Math.max(0, star.life);

        if (star.life <= 0 || star.x > width + 160 || star.y > height + 160) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = star.x - star.vx * star.length;
        const tailY = star.y - star.vy * star.length;
        const trail = ctx.createLinearGradient(star.x, star.y, tailX, tailY);
        trail.addColorStop(0, `rgba(255,255,255,0)`);
        trail.addColorStop(0.25, `rgba(224, 247, 255, ${0.9 * star.alpha})`);
        trail.addColorStop(0.75, `rgba(125, 211, 252, ${0.55 * star.alpha})`);
        trail.addColorStop(1, `rgba(255,255,255,0)`);

        ctx.beginPath();
        ctx.strokeStyle = trail;
        ctx.lineWidth = 1.5;
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${0.9 * star.alpha})`;
        ctx.arc(star.x, star.y, 1.7, 0, Math.PI * 2);
        ctx.fill();
      }

      const mouseX = pointerRef.current.x * width;
      const mouseY = pointerRef.current.y * height;

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        p.twinkle += 0.022;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.hypot(dx, dy);

        if (dist < 140) {
          const force = (140 - dist) / 140;
          p.x -= (dx / (dist || 1)) * force * 0.7;
          p.y -= (dy / (dist || 1)) * force * 0.7;
        }

        const starScale = 1 + Math.sin(p.twinkle + p.seed) * 0.8;
        const hoverBoost = dist < 200 ? 1.2 + (200 - dist) / 200 : 1;
        const dotRadius = p.radius * starScale * hoverBoost;

        for (let j = i + 1; j < particles.length; j += 1) {
          const q = particles[j];
          const dx2 = p.x - q.x;
          const dy2 = p.y - q.y;
          const dist2 = Math.hypot(dx2, dy2);

          if (dist2 < 42) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(148, 163, 184, ${Math.max(0.01, 0.08 - dist2 / 900)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 100%, 82%, ${p.alpha})`;
        ctx.shadowColor = `hsla(${p.hue}, 100%, 75%, 0.9)`;
        ctx.shadowBlur = 8 + dotRadius * 6;
        ctx.arc(p.x, p.y, dotRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,255,255,0.95)';
        ctx.arc(p.x, p.y, Math.max(0.7, dotRadius * 0.45), 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    makeParticles();
    animationFrameId = requestAnimationFrame(render);
    window.addEventListener('resize', makeParticles);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', makeParticles);
    };
  }, []);

  return (
    <main className="relative isolate min-h-screen bg-[#050816] text-white selection:bg-violet-400/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.16),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.12),_transparent_25%),#050816]" />
      <canvas ref={particleCanvasRef} className="pointer-events-none fixed inset-0 z-0 h-screen w-screen opacity-100" />
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl items-center justify-between py-4">
            <a href="#home" className="group flex items-center gap-3 font-semibold tracking-[0.18em] text-white/90 uppercase">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-400/40 bg-violet-500/10 text-[10px] text-violet-200 shadow-[0_0_25px_rgba(168,85,247,0.3)]">
                {profile.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}
              </span>
              <span className="text-xs sm:text-sm">{profile.name}</span>
            </a>

            <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
              <a href="#about" className="transition hover:text-white">About</a>
              <a href="#skills" className="transition hover:text-white">Skills</a>
              <a href="#projects" className="transition hover:text-white">Projects</a>
              <a href="#experience" className="transition hover:text-white">Experience</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={profile.resume}
                download
                className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-violet-400/50 hover:bg-violet-500/10 md:inline-flex"
              >
                <Download size={15} />
                Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 px-4 py-2 text-sm font-medium text-slate-950 transition hover:scale-[1.02]"
              >
                Let&apos;s Connect
                <ArrowRight size={15} />
              </a>
            </div>
          </nav>
        </header>

        <section id="home" className="relative overflow-hidden py-10 sm:py-16 lg:py-20">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.22),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.18),_transparent_30%)]" />
          <div className="mx-auto max-w-5xl">
            <motion.div {...introMotion} className="order-2 sm:order-2 lg:order-none">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-violet-200">
                <Sparkles size={12} />
                HER DIGITAL UNIVERSE
              </div>

              <h1 className="max-w-2xl text-5xl font-black leading-[0.9] tracking-[-0.06em] text-white sm:text-6xl lg:text-[5.2rem]">
                A mind that builds
                <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                  what&apos;s next.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                {profile.headline}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:scale-[1.02]"
                >
                  Explore My Work
                  <ChevronRight size={16} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-violet-400/40 hover:bg-violet-500/10"
                >
                  Let&apos;s Connect
                </a>
                <a
                  href={profile.resume}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/70"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-4 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  <MapPin size={14} />
                  {profile.location}
                </span>
                {profile.linkedin ? (
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition hover:border-violet-400/50 hover:text-white">
                    <BriefcaseBusiness size={14} />
                    LinkedIn
                  </a>
                ) : null}
                {profile.github ? (
                  <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition hover:border-violet-400/50 hover:text-white">
                    <GitBranch size={14} />
                    GitHub
                  </a>
                ) : null}
              </div>
            </motion.div>

          </div>

          {/* <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="text-2xl font-black tracking-[-0.05em] text-white">{stat.value}</div>
                <div className="mt-2 text-sm text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          */}
        </section>

        <motion.section
          id="about"
          {...introMotion}
          className="scroll-mt-28 py-20 sm:py-20"
        >
          <div className="mb-8 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-violet-200">About</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-white sm:text-5xl">The human behind the software.</h2>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/10 via-slate-900 to-cyan-500/10 p-6">
              <div className="absolute right-4 top-4 h-20 w-20 rounded-full bg-violet-400/25 blur-3xl" />
              <div className="absolute bottom-4 left-4 h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="relative rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
                <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-slate-400">
                  <span>Profile</span>
                  <span>Human</span>
                </div>
                <div className="relative h-80 overflow-hidden rounded-[1.25rem] border border-white/10 bg-[radial-gradient(circle_at_30%_30%,_rgba(168,85,247,0.28),_transparent_25%),radial-gradient(circle_at_70%_35%,_rgba(34,211,238,0.22),_transparent_20%),linear-gradient(135deg,#0b1023,#111827_45%,#060816)] sm:h-80 lg:h-64">
                  <img
                    src="/profile-photo.png"
                    alt="Priyanka Sunil Kadam"
                    className="h-full w-full object-cover grayscale contrast-125 brightness-[0.9]"
                    style={{ objectPosition: 'center 20%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/75 via-transparent to-transparent" />
                </div>
                <div className="mt-5 flex items-end justify-between gap-4 align-text-center">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Identity</div>
                    <div className="mt-2 text-xl font-semibold text-white">{profile.name}</div>
                  </div>
                  <div className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-100">
                    {profile.title}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5 text-slate-300">
              <p className="text-lg leading-8 text-slate-200">{profile.intro}</p>
              <p className="leading-8">
                I bring together product thinking, interface design, and implementation craft to create digital experiences that feel intentional from the first interaction to the final system decision.
              </p>
              {/* <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-2 text-xs uppercase tracking-[0.25em] text-slate-400">Approach</div>
                  <div className="text-base font-medium text-white">Human-centered systems</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-2 text-xs uppercase tracking-[0.25em] text-slate-400">Build</div>
                  <div className="text-base font-medium text-white">Elegant, resilient interfaces</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-2 text-xs uppercase tracking-[0.25em] text-slate-400">Mindset</div>
                  <div className="text-base font-medium text-white">Curiosity + clarity</div>
                </div>
              </div> */}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          {...introMotion}
          className="scroll-mt-24 py-20 sm:py-20"
        >
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">Skills</p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {skillCategories.map((category) => (
              <div key={category.title} className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <div className="mb-2.5 flex items-center gap-2.5 text-white">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-100">
                    {(() => {
                      const Icon = iconMap[category.icon as keyof typeof iconMap] ?? Code2;
                      return <Icon size={14} />;
                    })()}
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-100/90">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-slate-900/80 px-2.5 py-1 text-[11px] font-medium tracking-[0.02em] text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          {...introMotion}
          className="scroll-mt-24 py-20 sm:py-20"
        >
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.28em] text-violet-200">Projects</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-white sm:text-5xl">Selected work with signal, scale, and purpose.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">
                      {project.category}
                    </span>
                    <span className="text-slate-400">01</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{project.summary}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm leading-6 text-slate-200">{project.impact}</p>

                  <div className="flex items-center justify-between gap-3 pt-2">
                    {project.link ? (
                      <a href={project.link} target={project.link.startsWith('http') ? '_blank' : undefined} rel={project.link.startsWith('http') ? 'noreferrer' : undefined} className="inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-white">
                        {project.category.includes('AI') ? 'View paper' : 'View project'}
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="text-sm text-slate-500">Project link unavailable</span>
                    )}
                    {project.repo ? (
                      <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-violet-200 transition hover:text-white">
                        GitHub
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="experience"
          {...introMotion}
          className="scroll-mt-24 py-20 sm:py-20"
        >
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">Experience</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-white sm:text-5xl">A career shaped by product, craft, and momentum.</h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {experience.map((role, index) => (
              <div key={role.title} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 sm:p-6">
                <div className="absolute left-5 top-5 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 sm:left-6 sm:top-6" />
                <div className="ml-5 sm:ml-7">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-3">
                      <img
                        src="/deutsche-bank-logo.png"
                        alt="Deutsche Bank logo"
                        className="h-9 w-9 rounded-xl border border-violet-400/30 bg-white/5 object-contain p-1.5 shadow-[0_0_25px_rgba(56,189,248,0.2)] sm:h-11 sm:w-11"
                      />
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400 sm:text-xs">{role.period}</div>
                        <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl sm:text-2xl">{role.title}</h3>
                        <div className="mt-1 text-sm text-slate-300">{role.company}</div>
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300 sm:mt-4 sm:text-base sm:leading-7">{role.summary}</p>

                  <ul className="mt-3 space-y-2 text-sm text-slate-200 sm:mt-5 sm:text-base">
                    {role.bullets.slice(0, 2).map((bullet) => (
                      <li key={bullet} className="flex gap-3 leading-6 sm:leading-7">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          {...introMotion}
          className="py-20 sm:py-20"
        >
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.28em] text-violet-200">Education & recognition</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-white sm:text-5xl">Credentials, learning, and milestones.</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {education.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-100">
                    <GraduationCap size={16} />
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.period}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-base text-violet-200">{item.school}</p>
                <p className="mt-3 leading-7 text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-white/10 bg-gradient-to-r from-violet-500/10 via-slate-950 to-cyan-500/10 p-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-slate-300">
              <Database size={14} />
              Highlights
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {achievements.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-slate-200">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section
          id="certificates"
          {...introMotion}
          className="scroll-mt-24 py-20 sm:py-20"
        >
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">Certifications</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-white sm:text-5xl">Validated learning and professional recognition.</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {certificates.map((certificate) => (
              <div key={certificate.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-100">
                    <GraduationCap size={16} />
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{certificate.issued}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{certificate.title}</h3>
                <p className="mt-2 text-base text-violet-200">{certificate.issuer}</p>
                <p className="mt-3 leading-7 text-slate-300">{certificate.credential}</p>
                <a href={certificate.file} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-white">
                  View certificate
                  <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          {...introMotion}
          className="scroll-mt-24 py-20 pb-24 sm:py-20 sm:pb-28"
        >
          <div className="rounded-[2.4rem] border border-violet-400/20 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.18),transparent_30%),linear-gradient(135deg,#0b1023_0%,#121828_45%,#050816_100%)] p-6 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-violet-200">Connect</p>
                <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-[-0.05em] text-white sm:text-5xl">
                  Have an interesting problem? Let&apos;s build something extraordinary.
                </h2>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <a href={profile.resume} download className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:scale-[1.02]">
                  <Download size={15} />
                  Download resume
                </a>
                <a href={`mailto:${profile.email}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-violet-400/40 hover:bg-violet-500/10">
                  <Mail size={15} />
                  Email me
                </a>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {contactLinks.map((link) => {
                const Icon = Mail;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-left transition hover:border-violet-400/40 hover:bg-violet-500/10"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-100">
                      <Icon size={16} />
                    </div>
                    <div className="mt-4 text-sm uppercase tracking-[0.22em] text-slate-400">{link.label}</div>
                    <div className="mt-2 text-base font-medium text-white">{link.label === 'Email' ? 'Send email' : 'Call now'}</div>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
