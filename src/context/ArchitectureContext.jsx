import React, { createContext, useContext, useState } from 'react';

const ArchitectureContext = createContext();

export const ArchitectureProvider = ({ children }) => {
  const [isTelemetryOpen, setIsTelemetryOpen] = useState(false);
  const [isDevToolsActive, setIsDevToolsActive] = useState(true);
  const [showTelemetryInfo, setShowTelemetryInfo] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  
  const [currentTrace, setCurrentTrace] = useState({
    title: "System Telemetry Ready",
    endpoint: "GET /api/v1/system/health",
    status: 200,
    latency: "12ms",
    traceId: "tr-init-88392",
    steps: [
      "1. NGINX Reverse Proxy listening on Port 443 (SSL TLS 1.3)",
      "2. Spring Cloud Gateway :9090 received HTTP request",
      "3. JWT Security Filter validated Bearer auth token",
      "4. Eureka Discovery returned healthy node instance IP: 10.0.4.12",
      "5. Spring Boot Controller executed handler method",
      "6. Response payload serialized to JSON [200 OK]"
    ],
    payload: {
      status: "UP",
      service: "hashim-portfolio-backend",
      architecture: "Spring Boot Microservices",
      author: "Hashim Qureshi Chennadan",
      uptime: "99.98%"
    }
  });

  const triggerTelemetry = (traceData) => {
    // If Telemetry mode is OFF, show helpful toast encouraging activation!
    if (!isDevToolsActive) {
      showToast("💡 Telemetry Mode is OFF. Turn ON 'Telemetry' in the top navbar to simulate live backend request traces!");
      return;
    }
    setCurrentTrace(traceData);
    setIsTelemetryOpen(true);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const closeTelemetry = () => {
    setIsTelemetryOpen(false);
  };

  const toggleDevTools = () => {
    setIsDevToolsActive(prev => {
      const nextState = !prev;
      if (!nextState) {
        setIsTelemetryOpen(false);
        showToast("Telemetry Mode OFF. Endpoint triggers now display API documentation mode.");
      } else {
        showToast("⚡ Telemetry Mode ON! Click any action button to inspect live backend request traces.");
      }
      return nextState;
    });
  };

  const toggleTelemetryInfo = () => {
    setShowTelemetryInfo(prev => !prev);
  };

  return (
    <ArchitectureContext.Provider
      value={{
        isTelemetryOpen,
        isDevToolsActive,
        showTelemetryInfo,
        toastMessage,
        currentTrace,
        triggerTelemetry,
        closeTelemetry,
        toggleDevTools,
        toggleTelemetryInfo,
        setShowTelemetryInfo,
        setIsTelemetryOpen
      }}
    >
      {children}
    </ArchitectureContext.Provider>
  );
};

export const useArchitecture = () => useContext(ArchitectureContext);
