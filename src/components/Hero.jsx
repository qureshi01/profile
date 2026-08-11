import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Server, Play, Sparkles } from 'lucide-react';
import { personalInfo, typingTexts } from '../data/portfolioData';
import { useArchitecture } from '../context/ArchitectureContext';
import { TelemetryButton } from './TelemetryButton';

export const Hero = () => {
  const { triggerTelemetry } = useArchitecture();
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [photoPinged, setPhotoPinged] = useState(false);

  useEffect(() => {
    const full = typingTexts[textIndex];
    const speed = isDeleting ? 38 : 78;
    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < full.length) {
        setDisplayedText(full.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(full.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      } else if (!isDeleting && charIndex === full.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex(i => (i + 1) % typingTexts.length);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  const handlePhotoClick = () => {
    setPhotoPinged(true);
    setTimeout(() => setPhotoPinged(false), 2800);
    triggerTelemetry({
      title: "Profile Status Ping",
      endpoint: "GET /api/v1/architect/status",
      status: 200, latency: "5ms",
      traceId: "tr-status-ping",
      steps: [
        "1. Click event captured on portrait",
        "2. Querying backend cluster availability",
        "3. Spring Security — public access verified",
        "4. Returning 200 OK with live system snapshot"
      ],
      payload: {
        name: personalInfo.name, role: personalInfo.role,
        status: "AVAILABLE", stack: ["Java 21","Spring Boot","Kafka","Docker","PostgreSQL"],
        lastPing: new Date().toISOString()
      }
    });
  };

  const heroTrace = {
    title: "Microservice Load Simulator",
    endpoint: "POST /api/v1/architect/simulate-load",
    status: 200, latency: "18ms", traceId: "tr-hero-9090",
    steps: [
      "1. POST dispatched → NGINX Reverse Proxy",
      "2. Spring Cloud Gateway — rate-limit check (100 rps)",
      "3. JWT RS256 token validated",
      "4. Eureka resolves → architect-service instance",
      "5. Kafka event published → system-telemetry-topic",
      "6. HTTP 200 OK returned"
    ],
    payload: {
      architect: personalInfo.name,
      stack: "Java 21 · Spring Boot 3 · Microservices · Kafka · PostgreSQL",
      throughput: "10,000 req/s benchmarked", security: "JWT + RBAC"
    }
  };

  return (
    <section id="home" className="pt-12 pb-20 md:pt-20 md:pb-28">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── Left ── */}
          <div className="lg:col-span-7 space-y-7">

            {/* Status pill */}
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-default)] text-[var(--cyan)] text-[11px] font-mono">
              <span className="dot-sm" style={{width:'6px',height:'6px'}}></span>
              Open to Backend Engineering &amp; Architecture Roles
            </span>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] leading-[1.1] tracking-tight">
                Hi, I'm{' '}
                <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              <div className="flex items-center gap-2 h-9">
                <span className="font-mono text-[var(--text-muted)]">›</span>
                <span className="font-mono text-[var(--cyan)] text-base sm:text-lg">{displayedText}</span>
                <span className="w-[2px] h-5 bg-[var(--cyan)] animate-pulse flex-shrink-0"></span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed max-w-xl">
              {personalInfo.tagline}
            </p>

            {/* Buttons — all same height, same font, same radius */}
            <div className="flex flex-wrap gap-3">
              <TelemetryButton traceData={heroTrace} label="Simulate API Call" icon={Play} />
              <a href="#contact" className="btn btn-secondary">
                Contact Me <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#about" className="btn btn-secondary">
                <Download className="w-4 h-4" /> View Resume
              </a>
            </div>

            {/* Stat badges */}
            <div className="pt-6 border-t border-[var(--border-subtle)] grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
              {[
                { val: personalInfo.experienceYears, label: 'Yrs Experience', color: 'text-[var(--cyan)]' },
                { val: '100M+',  label: 'Records Scaled',  color: 'text-emerald-400' },
                { val: 'Spring', label: 'Boot Microservices', color: 'text-amber-400' },
                { val: 'FHIR',   label: 'ZATCA / HL7',     color: 'text-indigo-400' },
              ].map((s,i) => (
                <div key={i} className="inner-box space-y-1">
                  <span className={`font-bold text-lg block ${s.color}`}>{s.val}</span>
                  <span className="text-[var(--text-muted)] text-[10px] block leading-tight">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right — portrait ── */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[400px]">
              {/* Glow */}
              <div className="absolute -inset-3 bg-gradient-to-br from-cyan-600/20 via-indigo-600/20 to-amber-600/10 rounded-2xl blur-2xl pointer-events-none"></div>

              <div
                onClick={handlePhotoClick}
                className="relative card cursor-pointer group hover:scale-[1.01] transition-transform duration-300 p-5 space-y-4"
                title="Click to ping backend status"
              >
                {/* Portrait */}
                <div className="relative overflow-hidden rounded-lg border border-[var(--border-accent)] aspect-[4/5] shadow-2xl">
                  <img
                    src="/assets/profile.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Ping toast */}
                  {photoPinged && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-emerald-950/95 border border-emerald-500/60 text-emerald-300 text-[11px] font-mono px-2.5 py-1.5 rounded-md shadow-xl animate-bounce">
                      <Sparkles className="w-3.5 h-3.5" /> Ping 200 OK (5ms)
                    </div>
                  )}
                  {/* Name bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#05080f]/95 to-transparent font-mono text-xs flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Server className="w-3.5 h-3.5 text-[var(--cyan)]" />
                      <span className="text-[var(--text-primary)] font-semibold">{personalInfo.name}</span>
                    </div>
                    <span className="flex items-center gap-1 text-emerald-400 font-bold text-[10px] bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded">
                      <span className="dot-sm" style={{width:'5px',height:'5px'}}></span> 200 OK
                    </span>
                  </div>
                </div>

                {/* Live router card */}
                <div className="inner-box font-mono text-[11px] space-y-2">
                  <div className="flex justify-between text-[var(--text-muted)]">
                    <span className="uppercase tracking-widest text-[10px]">System Router</span>
                    <span className="text-[var(--cyan)] font-semibold">:9090</span>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { ep: 'POST /api/v1/auth/login', meta: 'JWT RS256', color: 'text-emerald-400' },
                      { ep: 'GET  /api/v1/patients/fhir', meta: 'HL7 · FHIR', color: 'text-[var(--cyan)]' },
                    ].map((r,i) => (
                      <div key={i} className="flex justify-between items-center bg-[var(--bg-surface)] px-2.5 py-1.5 rounded">
                        <span className={`${r.color} font-semibold truncate mr-2`}>{r.ep}</span>
                        <span className="text-[var(--text-muted)] text-[10px] flex-shrink-0">{r.meta}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
