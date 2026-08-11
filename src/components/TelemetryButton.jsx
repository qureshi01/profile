import React from 'react';
import { Terminal, Lock, Play } from 'lucide-react';
import { useArchitecture } from '../context/ArchitectureContext';

export const TelemetryButton = ({ traceData, label, className = "", icon: Icon = Play }) => {
  const { isDevToolsActive, triggerTelemetry } = useArchitecture();

  if (isDevToolsActive) {
    return (
      <button
        onClick={() => triggerTelemetry(traceData)}
        className={`btn-telemetry ${className}`}
        title="Simulate Live Backend Request Trace"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping flex-shrink-0"></span>
        <Icon className="w-4 h-4 flex-shrink-0 text-cyan-400" />
        <span className="whitespace-nowrap">{label}</span>
      </button>
    );
  }

  // When Telemetry is OFF: Keep button fully visible, rendered as a stylish read-only API endpoint badge!
  return (
    <div
      onClick={() => triggerTelemetry(traceData)}
      className={`group relative btn-secondary text-slate-400 font-mono cursor-not-allowed opacity-90 border border-slate-800 bg-slate-950/90 hover:border-slate-700 ${className}`}
      title="Turn ON Telemetry in top bar to discover live request traces!"
    >
      <Lock className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
      <span className="whitespace-nowrap">{label}</span>

      {/* Hover Tooltip Hint */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-max max-w-xs bg-slate-900 border border-slate-700 text-amber-300 text-[11px] p-2.5 rounded-xl shadow-2xl z-50 text-center font-mono pointer-events-none">
        💡 Turn ON Telemetry in top bar to discover live request traces!
      </div>
    </div>
  );
};
