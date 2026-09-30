import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';
import '../styles/footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo variant="horizontal" dark={true} />
            <p>
              AI-powered career transition and talent operations platform for experienced professionals.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#4bae4f', fontSize: '0.85rem' }}>
              <ShieldCheck size={16} />
              <span>Human Guidance + AI Operations</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Platform</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/how-it-works">How It Works</Link>
              </li>
              <li>
                <Link to="/technologies">Technology Paths</Link>
              </li>
              <li>
                <Link to="/career-transition">Career Transition</Link>
              </li>
              <li>
                <Link to="/about">About TalentTrivo</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Technology Paths</h4>
            <ul className="footer-links">
              <li>
                <Link to="/technologies#salesforce-to-cloud-data">Enterprise to Cloud</Link>
              </li>
              <li>
                <Link to="/technologies#java-to-cloud-microservices">Modern Backend</Link>
              </li>
              <li>
                <Link to="/technologies#qa-to-devops-automation">DevOps & Automation</Link>
              </li>
              <li>
                <Link to="/technologies#frontend-to-fullstack">Full-Stack Modernization</Link>
              </li>
              <li>
                <Link to="/technologies#sysadmin-to-cloud-platform">Cloud & SRE Operations</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Get in Touch</h4>
            <p style={{ fontSize: '0.9rem', color: '#9c98a3', marginBottom: '1rem' }}>
              Ready to explore your next technology transition? Connect with a TalentTrivo counselor.
            </p>
            <div className="footer-contact-item">
              <Mail size={16} style={{ color: 'var(--color-primary-light)', marginTop: '3px' }} />
              <span>support@talenttrivo.com</span>
            </div>
            <Link to="/contact" className="btn btn-outline-primary btn-sm" style={{ marginTop: '0.5rem', display: 'inline-flex' }}>
              Connect with Counselors
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} TalentTrivo. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/about" style={{ color: '#7b7780', fontSize: '0.85rem' }}>
              Ethics & Data Policy
            </Link>
            <Link to="/contact" style={{ color: '#7b7780', fontSize: '0.85rem' }}>
              Inquire
            </Link>
          </div>
        </div>

        <div className="footer-disclaimer">
          <strong>Notice:</strong> TalentTrivo is a career transition advisory and talent operations platform. We provide systematic profile restructuring, skill bridge roadmaps, and dedicated counselor support. We do not make misleading claims, guaranteed salary jumps, or automated placement guarantees. All pathway scenarios are customized to individual backgrounds.
        </div>
      </div>
    </footer>
  );
};
