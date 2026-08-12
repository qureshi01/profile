import React, { useState, useEffect } from 'react';
import { Download, ArrowRight, Server, Play } from 'lucide-react';
import { personalInfo, typingTexts } from '../data/portfolioData';
import { TelemetryButton } from './TelemetryButton';

export const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const currentFullText = typingTexts[textIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentFullText.length) {
        setDisplayedText(currentFullText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(currentFullText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === currentFullText.length) {
        setTimeout(() => setIsDeleting(true), 2200);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex(prev => (prev + 1) % typingTexts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  const heroTraceData = {
    title: "Hero Action: Microservice Dispatcher",
    endpoint: "POST /api/v1/architect/simulate-load",
    status: 200,
    latency: "18ms",
    traceId: "tr-hero-sim-9090",
    steps: [
      "1. HTTP POST request dispatched from Hero UI Component",
      "2. NGINX Reverse Proxy routes payload to Gateway :9090",
      "3. Spring Cloud Gateway applies rate-limiting policy (100 req/sec)",
      "4. JWT Bearer token validated via Spring Security filter chain",
      "5. Eureka Discovery locates service instance 'architect-service'",
      "6. Asynchronous Kafka event emitted to topic 'system-telemetry-topic'",
      "7. Response JSON returned with HTTP status 200 OK"
    ],
    payload: {
      message: "Backend Engineering Simulation Executed Successfully",
      architect: personalInfo.name,
      stack: "Java 21, Spring Boot 3, Microservices, Kafka, PostgreSQL",
      throughput: "10,000 req/sec benchmarked",
      security: "JWT + RBAC Enforced"
    }
  };

  return (
    <section id="home" className="section pt-24 md:pt-28 pb-12 md:pb-16 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(600px,100vw)] h-[400px] bg-sky-500/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          <div className="lg:col-span-7 stack-lg">
            <div className="chip chip-cyan max-w-full">
              <span className="status-dot flex-shrink-0" />
              <span className="truncate">Open to Backend Engineering & Systems Architecture roles</span>
            </div>

            <div className="stack-md">
              <h1 className="text-[clamp(2rem,5.5vw,3.75rem)] font-extrabold text-white leading-[1.15]">
                Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed">{personalInfo.role}</p>

              <div className="min-h-[2.75rem] flex items-center pt-1">
                <p className="text-sm sm:text-base font-mono text-sky-400 flex items-start sm:items-center gap-2.5 leading-relaxed">
                  <span className="text-slate-500 mt-0.5 sm:mt-0">&gt;</span>
                  <span className="break-words">{displayedText}</span>
                  <span className="w-0.5 h-5 bg-sky-400 animate-pulse flex-shrink-0 mt-0.5 sm:mt-0" />
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-base md:text-lg leading-[1.8] max-w-2xl">
              {personalInfo.tagline}
            </p>

            <div className="btn-group pt-2">
              <TelemetryButton
                traceData={heroTraceData}
                label="Simulate API Call"
                icon={Play}
                className="w-full sm:w-auto"
              />
              <a href="#contact" className="btn-secondary w-full sm:w-auto">
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#about" className="btn-ghost w-full sm:w-auto font-mono text-sm">
                <Download className="w-4 h-4" />
                <span>View Resume</span>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {[
                { value: personalInfo.experienceYears, label: 'Years Experience', color: 'text-sky-400' },
                { value: '100M+', label: 'Records Scaled', color: 'text-emerald-400' },
                { value: 'Spring Boot', label: 'Microservices', color: 'text-amber-400' },
                { value: 'FHIR / ZATCA', label: 'Healthcare APIs', color: 'text-indigo-400' },
              ].map((stat) => (
                <div key={stat.label} className="stat-card">
                  <span className={`${stat.color} font-bold text-lg sm:text-xl block`}>{stat.value}</span>
                  <span className="text-slate-500 text-xs mt-1 block leading-snug">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px]">
              <div className="absolute -inset-px bg-gradient-to-br from-sky-500/30 via-indigo-500/20 to-amber-500/20 rounded-[26px] blur-sm" />

              <div className="relative glass-card card-pad stack-md">
                <div className="relative overflow-hidden rounded-[18px] bg-slate-950 border border-white/10 aspect-square">
                  <img
                    src="/assets/profile.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-slate-950/95 to-transparent">
                    <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-slate-950/80 backdrop-blur-sm border border-white/10">
                      <div className="flex items-center gap-2 min-w-0">
                        <Server className="w-4 h-4 text-sky-400 flex-shrink-0" />
                        <span className="text-sm font-semibold text-white truncate">{personalInfo.name.split(' ')[0]}</span>
                      </div>
                      <span className="chip chip-emerald text-[10px] py-1 px-2 flex-shrink-0">
                        <span className="status-dot" />
                        Available
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card-inner stack-sm font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-500">
                    <span>System Router</span>
                    <span className="text-sky-400 font-semibold">Port 9090</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center gap-2 p-2.5 rounded-lg bg-slate-950/60">
                      <span className="text-emerald-400 truncate">POST /api/v1/auth/login</span>
                      <span className="text-slate-500 flex-shrink-0">JWT</span>
                    </div>
                    <div className="flex justify-between items-center gap-2 p-2.5 rounded-lg bg-slate-950/60">
                      <span className="text-sky-400 truncate">GET /api/v1/patients/fhir</span>
                      <span className="text-slate-500 flex-shrink-0">HL7</span>
                    </div>
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
