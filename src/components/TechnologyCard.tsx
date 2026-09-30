import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TransitionPath } from '../types';
import '../styles/tech-cards.css';

interface TechnologyCardProps {
  path: TransitionPath;
}

export const TechnologyCard: React.FC<TechnologyCardProps> = ({ path }) => {
  return (
    <div className="tech-card" id={path.id}>
      <div className="tech-card-header">
        <span className="badge badge-secondary">{path.category}</span>
        <div className="transition-direction">
          <span className="from-badge">{path.from}</span>
          <ArrowRight size={16} className="arrow-icon" aria-hidden="true" />
          <span className="to-badge">{path.to}</span>
        </div>
      </div>

      <div className="tech-card-body">
        <p className="tech-card-desc">{path.description}</p>

        <div className="skills-section">
          <h4>Key Bridge Focus</h4>
          <div className="skills-tags">
            {path.keySkills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="roles-section">
          <h4>Sample Target Roles</h4>
          <p className="roles-list">{path.sampleRoles.join(' • ')}</p>
        </div>
      </div>

      <div className="tech-card-footer">
        <span className="illustrative-label">Illustrative Path</span>
        <Link
          to={`/contact?target=${encodeURIComponent(path.to)}`}
          className="btn btn-outline-primary btn-sm"
          aria-label={`Explore transition from ${path.from} to ${path.to}`}
        >
          <span>Explore Path</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};
