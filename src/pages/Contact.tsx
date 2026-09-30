import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { LeadForm } from '../components/LeadForm';
import { SEO } from '../components/SEO';
import { Mail, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialTargetTech = searchParams.get('target') || '';

  return (
    <main id="main-content">
      <SEO
        title="Get Started — Connect with a Counselor"
        description="Submit your career transition inquiry and connect with a TalentTrivo counselor for a structured diagnostic assessment."
      />
      {/* Header */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '1rem' }}>
            <span className="badge badge-primary">Get Started</span>
            <h1>Begin Your Career Transition</h1>
            <p>
              Submit your current engineering details below. A dedicated TalentTrivo counselor will review your experience and connect with you to discuss realistic pathway options.
            </p>
          </div>
        </div>
      </section>

      {/* Form & Support Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '3.5rem', alignItems: 'flex-start' }}>
            <div>
              <LeadForm initialTargetTech={initialTargetTech} />
            </div>

            <div>
              <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem' }}>What Happens Next?</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--color-primary)', marginTop: '2px' }}>
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>1. Diagnostic Review</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', margin: 0 }}>
                        A counselor examines your current stack, experience depth, and chosen target technology.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--color-secondary)', marginTop: '2px' }}>
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>2. 1-on-1 Consultation</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', margin: 0 }}>
                        We schedule an initial discussion to explore market alignment, expectations, and transition feasibility.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--color-tertiary-dark)', marginTop: '2px' }}>
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>3. Structured Onboarding</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', margin: 0 }}>
                        Upon mutual agreement, you enroll as an active candidate with a customized milestone roadmap.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card" style={{ padding: '2rem', backgroundColor: 'var(--color-surface)' }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem' }}>Counselor Desk</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <Mail size={18} color="var(--color-primary)" />
                  <span style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>support@talenttrivo.com</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.5, margin: 0 }}>
                  Counselor desk responses are typically provided within 24 business hours. Current candidate records remain confidential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
