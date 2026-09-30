import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = 'Ready to explore your next technology career?',
  subtitle = 'Start with your experience. Discover where it can take you next with structured guidance.'
}) => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div
          style={{
            background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-secondary-dark) 100%)',
            borderRadius: '20px',
            padding: '4rem 2rem',
            textAlign: 'center',
            color: 'var(--color-white)',
            boxShadow: '0 20px 50px rgba(37, 65, 120, 0.15)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              maxWidth: '680px',
              margin: '0 auto'
            }}
          >
            <span
              className="badge"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                color: 'var(--color-white)',
                borderColor: 'rgba(255, 255, 255, 0.25)',
                marginBottom: '1.25rem'
              }}
            >
              Take The Next Step
            </span>
            <h2 style={{ color: 'var(--color-white)', marginBottom: '1rem' }}>{title}</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.15rem', marginBottom: '2.5rem' }}>
              {subtitle}
            </p>

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              <Link to="/contact" className="btn btn-lg" style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-primary-dark)' }}>
                <span>Get Started</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="btn btn-outline btn-lg"
                style={{
                  color: 'var(--color-white)',
                  borderColor: 'rgba(255, 255, 255, 0.4)'
                }}
              >
                <MessageSquare size={18} />
                <span>Talk to TalentTrivo</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
