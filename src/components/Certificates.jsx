import React, { useState } from 'react';
import { Award, ShieldCheck, Eye, Terminal } from 'lucide-react';
import { certificateData } from '../data/portfolioData';
import { TelemetryButton } from './TelemetryButton';

export const Certificates = () => {
  const [showImageModal, setShowImageModal] = useState(false);

  const certTraceData = {
    title: "Cryptographic Certificate Verification",
    endpoint: `GET /api/v1/certificates/verify?code=${certificateData.certificateCode}`,
    status: 200, latency: "9ms", traceId: "tr-cert-verify-1030",
    steps: [
      `1. Received verification request: Code ${certificateData.certificateCode}`,
      "2. RSA 256 public key fetched from AiVariant auth domain",
      "3. Validating JWT signature and cryptographic checksum",
      `4. Verified Subject: "${certificateData.issuedTo}"`,
      "5. Verification Result: 100% VALID & AUTHENTICATED"
    ],
    payload: {
      certificateCode: certificateData.certificateCode,
      recipient: certificateData.issuedTo, issuer: certificateData.issuer,
      track: certificateData.role, duration: certificateData.period,
      issueDate: certificateData.issueDate, verifiedStatus: "AUTHENTIC",
      jwtHeader: { alg: "RS256", typ: "JWT" }
    }
  };

  return (
    <section id="certificates" className="section-sep py-24 sm:py-32">
      <div className="container-custom">

        {/* Section heading */}
        <div className="section-title">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-amber-950/60 border border-amber-500/30 text-amber-400 text-[11px] font-mono mb-6">
            <Award className="w-3.5 h-3.5" /> VERIFIED CREDENTIALS
          </span>
          <h2>Official <span className="gradient-gold">Certifications</span></h2>
          <p>Verified internship completions and full-stack software development credentials.</p>
        </div>

        {/* Certificate card */}
        <div className="max-w-5xl mx-auto card border-amber-500/20 shadow-[0_0_40px_rgba(245,158,11,0.07)] space-y-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Image */}
            <div className="lg:col-span-5">
              <div className="relative group overflow-hidden rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] aspect-[3/4]">
                <img
                  src={certificateData.image} alt={certificateData.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={e => { e.target.onerror = null; e.target.src = '/assets/resume-page1.png'; }}
                />
                <div className="absolute inset-0 bg-[var(--bg-base)]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button onClick={() => setShowImageModal(true)} className="btn btn-primary text-xs">
                    <Eye className="w-3.5 h-3.5" /> View Full Certificate
                  </button>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <span className="tag tag-amber">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Verified Credentials
                </span>
                <h3 className="font-extrabold text-[var(--text-primary)] text-2xl sm:text-3xl leading-snug mt-2">
                  {certificateData.title}
                </h3>
                <p className="text-sm font-mono text-[var(--cyan)]">
                  {certificateData.role} · {certificateData.issuer}
                </p>
              </div>

              {/* Details table */}
              <div className="inner-box space-y-2.5 font-mono text-xs">
                {[
                  { label: 'Presented To',      val: certificateData.issuedTo,         color: 'text-[var(--text-primary)]' },
                  { label: 'Certificate Code',  val: certificateData.certificateCode,  color: 'text-amber-400' },
                  { label: 'Internship Period', val: certificateData.period,            color: 'text-[var(--text-secondary)]' },
                  { label: 'Date of Issue',     val: certificateData.issueDate,        color: 'text-[var(--text-secondary)]' },
                ].map((row, i, arr) => (
                  <div key={i} className={`flex justify-between items-center gap-2 ${i < arr.length - 1 ? 'border-b border-[var(--border-subtle)] pb-2' : ''}`}>
                    <span className="text-[var(--text-muted)]">{row.label}:</span>
                    <span className={`font-bold ${row.color} text-right`}>{row.val}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <button onClick={() => setShowImageModal(true)} className="btn btn-primary text-xs">
                  <Eye className="w-3.5 h-3.5" /> Preview Certificate
                </button>
                <TelemetryButton traceData={certTraceData} label="Verify RSA-256 JWT" icon={Terminal} />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Modal */}
      {showImageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-fade-in">
          <div className="bg-[var(--bg-elevated)] border border-amber-500/30 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-4 shadow-2xl">
            <div className="flex justify-between items-center border-b border-[var(--border-subtle)] pb-4">
              <h3 className="font-bold text-[var(--text-primary)] font-mono flex items-center gap-2 text-sm">
                <Award className="w-4 h-4 text-amber-400" /> AiVariant Certificate — {certificateData.certificateCode}
              </h3>
              <button onClick={() => setShowImageModal(false)} className="btn btn-secondary text-xs px-3 py-1.5 min-h-0">✕ Close</button>
            </div>
            <img src={certificateData.image} alt="AiVariant Certificate"
              className="w-full rounded-lg border border-[var(--border-default)] shadow-2xl" />
          </div>
        </div>
      )}
    </section>
  );
};
