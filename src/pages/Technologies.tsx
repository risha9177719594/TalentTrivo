import React, { useState } from 'react';
import { TechnologyCard } from '../components/TechnologyCard';
import { CTASection } from '../components/CTASection';
import { SEO } from '../components/SEO';
import { EXAMPLE_TRANSITIONS } from '../data/websiteData';
import { Compass, Info } from 'lucide-react';

export const Technologies: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Enterprise to Cloud', 'Backend Evolution', 'Quality to Infrastructure', 'Web Modernization', 'Infrastructure Modernization'];

  const filteredPaths = selectedCategory === 'All'
    ? EXAMPLE_TRANSITIONS
    : EXAMPLE_TRANSITIONS.filter((p) => p.category === selectedCategory);

  return (
    <main id="main-content">
      <SEO
        title="Technology Career Paths & Transition Horizons"
        description="Browse illustrative technology transition pathways: Salesforce to Cloud Data, Java to Microservices, Testing to DevOps, and more."
      />
      {/* Header */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '1.5rem' }}>
            <span className="badge badge-primary">
              <Compass size={14} />
              <span>Technology Horizons</span>
            </span>
            <h1>Technology Transition Pathways</h1>
            <p>
              Illustrative transition maps illustrating how seasoned engineers can strategically reposition their core skills into high-demand cloud, data, and platform architectures.
            </p>
          </div>

          {/* Important Disclaimer Banner */}
          <div
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              backgroundColor: 'var(--color-primary-light)',
              border: '1px solid rgba(99, 49, 129, 0.2)',
              borderRadius: '12px',
              padding: '1rem 1.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              color: 'var(--color-primary-dark)'
            }}
            role="note"
          >
            <Info size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
            <p style={{ fontSize: '0.875rem', margin: 0, color: 'var(--color-primary-dark)' }}>
              <strong>Notice:</strong> The paths shown below are illustrative archetypes based on common industry patterns. Career transition suitability depends entirely on your specific project background, architecture exposure, and personal aptitudes. Every candidate receives a custom assessment from our counselors.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Category Tabs */}
      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '3rem'
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`btn btn-sm ${selectedCategory === cat ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid-2">
            {filteredPaths.map((path) => (
              <TechnologyCard key={path.id} path={path} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Don't see your specific stack listed?"
        subtitle="Our counselors evaluate transitions across hundreds of technology stacks. Tell us your current background."
      />
    </main>
  );
};
