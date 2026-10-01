import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Lock } from 'lucide-react';
import { Logo } from './Logo';
import '../styles/navbar.css';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const location = useLocation();

  const drawerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const drawerCloseBtnRef = useRef<HTMLButtonElement>(null);
  const modalCloseBtnRef = useRef<HTMLButtonElement>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);

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

  // Handle Escape key and Focus Trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (mobileOpen) {
          setMobileOpen(false);
          lastActiveElementRef.current?.focus();
        }
        if (loginModalOpen) {
          setLoginModalOpen(false);
          lastActiveElementRef.current?.focus();
        }
        return;
      }

      // Focus trapping
      if (e.key === 'Tab') {
        const container = mobileOpen ? drawerRef.current : loginModalOpen ? modalRef.current : null;
        if (!container) return;

        const focusableElements = container.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (mobileOpen || loginModalOpen) {
      lastActiveElementRef.current = document.activeElement as HTMLElement;
      window.addEventListener('keydown', handleKeyDown);

      // Auto focus first interactive element
      setTimeout(() => {
        if (mobileOpen && drawerCloseBtnRef.current) {
          drawerCloseBtnRef.current.focus();
        } else if (loginModalOpen && modalCloseBtnRef.current) {
          modalCloseBtnRef.current.focus();
        }
      }, 50);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
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
          onClick={() => {
            setMobileOpen(false);
            lastActiveElementRef.current?.focus();
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
        >
          <div
            ref={drawerRef}
            className="mobile-menu-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-menu-header">
              <Logo variant="horizontal" />
              <button
                ref={drawerCloseBtnRef}
                type="button"
                className="btn-outline"
                style={{ padding: '0.4rem', borderRadius: '6px' }}
                onClick={() => {
                  setMobileOpen(false);
                  lastActiveElementRef.current?.focus();
                }}
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
          onClick={() => {
            setLoginModalOpen(false);
            lastActiveElementRef.current?.focus();
          }}
          style={{ alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="login-modal-title"
        >
          <div
            ref={modalRef}
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
                ref={modalCloseBtnRef}
                type="button"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}
                onClick={() => {
                  setLoginModalOpen(false);
                  lastActiveElementRef.current?.focus();
                }}
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
                onClick={() => {
                  setLoginModalOpen(false);
                  lastActiveElementRef.current?.focus();
                }}
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
