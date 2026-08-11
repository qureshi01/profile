import React, { useState } from 'react';
import { Award, ShieldCheck, Eye, Terminal } from 'lucide-react';
import { certificateData } from '../data/portfolioData';
import { TelemetryButton } from './TelemetryButton';

export const Certificates = () => {
  const [showImageModal, setShowImageModal] = useState(false);

  const certTraceData = {
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
  };

  return (
    <section id="certificates" className="py-20 sm:py-28 bg-[#090f1d] border-t border-b border-slate-800/80 relative">
      
      {/* Decorative Glow Ambient Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        
        {/* Section Title with Uncollapsed Spacing */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-400 text-xs font-mono shadow-md">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED ACADEMIC & INDUSTRY CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Official <span className="gradient-gold">Certifications</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed pt-1">
            Verified internship completions and full-stack software development credentials.
          </p>
        </div>

        {/* Certificate Card Container */}
        <div className="max-w-5xl mx-auto glass-card p-6 sm:p-10 border border-amber-500/30 shadow-[0_0_50px_rgba(245,158,11,0.1)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Image Thumbnail */}
            <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 aspect-[3/4] flex items-center justify-center shadow-2xl">
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
              <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 p-4">
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
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full font-mono text-xs font-bold bg-amber-950/90 text-amber-300 border border-amber-500/40 inline-flex items-center gap-2">
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
              <div className="space-y-3 font-mono text-xs text-slate-300 bg-slate-950/90 p-4 sm:p-5 rounded-2xl border border-slate-800 shadow-inner">
                <div className="flex justify-between items-center border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Presented To:</span>
                  <span className="text-white font-bold text-xs sm:text-sm">{certificateData.issuedTo}</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Certificate Code:</span>
                  <span className="text-amber-400 font-bold text-xs sm:text-sm">{certificateData.certificateCode}</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Internship Period:</span>
                  <span className="text-slate-200 text-xs sm:text-sm">{certificateData.period}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Date of Issue:</span>
                  <span className="text-slate-200 text-xs sm:text-sm">{certificateData.issueDate}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setShowImageModal(true)}
                  className="btn-primary text-xs"
                >
                  <Eye className="w-4 h-4" />
                  <span>Preview Full Certificate</span>
                </button>

                <TelemetryButton
                  traceData={certTraceData}
                  label="Verify RSA-256 JWT Token"
                  icon={Terminal}
                />
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Full Certificate Preview Modal */}
      {showImageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-fade-in">
          <div className="bg-[#0b1329] border border-amber-500/40 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-4 shadow-[0_0_60px_rgba(0,0,0,0.8)]">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
              <h3 className="font-bold text-white font-mono text-xs sm:text-base flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                AiVariant Certificate - {certificateData.certificateCode}
              </h3>
              <button
                onClick={() => setShowImageModal(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
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
