import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Lock } from 'lucide-react';
import { Logo } from './Logo';
import '../styles/navbar.css';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when drawer or modal is open
  useEffect(() => {
    if (mobileOpen || loginModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen, loginModalOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Technology Paths', path: '/technologies' },
    { label: 'Career Transition', path: '/career-transition' },
    { label: 'About', path: '/about' },
  ];

  return (
    <>
      <header className="navbar" role="banner">
        <div className="container">
          <div className="navbar-inner">
            <div className="navbar-brand">
              <Logo variant="horizontal" />
            </div>

            <nav className="navbar-links" aria-label="Main Navigation">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  end={item.path === '/'}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="navbar-actions">
              <button
                type="button"
                onClick={() => setLoginModalOpen(true)}
                className="btn-nav-login"
                aria-label="Portal Login"
              >
                Login
              </button>
              <Link to="/contact" className="btn btn-primary btn-sm">
                <span>Get Started</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>

              <button
                type="button"
                className="mobile-toggle"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setMobileOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
        >
          <div
            className="mobile-menu-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-menu-header">
              <Logo variant="horizontal" />
              <button
                type="button"
                className="btn-outline"
                style={{ padding: '0.4rem', borderRadius: '6px' }}
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <ul className="mobile-menu-links">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                    end={item.path === '/'}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mobile-menu-actions">
              <button
                type="button"
                className="btn btn-outline"
                style={{ width: '100%' }}
                onClick={() => {
                  setMobileOpen(false);
                  setLoginModalOpen(true);
                }}
              >
                <Lock size={16} />
                <span>Portal Login</span>
              </button>
              <Link
                to="/contact"
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={() => setMobileOpen(false)}
              >
                <span>Get Started</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Portal Login Info Modal */}
      {loginModalOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setLoginModalOpen(false)}
          style={{ alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="login-modal-title"
        >
          <div
            className="card"
            style={{ maxWidth: '440px', width: '100%', position: 'relative' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div className="badge badge-secondary">
                <Lock size={12} />
                <span>Internal Portal</span>
              </div>
              <button
                type="button"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}
                onClick={() => setLoginModalOpen(false)}
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
            </div>
            <h3 id="login-modal-title" style={{ marginBottom: '0.75rem' }}>TalentTrivo Operations Portal</h3>
            <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem', color: 'var(--color-text-secondary)' }}>
              The Agent OS and Candidate workspaces are accessible to authenticated counselors and enrolled candidates. If you are starting your transition journey, please register via Get Started.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => setLoginModalOpen(false)}
              >
                Close
              </button>
              <Link
                to="/contact"
                className="btn btn-primary btn-sm"
                onClick={() => setLoginModalOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
