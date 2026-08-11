import React, { useState } from 'react';
import { Terminal, Cpu, Menu, X, Award, HelpCircle, X as Close } from 'lucide-react';
import { useArchitecture } from '../context/ArchitectureContext';

export const Navbar = () => {
  const {
    isDevToolsActive,
    toggleDevTools,
    showTelemetryInfo,
    toggleTelemetryInfo,
    setShowTelemetryInfo,
    toastMessage
  } = useArchitecture();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about',        label: 'About' },
    { href: '#skills',       label: 'Skills' },
    { href: '#experience',   label: 'Experience' },
    { href: '#projects',     label: 'Projects' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#contact',      label: 'Contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#05080f]/95 backdrop-blur-xl border-b border-[var(--border-subtle)]">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">

            {/* Brand */}
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-accent)] flex items-center justify-center">
                <Cpu className="w-4 h-4 text-[var(--cyan)]" />
              </div>
              <div className="leading-none">
                <span className="font-bold text-sm text-[var(--text-primary)] group-hover:text-[var(--cyan-lt)] transition-colors tracking-tight">
                  Hashim Qureshi
                </span>
                <span className="block text-[10px] font-mono text-[var(--text-muted)] mt-0.5">
                  Backend Engineer
                </span>
              </div>
              <span className="flex items-center gap-1 ml-1 px-1.5 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                <span className="dot-sm" style={{width:'6px',height:'6px'}}></span>
                ONLINE
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 text-[0.8125rem] font-medium text-[var(--text-secondary)]">
              {navLinks.map(l => (
                <a key={l.href} href={l.href}
                  className="hover:text-[var(--cyan-lt)] transition-colors flex items-center gap-1">
                  {l.href === '#certificates' && <Award className="w-3.5 h-3.5 text-amber-400" />}
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Telemetry Toggle */}
            <div className="hidden lg:flex items-center gap-2">
              <div className="flex items-center gap-1 bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-md p-1">
                <button
                  onClick={toggleDevTools}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono font-semibold transition-all ${
                    isDevToolsActive
                      ? 'bg-[var(--bg-hover)] border border-[var(--border-accent)] text-[var(--cyan-lt)] shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  {isDevToolsActive ? 'Telemetry ON' : 'Telemetry OFF'}
                </button>
                <button
                  onClick={toggleTelemetryInfo}
                  className="p-1.5 text-[var(--text-muted)] hover:text-[var(--cyan)] transition-colors"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-default)] text-[var(--text-secondary)]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]">
            <div className="container-custom py-4 space-y-1">
              {navLinks.map(l => (
                <a key={l.href} href={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] text-sm font-medium transition-colors">
                  {l.href === '#certificates' && <Award className="w-4 h-4 text-amber-400" />}
                  {l.label}
                </a>
              ))}
              <div className="pt-3 border-t border-[var(--border-subtle)]">
                <button
                  onClick={() => { toggleDevTools(); setMobileMenuOpen(false); }}
                  className="w-full btn btn-secondary text-xs justify-center"
                >
                  <Terminal className="w-3.5 h-3.5 text-[var(--cyan)]" />
                  {isDevToolsActive ? 'Telemetry: ON' : 'Telemetry: OFF'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Telemetry Info Modal */}
        {showTelemetryInfo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
            <div className="bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-xl max-w-lg w-full p-6 shadow-2xl space-y-5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg text-[var(--text-primary)]">What is Telemetry Mode?</h3>
                  <p className="text-xs font-mono text-[var(--cyan)] mt-0.5">Backend Architecture Explorer</p>
                </div>
                <button onClick={() => setShowTelemetryInfo(false)} className="text-[var(--text-muted)] hover:text-[var(--text-primary)] p-1 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="border-t border-[var(--border-subtle)] pt-4 space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                <p>As a <strong className="text-[var(--text-primary)]">Backend Systems Engineer</strong>, most of Hashim's work happens behind APIs — Spring Boot microservices, Kafka pipelines, JWT security chains, and PostgreSQL queries.</p>
                <div className="inner-box font-mono text-xs space-y-1.5">
                  <p className="text-[var(--cyan)] font-bold uppercase tracking-wider text-[10px]">⚡ How It Works</p>
                  <p className="text-[var(--text-secondary)]">Turn Telemetry <span className="text-emerald-400 font-bold">ON</span>, then click any endpoint button to see a live execution trace — request flow, latency, payload, and step-by-step pipeline simulation.</p>
                </div>
              </div>
              <div className="flex justify-end pt-1">
                <button onClick={() => setShowTelemetryInfo(false)} className="btn btn-primary text-xs">
                  Got it
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 animate-fade-in">
          <div className="bg-[var(--bg-elevated)] border border-[var(--border-accent)] text-[var(--text-primary)] font-mono text-xs px-4 py-3 rounded-lg shadow-2xl flex items-center gap-2.5 max-w-sm">
            <Terminal className="w-4 h-4 text-[var(--cyan)] flex-shrink-0" />
            <span className="text-[var(--text-secondary)]">{toastMessage}</span>
          </div>
        </div>
      )}
    </>
  );
};
