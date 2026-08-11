import React, { useState } from 'react';
import { Terminal, Cpu, Menu, X, Activity, Award, HelpCircle, Info, Sparkles, Server } from 'lucide-react';
import { useArchitecture } from '../context/ArchitectureContext';

export const Navbar = () => {
  const { 
    isDevToolsActive, 
    toggleDevTools, 
    triggerTelemetry, 
    showTelemetryInfo, 
    toggleTelemetryInfo,
    setShowTelemetryInfo 
  } = useArchitecture();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <header className="sticky top-0 z-40 bg-[#080c14]/95 backdrop-blur-2xl border-b border-slate-800 shadow-xl">
      <div className="container-custom flex items-center justify-between h-20">
        
        {/* Brand & System Status */}
        <a href="#home" className="flex items-center gap-3.5 group text-decoration-none">
          <div className="w-11 h-11 rounded-xl bg-cyan-950/90 border border-cyan-500/50 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Hashim Qureshi
              </span>
              <div className="flex items-center gap-1.5 bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-0.5 rounded-full text-[10px] text-emerald-400 font-mono">
                <span className="status-dot"></span>
                <span>ONLINE</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 font-mono">Backend Engineer & Architect</p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#certificates" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-400" />
            Certificates
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </nav>

        {/* Action Controls: System Health, DevTools Switch & Info Button */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={handleHealthCheck}
            className="flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-cyan-400 px-3.5 py-2 rounded-xl text-xs font-mono transition-all shadow-md"
            title="Inspect Live System Health Endpoint"
          >
            <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>GET /actuator/health</span>
          </button>

          {/* Telemetry Switch Group */}
          <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
            <button
              onClick={toggleDevTools}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                isDevToolsActive
                  ? 'bg-cyan-950/80 border-cyan-500/60 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'bg-transparent border-transparent text-slate-500 hover:text-slate-300'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>{isDevToolsActive ? 'Telemetry: ON' : 'Telemetry: OFF'}</span>
            </button>

            <button
              onClick={toggleTelemetryInfo}
              className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
              title="What is Telemetry Mode?"
            >
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2.5 rounded-xl bg-slate-900 border border-slate-800"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/98 border-b border-slate-800 px-6 py-6 space-y-4 shadow-2xl animate-fade-in">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyan-400 py-1.5 font-medium"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyan-400 py-1.5 font-medium"
          >
            Skills
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyan-400 py-1.5 font-medium"
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyan-400 py-1.5 font-medium"
          >
            Projects
          </a>
          <a
            href="#certificates"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyan-400 py-1.5 font-medium flex items-center gap-2"
          >
            <Award className="w-4 h-4 text-amber-400" />
            Certificates
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyan-400 py-1.5 font-medium"
          >
            Contact
          </a>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <button
              onClick={() => {
                handleHealthCheck();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-slate-900 border border-slate-700 text-slate-300 py-2.5 rounded-xl text-xs font-mono"
            >
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              GET /actuator/health
            </button>

            <button
              onClick={() => {
                toggleTelemetryInfo();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 py-2.5 rounded-xl text-xs font-mono"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              Why Telemetry Mode?
            </button>
          </div>
        </div>
      )}

      {/* Telemetry Explanation Modal / Info Banner */}
      {showTelemetryInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-[#0b1329] border border-cyan-500/40 rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
            
            <div className="flex justify-between items-start border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Why "Architect Telemetry Mode"?</h3>
                  <p className="text-xs font-mono text-cyan-400 mt-0.5">Interactive Backend Feature Explanation</p>
                </div>
              </div>

              <button
                onClick={() => setShowTelemetryInfo(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <p>
                As a <strong className="text-cyan-300">Backend Systems Engineer</strong>, most of Hashim's architecture work (Spring Boot Microservices, NGINX proxies, Kafka message queues, JWT security filters, and PostgreSQL queries) happens under the hood.
              </p>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs font-mono text-slate-300">
                <span className="text-cyan-400 font-bold block uppercase tracking-wider text-[11px]">
                  ⚡ How It Works When You Click Buttons:
                </span>
                <p>
                  Clicking buttons like <span className="text-amber-300 font-bold">"Simulate Backend API Call"</span>, <span className="text-emerald-300 font-bold">"Verify Certificate"</span>, or <span className="text-cyan-300 font-bold">"Simulate REST Request"</span> launches an interactive terminal showing:
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-400 pt-1">
                  <li><strong>Live Trace ID & Latency (ms)</strong></li>
                  <li><strong>Step-by-Step Microservice Pipeline Execution</strong></li>
                  <li><strong>Actual Response JSON Payloads</strong></li>
                </ul>
              </div>

              <p className="text-xs text-slate-400">
                This feature gives recruiters and engineering managers a hands-on experience of Hashim's backend systems design thinking.
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowTelemetryInfo(false)}
                className="btn-primary text-xs"
              >
                <span>Got It, Let Me Explore!</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </header>
  );
};
