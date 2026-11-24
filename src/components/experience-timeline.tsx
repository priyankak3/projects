'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export function ExperienceTimeline({ children }: { children: ReactNode }) {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const updateProgress = () => {
      const rect = timeline.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * 0.78;
      const end = viewportHeight * 0.22;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (rect.height - (start - end))));
      timeline.style.setProperty('--timeline-progress', `${progress * 100}%`);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div ref={timelineRef} className="experience-timeline relative">
      <div className="experience-line-track absolute bottom-8 top-8 left-4 w-px bg-[var(--line)] lg:left-1/2" />
      <div className="experience-line-fill absolute bottom-8 top-8 left-4 w-px bg-[var(--accent)] lg:left-1/2" />
      {children}
    </div>
  );
}
