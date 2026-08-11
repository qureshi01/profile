import React from 'react';
import { Cpu, ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] py-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-[var(--border-subtle)]">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-accent)] flex items-center justify-center text-[var(--cyan)]">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-[var(--text-primary)] text-sm">{personalInfo.name}</p>
              <p className="text-[11px] font-mono text-[var(--text-muted)]">Backend Engineer · Spring Boot Microservices</p>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {[
              { href: `mailto:${personalInfo.email}`, icon: Mail, title: 'Email' },
              { href: personalInfo.linkedin, icon: LinkedinIcon, title: 'LinkedIn', external: true },
              { href: personalInfo.github, icon: GithubIcon, title: 'GitHub', external: true },
            ].map((item, i) => (
              <a key={i} href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
                title={item.title}
                className="w-9 h-9 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-default)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--cyan)] hover:border-[var(--border-accent)] transition-all">
                <item.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 text-xs font-mono text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} {personalInfo.name}. Built with React & Vite.</p>
          <button onClick={scrollToTop} className="btn btn-secondary text-xs min-h-0 py-2 px-3">
            Back to top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
