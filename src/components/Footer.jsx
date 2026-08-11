import React from 'react';
import { Cpu, Terminal, ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12 text-sm font-mono relative">
      <div className="container-custom space-y-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-slate-900 pb-8">
          
          {/* Brand & Uptime */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white tracking-wide text-base">
                {personalInfo.name}
              </h4>
              <p className="text-xs text-cyan-400">
                Backend Engineering Architect • Spring Boot Microservices
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              title="Email Hashim"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition-all"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Metadata & Scroll to Top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-slate-500">
            © {new Date().getFullYear()} {personalInfo.name}. Engineered with React & Vite.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 transition-colors"
          >
            <span>Scroll to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};
