import React from 'react';
import { Terminal, Lock } from 'lucide-react';
import { useArchitecture } from '../context/ArchitectureContext';

export const TelemetryButton = ({ traceData, label, className = "", icon: Icon = Terminal }) => {
  const { isDevToolsActive, triggerTelemetry } = useArchitecture();

  if (isDevToolsActive) {
    return (
      <button
        onClick={() => triggerTelemetry(traceData)}
        className={`btn-telemetry font-semibold ${className}`}
        title="Simulate live backend request trace"
      >
        <Icon className="w-4 h-4 flex-shrink-0" />
        <span>{label}</span>
      </button>
    );
  }

  return (
    <div
      onClick={() => triggerTelemetry(traceData)}
      className={`group relative inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[14px] bg-white/3 border border-white/8 text-slate-500 text-sm font-mono cursor-not-allowed min-h-[48px] ${className}`}
      title="Enable Telemetry in the navbar to explore live traces"
    >
      <Lock className="w-4 h-4 flex-shrink-0" />
      <span>{label}</span>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-max max-w-[240px] bg-[#101827] border border-white/10 text-amber-300 text-[11px] p-2.5 rounded-xl shadow-xl z-50 text-center pointer-events-none">
        Enable Telemetry in the navbar to explore live traces
      </div>
    </div>
  );
};
