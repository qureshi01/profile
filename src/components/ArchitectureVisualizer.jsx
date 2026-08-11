import React, { useState } from 'react';
import { X, Server, Shield, Database, Cpu, Activity, CheckCircle2, ArrowRight, Copy, Check, Terminal } from 'lucide-react';
import { useArchitecture } from '../context/ArchitectureContext';

export const ArchitectureVisualizer = () => {
  const { isTelemetryOpen, closeTelemetry, currentTrace } = useArchitecture();
  const [copied, setCopied] = useState(false);

  if (!isTelemetryOpen) return null;

  const handleCopyPayload = () => {
    navigator.clipboard.writeText(JSON.stringify(currentTrace.payload || {}, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-2xl bg-[#090d16] border-l border-cyan-500/30 text-slate-200 h-full flex flex-col shadow-[0_0_50px_rgba(6,182,212,0.25)] overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-mono text-sm font-bold text-white tracking-wide">
                  {currentTrace.title || "Backend Request Telemetry Trace"}
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-950 text-emerald-400 border border-emerald-500/40">
                  {currentTrace.status || 200} OK
                </span>
              </div>
              <p className="text-xs font-mono text-cyan-400 mt-0.5 flex items-center gap-2">
                <span>{currentTrace.endpoint}</span>
                <span className="text-slate-500">•</span>
                <span className="text-amber-400">{currentTrace.latency || "24ms"}</span>
              </p>
            </div>
          </div>

          <button
            onClick={closeTelemetry}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Metadata Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 text-xs font-mono">
            <div>
              <span className="text-slate-500 block text-[10px]">TRACE ID</span>
              <span className="text-cyan-300 font-medium">{currentTrace.traceId || "tr-998231"}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">AUTH MODE</span>
              <span className="text-emerald-400 font-medium">JWT Bearer (RS256)</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">SERVICE ROUTE</span>
              <span className="text-amber-300 font-medium">Spring Cloud API Gateway</span>
            </div>
          </div>

          {/* End-to-End Architectural Microservice Flow Visualizer */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-400" />
              Microservice Request Flow Execution Pipeline
            </h4>
            
            <div className="space-y-2 font-mono text-xs">
              {currentTrace.steps && currentTrace.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
                >
                  <div className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/40 flex items-center justify-center flex-shrink-0 text-[10px] font-bold mt-0.5">
                    {idx + 1}
                  </div>
                  <div className="text-slate-300 flex-1 leading-relaxed">
                    {step}
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                </div>
              ))}
            </div>
          </div>

          {/* JSON Payload Response Inspector */}
          {currentTrace.payload && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Database className="w-4 h-4 text-emerald-400" />
                  API Response JSON Payload
                </h4>
                <button
                  onClick={handleCopyPayload}
                  className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Payload</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-cyan-300 font-mono text-xs overflow-x-auto leading-relaxed shadow-inner">
                <code>{JSON.stringify(currentTrace.payload, null, 2)}</code>
              </pre>
            </div>
          )}

          {/* Architecture Stack Topology Node Badges */}
          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-xs font-mono text-slate-300 space-y-2">
            <span className="text-cyan-400 font-bold block text-[11px] tracking-wide uppercase">
              ⚡ Verified System Topology Components
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300 text-[11px]">
                NGINX Proxy :443
              </span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300 text-[11px]">
                Spring Gateway :9090
              </span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300 text-[11px]">
                Eureka Registry
              </span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300 text-[11px]">
                Kafka Event Bus
              </span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300 text-[11px]">
                PostgreSQL DB
              </span>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-between items-center text-xs font-mono text-slate-500">
          <span>Backend Engineer Portfolio Telemetry</span>
          <button
            onClick={closeTelemetry}
            className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 rounded-lg transition-colors"
          >
            Close Terminal
          </button>
        </div>

      </div>
    </div>
  );
};
