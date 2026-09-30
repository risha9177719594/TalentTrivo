import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'horizontal' | 'vertical' | 'icon';
  dark?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  dark = false,
  className = ''
}) => {
  const getSrc = () => {
    if (variant === 'icon') {
      return dark ? '/assets/AppIconDark.JPG' : '/assets/AppIcon.JPG';
    }
    if (variant === 'vertical') {
      return dark ? '/assets/Primary%20Logo%20verticalDark.JPG' : '/assets/Primary%20Logo%20vertical.JPG';
    }
    return dark ? '/assets/Primary%20Logo%20HorizontalDark.JPG' : '/assets/Primary%20Logo%20Horizontal.JPG';
  };

  return (
    <Link to="/" className={`inline-flex items-center ${className}`} aria-label="TalentTrivo Home">
      <img
        src={getSrc()}
        alt="TalentTrivo"
        style={{
          height: variant === 'icon' ? '36px' : variant === 'vertical' ? '60px' : '40px',
          width: 'auto',
          objectFit: 'contain'
        }}
      />
    </Link>
  );
};
