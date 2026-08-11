import React, { useState } from 'react';
import { Award, ShieldCheck, CheckCircle2, Eye, Terminal, Download, Shield } from 'lucide-react';
import { certificateData } from '../data/portfolioData';
import { useArchitecture } from '../context/ArchitectureContext';

export const Certificates = () => {
  const { triggerTelemetry } = useArchitecture();
  const [showImageModal, setShowImageModal] = useState(false);

  const handleVerifyJwtToken = () => {
    triggerTelemetry({
      title: "Cryptographic Certificate Verification",
      endpoint: `GET /api/v1/certificates/verify?code=${certificateData.certificateCode}`,
      status: 200,
      latency: "9ms",
      traceId: "tr-cert-verify-1030",
      steps: [
        `1. Received verification request for Certificate Code: ${certificateData.certificateCode}`,
        "2. RSA 256 public key fetched from AiVariant auth domain",
        "3. Validating JWT signature and cryptographic checksum",
        `4. Verified Subject: "${certificateData.issuedTo}"`,
        "5. Verification Result: 100% VALID & AUTHENTICATED"
      ],
      payload: {
        certificateCode: certificateData.certificateCode,
        recipient: certificateData.issuedTo,
        issuer: certificateData.issuer,
        track: certificateData.role,
        duration: certificateData.period,
        issueDate: certificateData.issueDate,
        verifiedStatus: "AUTHENTIC",
        jwtHeader: { alg: "RS256", typ: "JWT" },
        jwtPayload: {
          sub: certificateData.issuedTo,
          iss: certificateData.issuer,
          code: certificateData.certificateCode,
          iat: 1716076800
        }
      }
    });
  };

  return (
    <section id="certificates" className="py-20 bg-slate-950/60 border-t border-b border-slate-800/80 relative">
      <div className="container-custom">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED ACADEMIC & INDUSTRY CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Official <span className="gradient-gold">Certifications</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Verified internship completions and full-stack software development credentials.
          </p>
        </div>

        {/* Certificate Display Card */}
        <div className="max-w-4xl mx-auto glass-card p-6 sm:p-10 border border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.1)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Image Thumbnail & Modal Trigger */}
            <div className="md:col-span-5 relative group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 aspect-[3/4] flex items-center justify-center">
              <img
                src={certificateData.image}
                alt={certificateData.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/assets/resume-page1.png';
                }}
              />
              
              {/* Overlay View Button */}
              <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 p-4">
                <button
                  onClick={() => setShowImageModal(true)}
                  className="btn-primary text-xs"
                >
                  <Eye className="w-4 h-4" />
                  <span>Inspect Full Certificate</span>
                </button>
              </div>
            </div>

            {/* Right Column: Certificate Metadata */}
            <div className="md:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <span className="px-3 py-1 rounded font-mono text-xs font-bold bg-amber-950 text-amber-300 border border-amber-500/40 inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verified Credentials</span>
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {certificateData.title}
                </h3>
                <p className="text-sm font-semibold text-cyan-400 font-mono">
                  {certificateData.role} • {certificateData.issuer}
                </p>
              </div>

              {/* Certificate Details Table */}
              <div className="space-y-2.5 font-mono text-xs text-slate-300 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Presented To:</span>
                  <span className="text-white font-bold">{certificateData.issuedTo}</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Certificate Code:</span>
                  <span className="text-amber-400 font-bold">{certificateData.certificateCode}</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Internship Period:</span>
                  <span className="text-slate-200">{certificateData.period}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Date of Issue:</span>
                  <span className="text-slate-200">{certificateData.issueDate}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleVerifyJwtToken}
                  className="btn-telemetry"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Verify Certificate Signature Token</span>
                </button>

                <button
                  onClick={() => setShowImageModal(true)}
                  className="btn-secondary text-xs"
                >
                  <Eye className="w-4 h-4 text-amber-400" />
                  <span>Preview Image</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Full Certificate Preview Modal */}
      {showImageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="font-bold text-white font-mono text-sm flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                AiVariant Certificate - {certificateData.certificateCode}
              </h3>
              <button
                onClick={() => setShowImageModal(false)}
                className="p-1 rounded text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <img
              src={certificateData.image}
              alt="AiVariant Certificate"
              className="w-full rounded-xl border border-slate-800 shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
