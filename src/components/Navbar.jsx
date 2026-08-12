import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Cpu, Menu, X, Award, HelpCircle, Sparkles, Terminal } from 'lucide-react';
import { useArchitecture } from '../context/ArchitectureContext';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates', icon: Award },
  { href: '#contact', label: 'Contact' },
];

export const Navbar = () => {
  const {
    isDevToolsActive,
    toggleDevTools,
    showTelemetryInfo,
    toggleTelemetryInfo,
    setShowTelemetryInfo
  } = useArchitecture();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const isModalOpen = showTelemetryInfo || mobileMenuOpen;
    document.body.style.overflow = isModalOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showTelemetryInfo, mobileMenuOpen]);

  const telemetryModal = showTelemetryInfo ? createPortal(
    <div
      className="modal-overlay"
      onClick={() => setShowTelemetryInfo(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="telemetry-modal-title"
    >
      <div
        className="modal-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400 flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 id="telemetry-modal-title" className="font-bold text-base sm:text-lg text-white leading-snug">
                Architect Telemetry Mode
              </h3>
              <p className="text-xs text-sky-400 mt-0.5">Interactive backend feature</p>
            </div>
          </div>
          <button
            onClick={() => setShowTelemetryInfo(false)}
            className="nav-help-btn flex-shrink-0"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="modal-body">
          <p className="text-sm">
            As a <strong className="text-sky-300 font-semibold">Backend Systems Engineer</strong>, most architecture work happens under the hood. Telemetry mode lets you explore it interactively.
          </p>
          <div className="card-inner text-xs sm:text-sm font-mono leading-relaxed">
            When Telemetry is <span className="text-emerald-400 font-semibold">ON</span>, clicking action buttons opens a live trace showing latency, execution steps, and JSON payloads.
          </div>
        </div>

        <div className="modal-footer">
          <button onClick={() => setShowTelemetryInfo(false)} className="btn-primary text-xs sm:text-sm">
            Got it
          </button>
        </div>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#070b14]/95 backdrop-blur-xl border-b border-white/8 w-full">
        {/* Full-width header container without extra left/right margins */}
        <div className="w-full px-4 sm:px-6 md:px-8 flex items-center justify-between h-16 md:h-18">

          {/* Brand */}
          <a href="#home" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400 group-hover:border-sky-400/50 transition-colors">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-bold text-base text-white group-hover:text-sky-400 transition-colors truncate">
                  Hashim Qureshi
                </span>
                <span className="chip chip-emerald text-[10px] py-0.5 px-2 hidden sm:inline-flex">
                  <span className="status-dot" />
                  Online
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block mt-0.5">Backend Engineer</p>
            </div>
          </a>

          {/* Desktop Webpage Nav — Only visible in webpage/desktop mode (lg:) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <a key={href} href={href} className="nav-link flex items-center gap-1.5">
                {Icon && <Icon className="w-3.5 h-3.5 text-amber-400" />}
                {label}
              </a>
            ))}
          </nav>

          {/* Webpage Toolbar Controls — Desktop mode (lg:) */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <div className="nav-toolbar">
              <button
                onClick={toggleDevTools}
                className={`nav-action-btn ${isDevToolsActive ? 'active' : ''}`}
                title="Toggle Telemetry Mode"
              >
                <Terminal className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-xs font-mono">{isDevToolsActive ? 'Telemetry ON' : 'Telemetry OFF'}</span>
              </button>
              <button
                onClick={toggleTelemetryInfo}
                className="nav-help-btn"
                title="What is Telemetry Mode?"
                aria-label="What is Telemetry Mode?"
              >
                <HelpCircle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Header Controls — ONLY visible on mobile screens (< lg) */}
          <div className="flex lg:hidden items-center gap-2 flex-shrink-0">
            <button
              onClick={toggleDevTools}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold border flex items-center gap-1.5 min-h-[38px] ${
                isDevToolsActive
                  ? 'bg-sky-500/20 border-sky-500/50 text-sky-300'
                  : 'bg-white/5 border-white/10 text-slate-400'
              }`}
              title="Telemetry Toggle"
            >
              <Terminal className="w-3.5 h-3.5 text-sky-400" />
              <span>{isDevToolsActive ? 'ON' : 'OFF'}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/35 text-sky-400 font-semibold text-xs flex items-center gap-1.5 min-h-[38px]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              <span>Menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#070b14] animate-fade-in w-full shadow-2xl">
            <div className="w-full px-5 py-4 space-y-2">
              <p className="text-[10px] font-mono text-sky-400 uppercase tracking-widest px-2 mb-2 font-bold">Navigation Menu</p>
              {navLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-nav-link text-base py-3 px-4 rounded-xl bg-white/3 border border-white/5 hover:bg-white/8 hover:text-sky-400 font-medium"
                >
                  {Icon && <Icon className="w-4.5 h-4.5 text-amber-400" />}
                  {label}
                </a>
              ))}

              <div className="pt-4 mt-4 border-t border-white/10 space-y-2.5">
                <button
                  onClick={() => { toggleDevTools(); setMobileMenuOpen(false); }}
                  className={`w-full py-3 px-4 rounded-xl font-mono text-xs font-semibold flex items-center justify-center gap-2 border min-h-[44px] ${
                    isDevToolsActive
                      ? 'bg-sky-500/20 border-sky-500/50 text-sky-300'
                      : 'bg-white/5 border-white/10 text-slate-300'
                  }`}
                >
                  <Terminal className="w-4 h-4 text-sky-400" />
                  {isDevToolsActive ? 'Telemetry Mode: ON' : 'Telemetry Mode: OFF'}
                </button>
                <button
                  onClick={() => { toggleTelemetryInfo(); setMobileMenuOpen(false); }}
                  className="w-full py-3 px-4 rounded-xl font-mono text-xs text-slate-300 bg-white/5 border border-white/10 flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <HelpCircle className="w-4 h-4" />
                  What is Telemetry Mode?
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {telemetryModal}
    </>
  );
};
