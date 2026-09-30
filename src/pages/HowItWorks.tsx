import React from 'react';
import { ProcessSteps } from '../components/ProcessSteps';
import { CTASection } from '../components/CTASection';
import { SEO } from '../components/SEO';
import { FAQS } from '../data/websiteData';
import { ShieldCheck, Users, HelpCircle, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <main id="main-content">
      <SEO
        title="How It Works — The 7-Step Transition Methodology"
        description="Explore the structured 7-step career transition process designed for experienced engineers shifting into modern technology roles."
      />
      {/* Header */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '1rem' }}>
            <span className="badge badge-primary">Structured Process</span>
            <h1>How TalentTrivo Works</h1>
            <p>
              A systematic, counselor-guided methodology that turns your accumulated software engineering experience into modern technology career opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* 7-Step Deep Dive */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* Partnership Model */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-secondary">Counselor Partnership</span>
            <h2>How We Partner With You Throughout The Journey</h2>
            <p>
              We treat career transition as an engineering problem: diagnostic discovery, systematic gap closure, strategic repositioning, and disciplined execution.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
                <Users size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>1. Diagnostic Intake</h3>
              <p style={{ fontSize: '0.95rem' }}>
                We analyze your past roles, tech stacks, architectural decisions, and genuine strengths to determine which target horizons offer the highest leverage.
              </p>
            </div>

            <div className="card">
              <div style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>
                <ShieldCheck size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>2. Honest Alignment</h3>
              <p style={{ fontSize: '0.95rem' }}>
                We tell you what is realistic and what is not. We never recommend transitions into hype bubbles that have no long-term enterprise sustainability.
              </p>
            </div>

            <div className="card">
              <div style={{ color: 'var(--color-tertiary-dark)', marginBottom: '1rem' }}>
                <CheckCircle2 size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>3. Continuous Job Support</h3>
              <p style={{ fontSize: '0.95rem' }}>
                Our counselors help review job descriptions, tailor truthful resumes for specific roles, and conduct architecture debriefs throughout interview rounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">
              <HelpCircle size={14} />
              <span>Questions & Answers</span>
            </span>
            <h2>Frequently Asked Questions</h2>
            <p>Clear, direct answers regarding our operating model, expectations, and policies.</p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {FAQS.map((faq, i) => (
              <div key={i} className="card" style={{ padding: '1.75rem' }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.65rem', color: 'var(--color-text-primary)' }}>
                  {faq.q}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to walk through your transition roadmap?"
        subtitle="Speak directly with a TalentTrivo counselor to assess your current engineering background."
      />
    </main>
  );
};
