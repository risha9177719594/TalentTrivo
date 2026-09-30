import React from 'react';
import { GitFork, TrendingUp, Cpu, Users, Shield, Compass, HelpCircle, AlertTriangle, FileX, ShieldAlert, LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  iconName: string;
  highlight?: string;
  variant?: 'default' | 'accent' | 'subtle';
}

const iconMap: Record<string, LucideIcon> = {
  GitFork,
  TrendingUp,
  Cpu,
  Users,
  Shield,
  Compass,
  HelpCircle,
  AlertTriangle,
  FileX,
  ShieldAlert
};

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  iconName,
  highlight,
  variant = 'default'
}) => {
  const IconComponent = iconMap[iconName] || Compass;

  const getBorderColor = () => {
    if (variant === 'accent') return 'rgba(99, 49, 129, 0.25)';
    return 'var(--color-border)';
  };

  return (
    <div
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderColor: getBorderColor(),
        height: '100%'
      }}
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '10px',
          backgroundColor: 'var(--color-surface)',
          color: 'var(--color-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.25rem',
          border: '1px solid var(--color-border)'
        }}
      >
        <IconComponent size={24} aria-hidden="true" />
      </div>

      {highlight && (
        <span
          className="badge badge-primary"
          style={{ alignSelf: 'flex-start', marginBottom: '0.75rem', fontSize: '0.72rem' }}
        >
          {highlight}
        </span>
      )}

      <h3 style={{ fontSize: '1.2rem', marginBottom: '0.65rem' }}>{title}</h3>
      <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
        {description}
      </p>
    </div>
  );
};
