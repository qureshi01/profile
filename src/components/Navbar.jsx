import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Cpu, Menu, X, Activity, Award, HelpCircle, Sparkles, Terminal } from 'lucide-react';
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
    triggerTelemetry,
    showTelemetryInfo,
    toggleTelemetryInfo,
    setShowTelemetryInfo,
    toastMessage
  } = useArchitecture();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const isModalOpen = showTelemetryInfo || mobileMenuOpen;
    document.body.style.overflow = isModalOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showTelemetryInfo, mobileMenuOpen]);

  const handleHealthCheck = () => {
    triggerTelemetry({
      title: "Cluster Health Status",
      endpoint: "GET /actuator/health",
      status: 200,
      latency: "8ms",
      traceId: "tr-health-9090",
      steps: [
        "1. NGINX Gateway: TLS 1.3 Handshake verified",
        "2. Spring Boot Actuator endpoint accessed",
        "3. DiskSpaceHealthIndicator: 450GB Available [UP]",
        "4. DatabaseHealthIndicator: PostgreSQL Connection Pool Active [10/10 UP]",
        "5. KafkaHealthIndicator: Broker cluster connected [UP]",
        "6. Response serialized in 8ms"
      ],
      payload: {
        status: "UP",
        components: {
          db: { status: "UP", details: { database: "PostgreSQL 16", validationQuery: "isValid()" } },
          diskSpace: { status: "UP", total: 1000204984320, free: 483920182272 },
          kafka: { status: "UP", cluster: "production-kafka-us-east" },
          eureka: { status: "UP", registeredInstances: 6 }
        }
      }
    });
  };

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
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400 flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 id="telemetry-modal-title" className="font-bold text-lg text-white leading-snug">
                Architect Telemetry Mode
              </h3>
              <p className="text-xs text-sky-400 mt-1">Interactive backend feature</p>
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
          <p>
            As a <strong className="text-sky-300 font-semibold">Backend Systems Engineer</strong>, most architecture work happens under the hood. Telemetry mode lets you explore it interactively.
          </p>
          <div className="card-inner text-sm font-mono leading-relaxed">
            When Telemetry is <span className="text-emerald-400 font-semibold">ON</span>, clicking action buttons opens a live trace showing latency, execution steps, and JSON payloads — just like monitoring a real microservice.
          </div>
          <ul className="space-y-2.5 text-sm">
            <li className="flex items-start gap-2.5">
              <span className="text-sky-400 mt-0.5">→</span>
              Toggle Telemetry in the navbar to enable interactive traces
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-sky-400 mt-0.5">→</span>
              Click any action button across the site to simulate API calls
            </li>
          </ul>
        </div>

        <div className="modal-footer">
          <button
            onClick={() => setShowTelemetryInfo(false)}
            className="btn-primary w-full sm:w-auto"
          >
            Got it, explore
          </button>
        </div>
      </div>
    </div>,
    document.body
  ) : null;

  const toast = toastMessage ? createPortal(
    <div className="fixed bottom-5 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-[9998] bg-[#101827] border border-sky-500/30 text-white p-4 rounded-xl shadow-xl flex items-start gap-3 animate-fade-in font-mono text-xs">
      <Activity className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5 animate-pulse" />
      <div className="leading-relaxed text-slate-300">{toastMessage}</div>
    </div>,
    document.body
  ) : null;

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#070b14]/90 backdrop-blur-xl border-b border-white/8">
        <div className="container-custom flex items-center justify-between h-16 md:h-[4.5rem]">

          <a href="#home" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400 group-hover:border-sky-400/50 transition-colors">
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
              <p className="text-xs text-slate-500 hidden sm:block">Backend Engineer</p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <a key={href} href={href} className="nav-link flex items-center gap-1.5">
                {Icon && <Icon className="w-3.5 h-3.5 text-amber-400" />}
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2.5 flex-shrink-0">
            <button
              onClick={handleHealthCheck}
              className="nav-health-btn"
              title="Inspect Live System Health"
            >
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span>/actuator/health</span>
            </button>

            <div className="nav-toolbar">
              <button
                onClick={toggleDevTools}
                className={`nav-action-btn ${isDevToolsActive ? 'active' : ''}`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>{isDevToolsActive ? 'Telemetry ON' : 'Telemetry OFF'}</span>
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

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden nav-help-btn"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/8 bg-[#070b14]/98 animate-fade-in">
            <div className="container-custom py-5 space-y-1">
              {navLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-nav-link"
                >
                  {Icon && <Icon className="w-4 h-4 text-amber-400" />}
                  {label}
                </a>
              ))}

              <div className="pt-4 mt-4 border-t border-white/8 space-y-3">
                <button
                  onClick={() => { toggleDevTools(); setMobileMenuOpen(false); }}
                  className={`nav-action-btn w-full justify-center ${isDevToolsActive ? 'active' : ''}`}
                >
                  <Terminal className="w-4 h-4 text-sky-400" />
                  {isDevToolsActive ? 'Telemetry: ON' : 'Telemetry: OFF'}
                </button>
                <button
                  onClick={() => { toggleTelemetryInfo(); setMobileMenuOpen(false); }}
                  className="nav-action-btn w-full justify-center"
                >
                  <HelpCircle className="w-4 h-4" />
                  What is Telemetry?
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {telemetryModal}
      {toast}
    </>
  );
};
