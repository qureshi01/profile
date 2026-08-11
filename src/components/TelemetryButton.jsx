import React from 'react';
import { Terminal, Lock } from 'lucide-react';
import { useArchitecture } from '../context/ArchitectureContext';

export const TelemetryButton = ({ traceData, label, className = "", icon: Icon = Terminal }) => {
  const { isDevToolsActive, triggerTelemetry } = useArchitecture();

  if (isDevToolsActive) {
    return (
      <button
        onClick={() => triggerTelemetry(traceData)}
        className={`btn-telemetry font-bold min-h-[48px] ${className}`}
        title="Simulate Live Backend Request Trace"
      >
        <Icon className="w-4 h-4 flex-shrink-0 text-emerald-400" />
        <span>{label}</span>
      </button>
    );
  }

  // When Telemetry is OFF: Keep button fully visible, rendered in read-only API documentation mode!
  return (
    <div
      onClick={() => triggerTelemetry(traceData)}
      className={`group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-slate-950/90 border border-slate-800 text-slate-400 text-xs sm:text-sm font-mono cursor-not-allowed opacity-90 hover:border-slate-700 transition-all min-h-[48px] ${className}`}
      title="Turn ON Telemetry in top bar to discover live request traces!"
    >
      <Lock className="w-4 h-4 text-slate-500 flex-shrink-0" />
      <span>{label}</span>

      {/* Hover Tooltip Hint */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-max max-w-xs bg-slate-900 border border-slate-700 text-amber-300 text-[11px] p-3 rounded-2xl shadow-2xl z-50 text-center font-mono pointer-events-none">
        💡 Turn ON Telemetry in top bar to discover live request traces!
      </div>
    </div>
  );
};
