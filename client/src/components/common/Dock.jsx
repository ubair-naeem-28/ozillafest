import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Children, cloneElement, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './Dock.css';

function DockItem({ children, className = '', onClick, mouseX, spring, distance, magnification, baseItemSize, label }) {
  const ref = useRef(null);
  const centerRef = useRef(null);
  const isHovered = useMotionValue(0);

  const getCenter = () => {
    if (centerRef.current !== null) return centerRef.current;
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      centerRef.current = rect.left + rect.width / 2;
      return centerRef.current;
    }
    return 0;
  };

  const mouseDistance = useTransform(mouseX, val => {
    if (val === Infinity || !ref.current) return distance;
    const itemCenter = getCenter();
    return val - itemCenter;
  });

  const targetScale = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [1, magnification / baseItemSize, 1]
  );
  
  const scale = useSpring(targetScale, spring);

  const handleKeyDown = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  const handleMouseEnter = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      centerRef.current = rect.left + rect.width / 2;
    }
    isHovered.set(1);
  };

  const handleMouseLeave = () => {
    centerRef.current = null;
    isHovered.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        width: baseItemSize,
        height: baseItemSize,
        scale
      }}
      onHoverStart={handleMouseEnter}
      onHoverEnd={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      onClick={onClick}
      className={`dock-item ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
      aria-label={label}
      onKeyDown={handleKeyDown}
    >
      {Children.map(children, child => cloneElement(child, { isHovered }))}
    </motion.div>
  );
}

function DockLabel({ children, className = '', ...rest }) {
  const { isHovered } = rest;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isHovered) return;
    const unsubscribe = isHovered.on('change', latest => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -4, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -4, scale: 0.85 }}
          transition={{ duration: 0.15 }}
          className={`dock-label ${className}`}
          role="tooltip"
          style={{ x: '-50%' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className = '' }) {
  return <div className={`dock-icon ${className}`}>{children}</div>;
}

export default function Dock({
  items,
  className = '',
  spring = { mass: 0.1, stiffness: 220, damping: 18 },
  magnification = 52,
  distance = 120,
  panelHeight = 44,
  baseItemSize = 36
}) {
  const mouseX = useMotionValue(Infinity);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="dock-outer">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={`dock-panel ${className}`}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => {
          const isActive = location.pathname === item.to ||
            (item.to !== '/' && location.pathname.startsWith(item.to)) ||
            (item.to === '/' && location.pathname === '/dashboard');

          return (
            <DockItem
              key={item.to || index}
              onClick={() => {
                item.onClick?.();
                if (item.to) navigate(item.to);
              }}
              className={`${item.className || ''} ${isActive ? 'active' : ''}`}
              mouseX={mouseX}
              spring={spring}
              distance={distance}
              magnification={magnification}
              baseItemSize={baseItemSize}
              label={item.label}
            >
              <DockIcon>{item.icon}</DockIcon>
              <DockLabel>{item.label}</DockLabel>
            </DockItem>
          );
        })}
      </motion.div>
    </div>
  );
}