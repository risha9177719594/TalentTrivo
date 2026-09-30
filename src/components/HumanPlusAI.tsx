import React from 'react';
import { Cpu, Users, CheckCircle2 } from 'lucide-react';
import '../styles/split-model.css';

export const HumanPlusAI: React.FC = () => {
  return (
    <div className="split-model">
      <div className="split-card ai">
        <div className="split-header">
          <div className="split-icon" aria-hidden="true">
            <Cpu size={24} />
          </div>
          <div>
            <span className="badge badge-primary" style={{ marginBottom: '0.25rem' }}>
              Analytical Acceleration
            </span>
            <h3>AI Intelligence Layer</h3>
          </div>
        </div>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.975rem' }}>
          Deconstructs technical nuances, parses complex multi-year engineering experiences, and evaluates production market postings in seconds.
        </p>

        <ul className="split-list">
          <li className="split-list-item">
            <CheckCircle2 size={18} color="var(--color-primary)" />
            <span>Maps skill adjacencies and technical overlaps objectively</span>
          </li>
          <li className="split-list-item">
            <CheckCircle2 size={18} color="var(--color-primary)" />
            <span>Extracts high-signal production requirements from hundreds of job posts</span>
          </li>
          <li className="split-list-item">
            <CheckCircle2 size={18} color="var(--color-primary)" />
            <span>Generates tailored learning trajectories focused only on real gaps</span>
          </li>
          <li className="split-list-item">
            <CheckCircle2 size={18} color="var(--color-primary)" />
            <span>Assists agents in drafting truthful, high-impact resume narratives</span>
          </li>
        </ul>
      </div>

      <div className="split-card human">
        <div className="split-header">
          <div className="split-icon" aria-hidden="true">
            <Users size={24} />
          </div>
          <div>
            <span className="badge badge-secondary" style={{ marginBottom: '0.25rem' }}>
              Strategic Direction
            </span>
            <h3>Human Counselor Guidance</h3>
          </div>
        </div>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.975rem' }}>
          Dedicated TalentTrivo agents provide the human judgment, empathy, and market wisdom needed to transform insights into a viable career shift.
        </p>

        <ul className="split-list">
          <li className="split-list-item">
            <CheckCircle2 size={18} color="var(--color-secondary)" />
            <span>Validates that target technologies match your genuine career goals</span>
          </li>
          <li className="split-list-item">
            <CheckCircle2 size={18} color="var(--color-secondary)" />
            <span>Reviews every resume iteration to ensure total integrity and accuracy</span>
          </li>
          <li className="split-list-item">
            <CheckCircle2 size={18} color="var(--color-secondary)" />
            <span>Coaches on interview storytelling, compensation context, and confidence</span>
          </li>
          <li className="split-list-item">
            <CheckCircle2 size={18} color="var(--color-secondary)" />
            <span>Remains your accountability partner and advisor throughout the journey</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
