import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  Search,
  CheckCircle,
  Cpu,
  FileSearch,
  GitCompare,
  Briefcase,
  Edit3,
  BookOpen,
  MessageSquare,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { ProcessSteps } from '../components/ProcessSteps';
import { FeatureCard } from '../components/FeatureCard';
import { TechnologyCard } from '../components/TechnologyCard';
import { CareerJourney } from '../components/CareerJourney';
import { HumanPlusAI } from '../components/HumanPlusAI';
import { LeadForm } from '../components/LeadForm';
import { CTASection } from '../components/CTASection';
import { SEO } from '../components/SEO';
import {
  WHY_TALENTTRIVO,
  EXAMPLE_TRANSITIONS,
  AI_CAPABILITIES,
  PROBLEMS_FACED
} from '../data/websiteData';
import '../styles/hero.css';

const aiIcons = {
  FileSearch,
  GitCompare,
  Briefcase,
  Edit3,
  BookOpen,
  MessageSquare
};

export const Home: React.FC = () => {
  return (
    <main id="main-content">
      <SEO
        title="AI-Powered Career Transition for Experienced Professionals"
        description="Transform your experience. Transition into your next technology career with human guidance and AI-powered intelligence."
      />
      {/* Hero Section */}
      <section className="hero-section" aria-labelledby="hero-heading">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge badge-primary">
                <Sparkles size={14} />
                <span>AI-Powered Career Transition & Talent Operations</span>
              </span>
            </div>

            <h1 id="hero-heading" className="hero-title">
              Transform your experience.{' '}
              <span className="gradient-text">Transition into your next technology career.</span>
            </h1>

            <p className="hero-subtitle">
              TalentTrivo helps experienced professionals navigate technology transitions with expert guidance, AI-powered insights, personalized career planning, and dedicated job support.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>Get Started</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/technologies" className="btn btn-outline btn-lg">
                <span>Explore Technology Paths</span>
                <ChevronRight size={18} />
              </Link>
            </div>

            {/* Stepper visual: Experience → Transition → Skills → Opportunities */}
            <div className="hero-stepper-bar" role="navigation" aria-label="Career transition progression">
              <div className="stepper-item">
                <span className="badge badge-secondary" style={{ padding: '0.2rem 0.5rem' }}>1</span>
                <span>Experience</span>
              </div>
              <ChevronRight size={14} className="stepper-arrow" />
              <div className="stepper-item">
                <span className="badge badge-primary" style={{ padding: '0.2rem 0.5rem' }}>2</span>
                <span>Transition</span>
              </div>
              <ChevronRight size={14} className="stepper-arrow" />
              <div className="stepper-item">
                <span className="badge badge-secondary" style={{ padding: '0.2rem 0.5rem' }}>3</span>
                <span>Skills</span>
              </div>
              <ChevronRight size={14} className="stepper-arrow" />
              <div className="stepper-item">
                <span className="badge badge-tertiary" style={{ padding: '0.2rem 0.5rem' }}>4</span>
                <span>Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)' }} aria-labelledby="problem-heading">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-secondary">The Transition Dilemma</span>
            <h2 id="problem-heading">Why Technology Transitions Are Tough for Experienced Engineers</h2>
            <p>
              Having 5, 10, or 15+ years of engineering experience is an immense asset. Yet, shifting into emerging stacks often feels fraught with uncertainty and friction.
            </p>
          </div>

          <div className="grid-3">
            {PROBLEMS_FACED.map((prob) => (
              <FeatureCard
                key={prob.title}
                title={prob.title}
                description={prob.description}
                iconName={prob.iconName}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TalentTrivo Approach Section */}
      <section className="section" aria-labelledby="approach-heading">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">Structured Methodology</span>
            <h2 id="approach-heading">The TalentTrivo Approach</h2>
            <p>
              We deconstruct career transitions into a systematic 7-stage pathway, pairing intelligent analysis with human accountability.
            </p>
          </div>

          <ProcessSteps />
        </div>
      </section>

      {/* Why TalentTrivo */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)' }} aria-labelledby="why-heading">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-secondary">Core Foundations</span>
            <h2 id="why-heading">Why Experienced Engineers Choose TalentTrivo</h2>
            <p>
              Not a training bootcamp. Not a passive job board. A structured career operations platform built around your accumulated equity.
            </p>
          </div>

          <div className="grid-4">
            {WHY_TALENTTRIVO.map((item) => (
              <FeatureCard
                key={item.title}
                title={item.title}
                description={item.description}
                iconName={item.iconName}
                highlight={item.highlight}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Transitions (Example Paths) */}
      <section className="section" aria-labelledby="tech-heading">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">Illustrative Pathways</span>
            <h2 id="tech-heading">Example Technology Transition Horizons</h2>
            <p>
              See how existing engineering and enterprise backgrounds realistically map into high-demand cloud, data, and systems roles.
            </p>
          </div>

          <div className="grid-2">
            {EXAMPLE_TRANSITIONS.slice(0, 4).map((path) => (
              <TechnologyCard key={path.id} path={path} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/technologies" className="btn btn-outline-primary btn-lg">
              <span>View All Example Transition Paths</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* AI-Powered Career Intelligence */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface-dark)', color: 'var(--color-white)' }} aria-labelledby="ai-heading">
        <div className="container">
          <div className="section-header">
            <span className="badge" style={{ backgroundColor: 'rgba(99, 49, 129, 0.4)', color: 'var(--color-text-dark-primary)', borderColor: 'rgba(99, 49, 129, 0.6)' }}>
              Next-Gen Tooling
            </span>
            <h2 id="ai-heading" style={{ color: 'var(--color-white)' }}>
              AI-Powered Career Intelligence
            </h2>
            <p style={{ color: 'var(--color-text-dark-muted)' }}>
              We harness purpose-built AI to analyze, classify, and synthesize career transitions with high precision—always reviewed by human counselors.
            </p>
          </div>

          <div className="grid-3">
            {AI_CAPABILITIES.map((cap) => {
              const IconComp = aiIcons[cap.iconName as keyof typeof aiIcons] || Cpu;
              return (
                <div
                  key={cap.title}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--color-border-dark)',
                    borderRadius: '16px',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(99, 49, 129, 0.3)',
                      color: 'var(--color-text-dark-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <IconComp size={22} />
                  </div>
                  <h3 style={{ color: 'var(--color-white)', fontSize: '1.2rem', marginBottom: '0.4rem' }}>
                    {cap.title}
                  </h3>
                  <div style={{ color: 'var(--color-tertiary)', fontSize: '0.825rem', fontFamily: 'var(--font-mono)', marginBottom: '0.85rem' }}>
                    {cap.tagline}
                  </div>
                  <p style={{ color: 'var(--color-text-dark-secondary)', fontSize: '0.925rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    {cap.description}
                  </p>
                  <div style={{ marginTop: 'auto', borderTop: '1px solid var(--color-border-dark)', paddingTop: '0.85rem' }}>
                    {cap.highlights.map((h) => (
                      <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-text-dark-muted)', fontSize: '0.8rem', marginBottom: '0.35rem' }}>
                        <Zap size={12} color="var(--color-primary-light)" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Career Journey Visual Section */}
      <section className="section" aria-labelledby="journey-heading">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-secondary">End-to-End Progression</span>
            <h2 id="journey-heading">Your Transition Journey At A Glance</h2>
            <p>
              From auditing your existing technical foundation to landing and thriving in your next role.
            </p>
          </div>

          <CareerJourney />
        </div>
      </section>

      {/* Human + AI Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)' }} aria-labelledby="human-ai-heading">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">Operating Philosophy</span>
            <h2 id="human-ai-heading">AI-Powered. Human-Guided.</h2>
            <p>
              AI can analyze information, identify patterns, and accelerate preparation. TalentTrivo counselors provide the strategic guidance, empathy, and market judgment needed to execute your transition.
            </p>
          </div>

          <HumanPlusAI />
        </div>
      </section>

      {/* Lead Capture Form Section */}
      <section className="section" id="lead-capture-section" aria-labelledby="lead-heading">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="badge badge-secondary" style={{ marginBottom: '1rem' }}>
                Begin Your Assessment
              </span>
              <h2 id="lead-heading" style={{ marginBottom: '1.25rem' }}>
                Take the First Step Toward Your Next Technology Role
              </h2>
              <p style={{ marginBottom: '1.5rem' }}>
                Tell us about your background and where you want to go. A TalentTrivo counselor will review your experience and schedule an initial discovery discussion.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <ShieldCheck size={20} color="var(--color-tertiary-dark)" />
                  <span style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>
                    No speculative placement promises or inflated claims
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle size={20} color="var(--color-primary)" />
                  <span style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>
                    Tailored review of your genuine transferable technical skills
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Search size={20} color="var(--color-secondary)" />
                  <span style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>
                    Exploration of viable target stacks based on current hiring realities
                  </span>
                </div>
              </div>
            </div>

            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </main>
  );
};
