import React from 'react';

/**
 * BalineseOrnament - Komponen SVG ornamen tradisional Bali
 * Variant:
 * - 'divider': Floral swirl horizontal divider (Patra Punggel motif)
 * - 'corner': L-shaped floral corner bracket
 * - 'frangipani': Bunga Kamboja / Jepun Bali (5-petal floral motif)
 * - 'mandala': Solar mandala / Candi motif
 */
const BalineseOrnament = ({
  variant = 'divider',
  className = '',
  color = '#8B7355',
  size = 40,
  opacity = 0.4
}) => {
  if (variant === 'corner') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none select-none ${className}`}
        style={{ opacity }}
      >
        <path
          d="M2 58 L2 14 C2 8 8 2 14 2 L58 2"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8 50 L8 18 C8 12 12 8 18 8 L50 8"
          stroke={color}
          strokeWidth="1"
          strokeDasharray="2 3"
        />
        <circle cx="2" cy="2" r="2.5" fill={color} />
        <path
          d="M14 14 C14 22 22 22 26 18 C30 14 24 10 18 10 C14 10 12 12 14 14 Z"
          stroke={color}
          strokeWidth="1"
          fill="none"
        />
        <circle cx="22" cy="16" r="1.5" fill={color} />
      </svg>
    );
  }

  if (variant === 'frangipani') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none select-none ${className}`}
        style={{ opacity }}
      >
        {/* 5 Petals of Frangipani / Bunga Jepun */}
        <g stroke={color} strokeWidth="1.2" fill="none">
          {/* Petal 1 - Top */}
          <path d="M50 50 C42 35 40 18 50 10 C60 18 58 35 50 50 Z" />
          {/* Petal 2 - Top Right */}
          <path d="M50 50 C65 42 82 40 90 50 C82 60 65 58 50 50 Z" transform="rotate(72 50 50)" />
          {/* Petal 3 - Bottom Right */}
          <path d="M50 50 C65 42 82 40 90 50 C82 60 65 58 50 50 Z" transform="rotate(144 50 50)" />
          {/* Petal 4 - Bottom Left */}
          <path d="M50 50 C65 42 82 40 90 50 C82 60 65 58 50 50 Z" transform="rotate(216 50 50)" />
          {/* Petal 5 - Top Left */}
          <path d="M50 50 C65 42 82 40 90 50 C82 60 65 58 50 50 Z" transform="rotate(288 50 50)" />
        </g>
        {/* Center core */}
        <circle cx="50" cy="50" r="5" fill={color} />
        <circle cx="50" cy="50" r="8" stroke={color} strokeWidth="0.8" fill="none" />
      </svg>
    );
  }

  if (variant === 'mandala') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none select-none ${className}`}
        style={{ opacity }}
      >
        <circle cx="60" cy="60" r="54" stroke={color} strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="60" cy="60" r="42" stroke={color} strokeWidth="1" />
        <circle cx="60" cy="60" r="28" stroke={color} strokeWidth="1" />
        <circle cx="60" cy="60" r="6" fill={color} />
        {/* Diamond rays */}
        <path d="M60 6 L64 24 L60 28 L56 24 Z" fill={color} />
        <path d="M60 114 L64 96 L60 92 L56 96 Z" fill={color} />
        <path d="M6 60 L24 64 L28 60 L24 56 Z" fill={color} />
        <path d="M114 60 L96 64 L92 60 L96 56 Z" fill={color} />
      </svg>
    );
  }

  // Default: 'divider' (Patra Punggel horizontal flourish)
  return (
    <svg
      width={typeof size === 'number' ? size * 4 : 180}
      height={typeof size === 'number' ? size : 30}
      viewBox="0 0 240 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
    >
      {/* Center diamond */}
      <rect x="116" y="14" width="8" height="8" transform="rotate(45 120 18)" fill={color} />
      <circle cx="120" cy="18" r="8" stroke={color} strokeWidth="1" fill="none" />
      
      {/* Left scroll flourish */}
      <path
        d="M106 18 C90 18 84 8 72 8 C60 8 56 22 44 22 C32 22 28 14 18 14 C10 14 4 18 0 18"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="72" cy="8" r="2" fill={color} />
      <circle cx="44" cy="22" r="2" fill={color} />
      <path
        d="M96 18 C88 24 78 26 70 24"
        stroke={color}
        strokeWidth="0.8"
        fill="none"
      />

      {/* Right scroll flourish (mirrored) */}
      <path
        d="M134 18 C150 18 156 8 168 8 C180 8 184 22 196 22 C208 22 212 14 222 14 C230 14 236 18 240 18"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="168" cy="8" r="2" fill={color} />
      <circle cx="196" cy="22" r="2" fill={color} />
      <path
        d="M144 18 C152 24 162 26 170 24"
        stroke={color}
        strokeWidth="0.8"
        fill="none"
      />
    </svg>
  );
};

export default BalineseOrnament;
