import React, { Children, useRef } from 'react';
import './ScrollStack.css';

export function ScrollStackItem({
  children,
  className = '',
  id = '',
  badge = '',
  title = '',
  bgColor = '',
  style = {},
  ...rest
}) {
  return (
    <div
      id={id}
      className={`scroll-stack-card ${className}`.trim()}
      style={{
        background: bgColor || undefined,
        ...style
      }}
      {...rest}
    >
      {(badge || title) && (
        <div className="scroll-stack-card-tab">
          {badge && <span className="stack-tab-badge">{badge}</span>}
          {title && <span className="stack-tab-title">{title}</span>}
        </div>
      )}
      <div className="scroll-stack-card-content">
        {children}
      </div>
    </div>
  );
}

export default function ScrollStack({
  children,
  className = '',
  stackOffset = 28,
  ...rest
}) {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className={`scroll-stack-container ${className}`.trim()}
      {...rest}
    >
      <div className="scroll-stack-inner">
        {Children.map(children, (child, index) => {
          if (!child) return null;
          return (
            <div
              key={child.props?.id || index}
              className="scroll-stack-card-wrapper"
              style={{
                zIndex: index + 1,
                top: `calc(75px + ${index * stackOffset}px)`,
                marginBottom: '4.5rem'
              }}
            >
              {child}
            </div>
          );
        })}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
}
