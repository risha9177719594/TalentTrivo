import React from 'react';
import { CTASection } from '../components/CTASection';
import { SEO } from '../components/SEO';
import {
  ShieldCheck,
  Target,
  Sparkles,
  Users,
  Lock,
  HeartHandshake,
  Compass
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <main id="main-content">
      <SEO
        title="About Us — Mission, Ethics & Operating Philosophy"
        description="Learn about TalentTrivo, our collaboration with KrutrimKarta, and our commitment to truthful, counselor-backed career transitions."
      />
      {/* Header */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">Our Mission & Values</span>
            <h1>About TalentTrivo</h1>
            <p>
              An AI-powered career transition and talent operations platform built exclusively for experienced technology professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Origin */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <span className="badge badge-secondary" style={{ marginBottom: '1rem' }}>
                Why We Exist
              </span>
              <h2>The Untapped Potential of Experienced Engineers</h2>
              <p style={{ marginBottom: '1.25rem' }}>
                The technology industry is constantly evolving, with new paradigms emerging in cloud systems, data engineering, distributed architectures, and AI. Yet, millions of skilled professionals with rich enterprise experience find themselves pigeonholed into older technologies.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                TalentTrivo was founded on a simple conviction: <strong>software engineering maturity never expires.</strong> When seasoned professionals receive strategic guidance, truthful resume positioning, and structured preparation, they make exceptional leaders and contributors in modern stacks.
              </p>
              <p>
                In collaboration with <strong>KrutrimKarta</strong>, TalentTrivo is building the technology infrastructure to turn what was once a high-friction, manual counseling workflow into an intelligent, data-driven career operations platform.
              </p>
            </div>

            <div className="card" style={{ padding: '2.5rem', backgroundColor: 'var(--color-surface)' }}>
              <div style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
                <Sparkles size={36} />
              </div>
              <h3 style={{ marginBottom: '0.75rem' }}>Our Operating Principle</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-primary)', fontStyle: 'italic', marginBottom: '1.25rem' }}>
                &ldquo;Digitize the agent workflow → capture structured data → apply AI → automate repetitive work.&rdquo;
              </p>
              <p style={{ fontSize: '0.925rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                We believe career choices are deeply human decisions. We reject reckless automation that replaces human empathy with unaccountable algorithms. We build AI tools to empower our counselors, giving candidates the best of both worlds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles & Integrity */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-secondary">Guiding Ethics</span>
            <h2>Our Core Commitments</h2>
            <p>We hold ourselves and our platform to uncompromising standards of transparency and integrity.</p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
                <ShieldCheck size={28} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Radical Truth in Resumes</h3>
              <p style={{ fontSize: '0.925rem' }}>
                We never fabricate candidate credentials, skills, years of experience, or past employers. We earn interview invitations through strategic clarity and genuine engineering substance.
              </p>
            </div>

            <div className="card">
              <div style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>
                <Target size={28} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>No Speculative Promises</h3>
              <p style={{ fontSize: '0.925rem' }}>
                We refuse to advertise inflated placement rates, bogus average salary jumps, or guaranteed hiring gimmicks. We provide honest market assessments and dedicated execution support.
              </p>
            </div>

            <div className="card">
              <div style={{ color: 'var(--color-tertiary-dark)', marginBottom: '1rem' }}>
                <Lock size={28} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Strict Data Confidentiality</h3>
              <p style={{ fontSize: '0.925rem' }}>
                Your current employment details, contact records, and transition intentions are handled with strict privacy protocols and never published openly on public boards.
              </p>
            </div>

            <div className="card">
              <div style={{ color: 'var(--color-secondary-dark)', marginBottom: '1rem' }}>
                <Users size={28} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Counselor Accountability</h3>
              <p style={{ fontSize: '0.925rem' }}>
                Every enrolled candidate is paired with a dedicated TalentTrivo counselor who actively tracks progress, provides feedback, and coordinates interview preparation.
              </p>
            </div>

            <div className="card">
              <div style={{ color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>
                <HeartHandshake size={28} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Lifelong Engineering Respect</h3>
              <p style={{ fontSize: '0.925rem' }}>
                We respect your tenure and project accomplishments. Our roadmaps celebrate what you have already achieved while preparing you for what comes next.
              </p>
            </div>

            <div className="card">
              <div style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
                <Compass size={28} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Pragmatic Technology Advice</h3>
              <p style={{ fontSize: '0.925rem' }}>
                We guide candidates toward established, resilient technology ecosystems that offer long-term career growth, not short-lived trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to learn more about our approach?"
        subtitle="Speak with a TalentTrivo counselor to discuss your background and upcoming transition opportunities."
      />
    </main>
  );
};
