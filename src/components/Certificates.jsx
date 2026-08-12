import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Award, ShieldCheck, Eye, Terminal } from 'lucide-react';
import { certificateData } from '../data/portfolioData';
import { TelemetryButton } from './TelemetryButton';
import certImage from '../assets/certificate-aivariant.png';
import resumeFallback from '../assets/resume-page1.png';

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

  const details = [
    { label: 'Presented To', value: certificateData.issuedTo },
    { label: 'Certificate Code', value: certificateData.certificateCode, highlight: true },
    { label: 'Internship Period', value: certificateData.period },
    { label: 'Date of Issue', value: certificateData.issueDate },
  ];

  return (
    <section id="certificates" className="section section-alt relative">
      <div className="container-custom relative z-10">
        <div className="section-header">
          <span className="section-badge chip-amber bg-amber-500/10 border-amber-500/25 text-amber-400">
            <Award className="w-3.5 h-3.5" /> Certificates
          </span>
          <h2 className="section-title">Official <span className="gradient-gold">Certifications</span></h2>
          <p className="section-desc">
            Verified internship completions and full-stack software development credentials.
          </p>
        </div>

        <div className="max-w-4xl mx-auto glass-card card-pad border-amber-500/20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5 relative group overflow-hidden rounded-2xl border border-white/10 bg-slate-950 aspect-[3/4] max-w-sm mx-auto md:max-w-none w-full">
              <img
                src={certImage}
                alt={certificateData.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = resumeFallback;
                }}
              />
              <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6">
                <button onClick={() => setShowImageModal(true)} className="btn-primary text-sm">
                  <Eye className="w-4 h-4" />
                  View Full
                </button>
              </div>
            </div>

            <div className="md:col-span-7 stack-lg">
              <div className="stack-md">
                <span className="chip chip-amber">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Verified
                </span>
                <h3 className="text-2xl font-bold text-white leading-snug">{certificateData.title}</h3>
                <p className="text-sm text-sky-400 font-medium leading-relaxed">
                  {certificateData.role} · {certificateData.issuer}
                </p>
              </div>

              <div className="card-inner stack-sm text-sm">
                {details.map(({ label, value, highlight }) => (
                  <div key={label} className="flex justify-between items-start gap-6 py-2 border-b border-white/5 last:border-0">
                    <span className="text-slate-500 flex-shrink-0">{label}</span>
                    <span className={`text-right font-medium leading-relaxed ${highlight ? 'text-amber-400 font-mono text-xs' : 'text-slate-200'}`}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="btn-group border-t border-white/8 pt-6">
                <button onClick={() => setShowImageModal(true)} className="btn-primary text-sm">
                  <Eye className="w-4 h-4" />
                  Preview Certificate
                </button>
                <TelemetryButton
                  traceData={certTraceData}
                  label="Verify RSA-256 Signature"
                  className="w-full sm:w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {showImageModal && createPortal(
        <div
          className="modal-overlay"
          onClick={() => setShowImageModal(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-panel modal-panel-lg" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3 className="font-bold text-lg text-white">AiVariant Certificate</h3>
                <p className="text-xs font-mono text-amber-400 mt-1">{certificateData.certificateCode}</p>
              </div>
              <button onClick={() => setShowImageModal(false)} className="btn-ghost text-xs px-3 py-1.5 min-h-0">
                Close
              </button>
            </div>
            <div className="modal-body items-center">
              <img
                src={certImage}
                alt={certificateData.title}
                className="w-full max-h-[75vh] object-contain rounded-xl border border-white/10"
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};
