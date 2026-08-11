import React, { useState, useEffect } from 'react';
import { Download, ArrowRight, Server, Play, Sparkles } from 'lucide-react';
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

  // Typing animation effect inspired by reference site
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

  const handlePhotoClick = () => {
    setPhotoPinged(true);
    setTimeout(() => setPhotoPinged(false), 3000);

    triggerTelemetry({
      title: "Interactive Portrait Status Inspection",
      endpoint: "GET /api/v1/architect/profile-status",
      status: 200,
      latency: "6ms",
      traceId: "tr-photo-ping-2024",
      steps: [
        "1. Interactive click event captured on Architect Portrait Component",
        "2. Querying live backend availability & microservice cluster",
        "3. Spring Security verified public recruiter access",
        "4. Returned 200 OK with live systems telemetry status"
      ],
      payload: {
        developer: personalInfo.name,
        role: personalInfo.role,
        status: "ACTIVE_AND_AVAILABLE",
        coreStack: ["Java 21", "Spring Boot", "Microservices", "Kafka", "Docker", "PostgreSQL"],
        lastPingTime: new Date().toISOString()
      }
    });
  };

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
    <section id="home" className="relative pt-8 pb-16 md:pt-14 md:pb-24 my-10 sm:my-16 overflow-hidden">
      
      {/* Background Microservice Grid Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Hero Copy & Dynamic Typing */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Architectural Status Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-md max-w-full">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping flex-shrink-0"></span>
              <span className="truncate">Available for Backend Engineering Roles</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
              </h1>

              {/* Typing Animation Section */}
              <div className="min-h-[46px] mt-3 flex items-center">
                <p className="text-base sm:text-2xl font-mono text-cyan-400 flex items-center gap-2">
                  <span className="text-slate-500">&gt;</span>
                  <span className="break-words">{displayedText}</span>
                  <span className="w-2.5 h-6 bg-cyan-400 animate-pulse flex-shrink-0"></span>
                </p>
              </div>
            </div>

            {/* Bio Summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              {personalInfo.tagline}
            </p>

            {/* Action Buttons: Clean Single-Line Alignment on Desktop */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              
              <TelemetryButton
                traceData={heroTraceData}
                label="Simulate API Call"
                icon={Play}
              />

              <a href="#contact" className="btn-secondary">
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="#about" className="btn-secondary">
                <Download className="w-4 h-4" />
                <span>View Resume</span>
              </a>

            </div>

            {/* Technical Key Badges Grid */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-xs font-mono">
              <div className="p-4 rounded-2xl bg-[#0c1424] border border-slate-800 shadow-md">
                <span className="text-cyan-400 font-bold text-xl sm:text-2xl block">{personalInfo.experienceYears}</span>
                <span className="text-slate-400 mt-1 block">Years Exp</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#0c1424] border border-slate-800 shadow-md">
                <span className="text-emerald-400 font-bold text-xl sm:text-2xl block">100M+</span>
                <span className="text-slate-400 mt-1 block">Records Scaled</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#0c1424] border border-slate-800 shadow-md">
                <span className="text-amber-400 font-bold text-xl sm:text-2xl block">Spring Boot</span>
                <span className="text-slate-400 mt-1 block">Microservices</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#0c1424] border border-slate-800 shadow-md">
                <span className="text-indigo-400 font-bold text-xl sm:text-2xl block">FHIR / ZATCA</span>
                <span className="text-slate-400 mt-1 block">Healthcare APIs</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Portrait Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-lg">
              
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-indigo-500 to-amber-500 rounded-[38px] blur-2xl opacity-60 group-hover:opacity-100 transition duration-1000"></div>

              <div
                onClick={handlePhotoClick}
                className="relative glass-card p-6 sm:p-7 rounded-[36px] space-y-5 border-2 border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.35)] cursor-pointer group hover:scale-[1.01] transition-transform duration-300"
                title="Click portrait to ping backend status!"
              >
                
                <div className="relative overflow-hidden rounded-3xl bg-slate-950 border-2 border-cyan-500/50 h-[380px] sm:h-[480px] w-full shadow-2xl flex items-center justify-center">
                  
                  <img
                    src="/assets/profile.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                  />

                  {photoPinged && (
                    <div className="absolute top-4 right-4 bg-emerald-950/90 border border-emerald-500/60 text-emerald-300 text-xs font-mono px-3 py-1.5 rounded-xl shadow-2xl animate-bounce flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                      <span>Ping 200 OK (6ms)</span>
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-cyan-500/30 text-xs font-mono flex items-center justify-between text-slate-300 shadow-2xl">
                    <div className="flex items-center gap-2.5">
                      <Server className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="font-bold text-white text-sm truncate">{personalInfo.name}</span>
                    </div>
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5 bg-emerald-950/90 px-2.5 py-1 rounded-lg border border-emerald-500/40 text-xs flex-shrink-0">
                      <span className="status-dot"></span>
                      <span>200 OK</span>
                    </span>
                  </div>

                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/95 border border-slate-800 text-xs font-mono space-y-2.5 shadow-inner">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="text-slate-500 font-semibold">LIVE SYSTEM ROUTER</span>
                    <span className="text-cyan-400 font-bold">Port 9090</span>
                  </div>
                  <div className="space-y-2 text-slate-300">
                    <div className="flex justify-between items-center bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-emerald-400 font-semibold truncate">POST /api/v1/auth/login</span>
                      <span className="text-slate-400 text-[11px] flex-shrink-0 pl-2">JWT RS256</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-cyan-400 font-semibold truncate">GET /api/v1/patients/fhir</span>
                      <span className="text-slate-400 text-[11px] flex-shrink-0 pl-2">HL7 / FHIR</span>
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
