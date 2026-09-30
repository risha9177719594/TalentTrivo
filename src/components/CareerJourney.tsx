import React from 'react';
import {
  Briefcase,
  Search,
  Compass,
  BookOpen,
  FileCheck,
  Target,
  Award,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import '../styles/journey.css';

const JOURNEY_NODES = [
  {
    title: 'Your Experience',
    sub: 'Core Equity & Domain Depth',
    icon: Briefcase,
    highlight: false
  },
  {
    title: 'Career Analysis',
    sub: 'Skill Adjacency & Trajectory',
    icon: Search,
    highlight: false
  },
  {
    title: 'Target Technology',
    sub: 'Strategic Market Demand',
    icon: Compass,
    highlight: true
  },
  {
    title: 'Learning & Prep',
    sub: 'Production Architecture Gaps',
    icon: BookOpen,
    highlight: false
  },
  {
    title: 'Profile & Resume',
    sub: 'Truthful Strategic Framing',
    icon: FileCheck,
    highlight: false
  },
  {
    title: 'Opportunities',
    sub: 'Targeted Team Discovery',
    icon: Target,
    highlight: false
  },
  {
    title: 'Interview Prep',
    sub: 'Architecture & Transition Story',
    icon: Award,
    highlight: false
  },
  {
    title: 'Your Next Career',
    sub: 'Continuous Support',
    icon: Sparkles,
    terminal: true
  }
];

export const CareerJourney: React.FC = () => {
  return (
    <div className="journey-wrapper">
      <div className="journey-flow" role="region" aria-label="Career Journey Progression">
        {JOURNEY_NODES.map((node, index) => {
          const Icon = node.icon;
          const isTerminal = !!node.terminal;
          const isHighlight = !!node.highlight;

          return (
            <React.Fragment key={node.title}>
              <div
                className={`journey-node ${isHighlight ? 'highlight' : ''} ${
                  isTerminal ? 'terminal' : ''
                }`}
              >
                <div className="journey-node-icon" aria-hidden="true">
                  <Icon size={24} />
                </div>
                <div>
                  <div className="journey-node-title">{node.title}</div>
                  <div className="journey-node-sub">{node.sub}</div>
                </div>
              </div>

              {index < JOURNEY_NODES.length - 1 && (
                <div className="journey-connector" aria-hidden="true">
                  <ChevronRight size={18} />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
