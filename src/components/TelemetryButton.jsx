import React from 'react';
import { Lock, Play } from 'lucide-react';
import { useArchitecture } from '../context/ArchitectureContext';

export const TelemetryButton = ({ traceData, label, className = "", icon: Icon = Play }) => {
  const { isDevToolsActive, triggerTelemetry } = useArchitecture();

  if (isDevToolsActive) {
    return (
      <button
        onClick={() => triggerTelemetry(traceData)}
        className={`btn btn-telemetry ${className}`}
        title="Simulate Live Backend Request Trace"
      >
        <span className="dot-sm"></span>
        <Icon className="w-3.5 h-3.5 flex-shrink-0" />
        <span>{label}</span>
      </button>
    );
  }

  return (
    <div
      className={`group relative btn btn-secondary text-[var(--text-muted)] cursor-not-allowed ${className}`}
      onClick={() => triggerTelemetry(traceData)}
      title="Enable Telemetry to run live traces"
    >
      <Lock className="w-3.5 h-3.5 flex-shrink-0" />
      <span>{label}</span>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-50 pointer-events-none">
        <div className="bg-[#0d1424] border border-[var(--border-default)] text-amber-300 text-[11px] font-mono px-3 py-2 rounded-md shadow-xl whitespace-nowrap">
          💡 Enable Telemetry in the navbar to explore live traces
        </div>
      </div>
    </div>
  );
};
