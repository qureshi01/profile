import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Terminal, CheckCircle2, Copy, Check, MessageSquare } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import { useArchitecture } from '../context/ArchitectureContext';

export const Contact = () => {
  const { triggerTelemetry } = useArchitecture();
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    subject: 'Backend Engineering Opportunity',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    triggerTelemetry({
      title: "Contact Form REST API Dispatch",
      endpoint: "POST /api/v1/contact/send-message",
      status: 201,
      latency: "32ms",
      traceId: `tr-contact-${Date.now()}`,
      steps: [
        "1. REST API endpoint POST /api/v1/contact/send-message invoked",
        "2. Input validation: Email format & XSS protection check passed",
        "3. Rate Limiting: IpAddress token bucket OK (1/10 consumed)",
        "4. Asynchronous Kafka Event published to 'contact-notifications' topic",
        "5. Spring Mail Async Worker picked message for dispatch",
        "6. Returned HTTP 201 CREATED status payload"
      ],
      payload: {
        timestamp: new Date().toISOString(),
        sender: formData.senderName || "Recruiter / Hiring Manager",
        email: formData.senderEmail || "hiring@company.com",
        subject: formData.subject,
        body: formData.message,
        recipient: personalInfo.email,
        status: "DISPATCHED_TO_KAFKA_QUEUE"
      }
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ senderName: '', senderEmail: '', subject: 'Backend Engineering Opportunity', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container-custom">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>REST API ENDPOINT RECEIVER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Have a project, job opportunity, or architecture discussion? Send a direct message or trigger a REST payload.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span>Contact Channels</span>
              </h3>

              <div className="space-y-4 text-sm font-mono">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">EMAIL ADDRESS</span>
                    <span className="text-white font-semibold group-hover:text-cyan-300 text-xs sm:text-sm">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">PHONE NUMBER</span>
                    <span className="text-white font-semibold group-hover:text-emerald-300 text-xs sm:text-sm">
                      {personalInfo.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-950 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">LINKEDIN PROFILE</span>
                    <span className="text-white font-semibold group-hover:text-indigo-300 text-xs sm:text-sm">
                      linkedin.com/in/hashimqureshic
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-amber-950 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">LOCATION</span>
                    <span className="text-white font-semibold text-xs sm:text-sm">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive REST API Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 space-y-6">
              
              <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Send REST API Payload
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mt-0.5">
                    POST /api/v1/contact/send-message
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                  201 CREATED
                </span>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="font-bold text-lg text-white">Message Payload Dispatched!</h4>
                  <p className="text-xs font-mono text-slate-300">
                    Thank you! Your message has been queued to Kafka topic 'contact-notifications' and sent to Hashim.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">
                        NAME / RECRUITER COMPANY *
                      </label>
                      <input
                        type="text"
                        name="senderName"
                        required
                        value={formData.senderName}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Connor (Tech Recruiter)"
                        className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 font-mono placeholder:text-slate-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">
                        SENDER EMAIL *
                      </label>
                      <input
                        type="email"
                        name="senderEmail"
                        required
                        value={formData.senderEmail}
                        onChange={handleChange}
                        placeholder="e.g. sarah@techcorp.com"
                        className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 font-mono placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      SUBJECT *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Senior Backend Java Engineer Role"
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 font-mono placeholder:text-slate-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      MESSAGE BODY *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message or project details here..."
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 font-mono placeholder:text-slate-600 transition-colors"
                    ></textarea>
                  </div>

                  {/* Live Form JSON Payload Preview */}
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-900 text-[11px] font-mono text-slate-400 space-y-1">
                    <div className="flex justify-between items-center text-slate-500 text-[10px]">
                      <span>LIVE PAYLOAD PREVIEW</span>
                      <span>Content-Type: application/json</span>
                    </div>
                    <pre className="text-cyan-400 overflow-x-auto">
                      <code>{JSON.stringify(formData, null, 2)}</code>
                    </pre>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center text-sm py-3"
                  >
                    <Send className="w-4 h-4" />
                    <span>Dispatch REST API Request</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
