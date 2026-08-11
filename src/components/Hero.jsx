import React, { useState, useEffect } from 'react';
import { Terminal, Download, ArrowRight, Server, Play } from 'lucide-react';
import { personalInfo, typingTexts } from '../data/portfolioData';
import { useArchitecture } from '../context/ArchitectureContext';

export const Hero = () => {
  const { triggerTelemetry, isDevToolsActive } = useArchitecture();
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

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

  const handleSimulateHeroAction = () => {
    triggerTelemetry({
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
    });
  };

  return (
    <section id="home" className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden my-6">
      
      {/* Background Microservice Grid Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Hero Copy & Dynamic Typing */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Architectural Status Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-[0_0_20px_rgba(6,182,212,0.25)]">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span>Available for Backend Engineering & Systems Architecture Roles</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
              </h1>

              {/* Typing Animation Section */}
              <div className="min-h-[56px] mt-4 flex items-center">
                <p className="text-lg sm:text-2xl font-mono text-cyan-400 flex items-center gap-2">
                  <span className="text-slate-500">&gt;</span>
                  <span>{displayedText}</span>
                  <span className="w-2.5 h-6 bg-cyan-400 animate-pulse"></span>
                </p>
              </div>
            </div>

            {/* Bio Summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {personalInfo.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              
              {/* Simulate Architecture Event */}
              {isDevToolsActive && (
                <button
                  onClick={handleSimulateHeroAction}
                  className="btn-primary"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Simulate Backend API Call</span>
                </button>
              )}

              {/* Contact Me */}
              <a href="#contact" className="btn-secondary">
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Resume Quick Access */}
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-400 font-mono text-xs px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>View Full Resume Data</span>
              </a>
            </div>

            {/* Technical Key Badges Grid */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-4 rounded-2xl bg-[#0e1626] border border-slate-800 shadow-lg">
                <span className="text-cyan-400 font-bold text-2xl block">{personalInfo.experienceYears}</span>
                <span className="text-slate-400 mt-1 block">Years Industry Exp</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#0e1626] border border-slate-800 shadow-lg">
                <span className="text-emerald-400 font-bold text-2xl block">100M+</span>
                <span className="text-slate-400 mt-1 block">Records Scaled</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#0e1626] border border-slate-800 shadow-lg">
                <span className="text-amber-400 font-bold text-2xl block">Spring Boot</span>
                <span className="text-slate-400 mt-1 block">Microservices</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#0e1626] border border-slate-800 shadow-lg">
                <span className="text-indigo-400 font-bold text-2xl block">FHIR / ZATCA</span>
                <span className="text-slate-400 mt-1 block">Healthcare APIs</span>
              </div>
            </div>

          </div>

          {/* Right Column: User's Portrait Display */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Decorative Ambient Glowing Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-amber-500 rounded-[34px] blur-xl opacity-40 group-hover:opacity-100 transition duration-1000"></div>

              <div className="relative glass-card p-7 rounded-[32px] space-y-6 border border-slate-700/80 shadow-2xl">
                
                {/* User Portrait Container */}
                <div className="relative overflow-hidden rounded-2xl bg-slate-950 border border-cyan-500/40 aspect-square shadow-2xl flex items-center justify-center group">
                  
                  <img
                    src="/assets/profile.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Floating Microservice Live Router Tag */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 text-xs font-mono flex items-center justify-between text-slate-300 shadow-xl">
                    <div className="flex items-center gap-2.5">
                      <Server className="w-4 h-4 text-cyan-400" />
                      <span className="font-semibold text-white">{personalInfo.name}</span>
                    </div>
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30 text-[11px]">
                      <span className="status-dot"></span>
                      <span>200 OK</span>
                    </span>
                  </div>

                </div>

                {/* Microservice Endpoints Router Card */}
                <div className="p-4.5 rounded-2xl bg-slate-950/90 border border-slate-800 text-xs font-mono space-y-3 shadow-inner">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="text-slate-500">LIVE SYSTEM ROUTER</span>
                    <span className="text-cyan-400 font-bold">Port 9090</span>
                  </div>
                  <div className="space-y-2 text-slate-300">
                    <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                      <span className="text-emerald-400 font-semibold">POST /api/v1/auth/login</span>
                      <span className="text-slate-400 text-[11px]">JWT RS256</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                      <span className="text-cyan-400 font-semibold">GET /api/v1/patients/fhir</span>
                      <span className="text-slate-400 text-[11px]">HL7 / FHIR</span>
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
