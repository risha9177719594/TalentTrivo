import React from 'react';
import { PROCESS_STEPS } from '../data/websiteData';
import '../styles/process.css';

interface ProcessStepsProps {
  limit?: number;
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({ limit }) => {
  const steps = limit ? PROCESS_STEPS.slice(0, limit) : PROCESS_STEPS;

  return (
    <div className="process-container" role="list">
      {steps.map((item) => (
        <div key={item.step} className="process-step-item" role="listitem">
          <div className="step-num-badge" aria-hidden="true">
            {item.step}
          </div>
          <div className="step-content">
            <div className="step-header">
              <h3 className="step-title">{item.title}</h3>
            </div>
            <p className="step-desc">{item.description}</p>
            <div className="step-detail">→ {item.detail}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
