'use client';

import { useEffect, useState } from 'react';
import { ExternalLink, Mail } from 'lucide-react';
import {
  siGithub,
  siLeetcode,
  siHackerrank,
} from 'simple-icons';

const linkedInIcon = {
  path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.555 9h3.564v11.452H3.555V9zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
};

function BrandIcon({ icon, size = 16 }: { icon: { path: string }; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}

export function SocialPreviews({
  github,
  linkedin,
  leetcode,
  hackerrank,
  email,
}: {
  github: string;
  linkedin: string;
  leetcode: string;
  hackerrank: string;
  email: string;
}) {
  const [activePreview, setActivePreview] = useState<string | null>(null);
  const [leetcodeStats, setLeetcodeStats] = useState({ solved: 744 });

  useEffect(() => {
    fetch('/api/leetcode/priyankask')
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => {
        if (payload?.solved) setLeetcodeStats({ solved: payload.solved });
      })
      .catch(() => undefined);
  }, []);

  const links = [
    {
      label: 'GitHub',
      href: github,
      icon: <BrandIcon icon={siGithub} />,
      preview: null,
    },
    {
      label: 'LinkedIn',
      href: linkedin,
      icon: <BrandIcon icon={linkedInIcon} />,
      preview: null,
    },
    {
      label: 'LeetCode',
      href: leetcode,
      icon: <BrandIcon icon={siLeetcode} />,
      preview: (
        <div>
          <div className="social-preview-name">{leetcodeStats.solved} Solved</div>
          <div className="leetcode-stats">
            <div><span>Easy</span><strong>232</strong></div>
            <div><span>Medium</span><strong>419</strong></div>
            <div><span>Hard</span><strong>93</strong></div>
          </div>
          <div className="social-preview-footer"><span>Problem-solving profile</span><ExternalLink size={11} /></div>
        </div>
      ),
    },
    {
      label: 'HackerRank',
      href: hackerrank,
      icon: <BrandIcon icon={siHackerrank} />,
      preview: null,
    },
    {
      label: 'Email',
      href: `mailto:${email}`,
      icon: <Mail size={15} />,
      preview: null,
    },
  ];

  return (
    <div className="social-preview-row mt-10 flex items-center gap-3">
      {links.map((link) => (
        <div key={link.label} className="social-preview-wrap">
          <a
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            className="social-preview-trigger inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--panel)] text-[var(--text)]"
            aria-label={link.label}
            onMouseEnter={() => setActivePreview(link.label)}
            onMouseLeave={() => setActivePreview(null)}
            onFocus={() => setActivePreview(link.label)}
            onBlur={() => setActivePreview(null)}
            onClick={() => setActivePreview(link.label)}
          >
            {link.icon}
          </a>
          {activePreview === link.label && link.preview && (
            <div className="social-mini-preview" role="tooltip">
              {link.preview}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
