import React from 'react';
import { CTASection } from '../components/CTASection';
import { CareerJourney } from '../components/CareerJourney';
import { HumanPlusAI } from '../components/HumanPlusAI';
import { SEO } from '../components/SEO';
import {
  Layers,
  FileCheck,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

export const CareerTransition: React.FC = () => {
  return (
    <main id="main-content">
      <SEO
        title="Career Transition for Experienced Professionals"
        description="Reposition your software engineering equity for modern technology careers without starting over as a beginner."
      />
      {/* Header */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">Strategic Repositioning</span>
            <h1>The Career Transition Model for Experienced Professionals</h1>
            <p>
              Transitioning technology domains after 5 to 15+ years in the industry is not about starting from scratch. It is about strategically repositioning your accumulated engineering equity.
            </p>
          </div>
        </div>
      </section>

      {/* The Core Truth */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <span className="badge badge-secondary" style={{ marginBottom: '1rem' }}>
                Engineering Capital
              </span>
              <h2>You Are Not A Beginner. Stop Being Treated Like One.</h2>
              <p style={{ marginBottom: '1.25rem' }}>
                Generic online tutorials, self-paced certificates, and bootcamps are designed for university graduates with zero workplace context. They spend weeks teaching loop syntax and basic variables while ignoring system architecture, concurrency, and real-world failure modes.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                As an experienced professional, your real value lies in:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle size={18} color="var(--color-primary)" />
                  <span style={{ fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>
                    Production debugging under high-pressure outages
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle size={18} color="var(--color-primary)" />
                  <span style={{ fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>
                    Data schema design, consistency models, and transaction management
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle size={18} color="var(--color-primary)" />
                  <span style={{ fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>
                    Cross-functional stakeholder communication and agile delivery
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle size={18} color="var(--color-primary)" />
                  <span style={{ fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>
                    Security hygiene, release gates, and software maintenance lifecycles
                  </span>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: '2.5rem', backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-primary-light)' }}>
              <div style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
                <Layers size={36} />
              </div>
              <h3 style={{ marginBottom: '1rem' }}>The TalentTrivo Bridge Principle</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                Rather than discarding what you know, we map the exact conceptual bridges between your legacy environment and modern technology frameworks.
              </p>
              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                  <strong>Example:</strong> An engineer who handled enterprise Oracle schemas already understands ACID properties, indexing, and joins; transitioning to Cloud Data Warehouses (Snowflake/BigQuery) requires learning distributed columnar execution—not database fundamentals.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Journey */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-secondary">Visual Workflow</span>
            <h2>How Your Transition Evolves Step by Step</h2>
            <p>From initial diagnostic evaluation to landing the role in your new target technology.</p>
          </div>

          <CareerJourney />
        </div>
      </section>

      {/* Truthful Resume Positioning */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
            <div className="card" style={{ padding: '2.5rem' }}>
              <div style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>
                <FileCheck size={36} />
              </div>
              <h3 style={{ marginBottom: '0.75rem' }}>Truthful Resume Repositioning</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                TalentTrivo holds an unwavering policy: <strong>AI and counselors must never invent fake employers, fabricated projects, or bogus certifications.</strong>
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>
                Instead, we rewrite bullet points to accurately emphasize architectural patterns, distributed systems principles, and backend scale that recruiters and engineering managers evaluate for modern roles.
              </p>
            </div>

            <div>
              <span className="badge badge-primary" style={{ marginBottom: '1rem' }}>
                Interview Credibility
              </span>
              <h2>Mastering Transition Storytelling</h2>
              <p style={{ marginBottom: '1.25rem' }}>
                When interviewing for a modern technology role, interviewers will ask: <em>&quot;Why are you shifting from your existing technology after all these years?&quot;</em>
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                We work with you to craft a thoughtful, confident narrative that frames your shift as an intentional architectural evolution rather than an impulse.
              </p>
              <div className="badge badge-secondary">
                <HelpCircle size={14} />
                <span>Framed by real engineering counselors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI + Human */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">Operating Philosophy</span>
            <h2>AI-Powered. Human-Guided.</h2>
            <p>
              Our counselors use cutting-edge AI as an analytical workbench while maintaining complete human ownership over every recommendation.
            </p>
          </div>
          <HumanPlusAI />
        </div>
      </section>

      <CTASection
        title="Ready to evaluate your career transition horizon?"
        subtitle="Schedule a consultation with a TalentTrivo counselor to map out your genuine strengths."
      />
    </main>
  );
};
