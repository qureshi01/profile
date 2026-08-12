import React from 'react';
import { Cpu, ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/8 bg-[#050811] text-slate-500 py-8 md:py-10 w-full">
      <div className="w-full px-4 sm:px-6 md:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pb-6 border-b border-white/5">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 flex-shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base leading-snug">{personalInfo.name}</h4>
              <p className="text-xs text-slate-500 mt-0.5">Backend Engineer · Spring Boot Microservices</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a href={`mailto:${personalInfo.email}`} className="btn-icon" title="Email" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="btn-icon" title="LinkedIn" aria-label="LinkedIn">
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn-icon" title="GitHub" aria-label="GitHub">
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} {personalInfo.name}. Built with React & Vite.</p>
          <button onClick={scrollToTop} className="btn-ghost text-xs py-2 px-3 min-h-[38px] flex items-center gap-2">
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
