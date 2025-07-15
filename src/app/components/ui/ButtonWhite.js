import React, { forwardRef, useEffect } from 'react';
{/* YAP - TO DO - İLERİDE YAPABİLİRİZ : belki şeyde yapabilirsin flex grow ve basis değerleri ekleyerek eğer satırda yalnız kalırsa buton yatayı full kaplasın diyebiliriz. */}

// Lazy initialize navigation system
let navigationSystem;
const getNavigationSystem = () => {
  if (!navigationSystem) {
    navigationSystem = {
      badges: new WeakMap(),
      keys: {},
      
      navigate: (url, target = '_blank') => {
        if (typeof window === 'undefined') return;
        
        requestAnimationFrame(() => {
          const a = document.createElement('a');
          a.href = url;
          a.target = target;
          a.rel = 'noopener noreferrer';
          a.click();
          a.remove();
        });
      },
      
      handleKeyPress: (event) => {
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
          return;
        }
        
        const key = event.key.toLowerCase();
        const keyObj = navigationSystem.keys[key];
        if (keyObj && navigationSystem.badges.has(keyObj)) {
          const { href, target } = navigationSystem.badges.get(keyObj);
          navigationSystem.navigate(href, target);
        }
      }
    };

    if (typeof window !== 'undefined') {
      document.addEventListener('keydown', navigationSystem.handleKeyPress);
    }
  }
  
  return navigationSystem;
};

const ButtonWhite = forwardRef(({ 
  children,
  href,
  onClick,
  width = 'w-fit',
  height = 'h-auto',
  badge,
  icon,
  ariaLabel,
  target = '_blank',
  rel = 'noopener noreferrer',
  disabled = false,
  wrapperClassName = 'w-fit rounded-xl cursor-pointer', // a tag class
  className = '', // div class
  padding = 'py-4 px-5', // outer div padding
  textClassName = '', // text class
  badgeClassName = '', // badge container class
  iconClassName = '', // icon container class
  ...props
}, ref) => {
  // Badge navigation setup
  useEffect(() => {
    if (!badge || !href || typeof badge !== 'string') return;

    const system = getNavigationSystem();
    const key = badge.toLowerCase();
    
    if (!system.keys[key]) {
      system.keys[key] = {};
    }
    
    system.badges.set(system.keys[key], { href, target });
    
    return () => {
      delete system.keys[key];
    };
  }, [badge, href, target]);

  // Base styling for container
  const containerClass = `
    inline-flex ${padding} justify-center items-center gap-2 rounded-xl
    border border-[#F4F4F4] 
    bg-white hover:bg-[linear-gradient(180deg,#FFF_0%,#FBFBFB_100%)] 
    active:bg-[linear-gradient(180deg,#FBFBFB_0%,#F7F7F7_100%)]
    hover:border-[#EEE] active:border-[#EEE]
    shadow-[0px_1px_4px_0px_rgba(34,34,34,0.05)]
    ${width} ${height}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `.trim();

  // Text styling
  const textClass = `
    text-[#17181A] text-center text-[14px] font-medium leading-4
    ${textClassName}
  `.trim();

  // Badge styling
  const badgeClass = `
    flex items-center justify-center
    px-[4.5px] rounded-[3px] 
    bg-[rgba(119,119,119,0.10)]
    ${badgeClassName}
  `.trim();

  const badgeTextClass = `
    text-[rgba(119,119,119,0.75)] text-center text-[11px] 
    font-medium leading-4 tracking-[0.11px]
  `.trim();

  // Icon container class
  const iconContainerClass = `
    flex items-center justify-center
    ${iconClassName}
  `.trim();

  // Content JSX
  const content = (
    <div className={containerClass}>
      <p className={textClass}>
        {children}
      </p>
      {badge && (
        <span className={badgeClass}>
          <p className={badgeTextClass}>
            {badge}
          </p>
        </span>
      )}
      {!badge && icon && (
        <span className={iconContainerClass}>
          {icon}
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <a
        ref={ref}
        href={disabled ? undefined : href}
        target={disabled ? undefined : target}
        rel={disabled ? undefined : rel}
        aria-label={ariaLabel || children}
        className={wrapperClassName}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      onClick={disabled ? undefined : onClick}
      aria-label={ariaLabel || children}
      disabled={disabled}
      className={wrapperClassName}
      {...props}
    >
      {content}
    </button>
  );
});

ButtonWhite.displayName = 'ButtonWhite';

// Cleanup on module unload
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', () => {
    const system = getNavigationSystem();
    document.removeEventListener('keydown', system.handleKeyPress);
  });
}

export default ButtonWhite;
