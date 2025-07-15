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
        // Skip if typing in input/textarea
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

    // Setup global listener once
    if (typeof window !== 'undefined') {
      document.addEventListener('keydown', navigationSystem.handleKeyPress);
    }
  }
  
  return navigationSystem;
};

const ButtonBlack = forwardRef(({ 
  children,
  href,
  onClick,
  width = 'w-[154px]', 
  height = 'h-12',
  badge,
  icon, // Yeni prop: icon component
  ariaLabel = ariaLabel || children,
  target = '_blank',
  rel = 'noopener noreferrer',
  disabled = false,
  wrapperClassName = 'rounded-xl', // a veya button elementi için class
  className = '', // default values and props for outerClass - first div
  innerDivPadding = 'px-[19px] py-[13px]',
  innerClassName = '', // props for innerClass - second div
  textClassName = '', // props for textClass - span - text
  badgeClassName = '', // props for badgeClass - span - icon
  iconClassName = '', // icon için container class
  ...props
}, ref) => {
  // Setup badge navigation only when badge and href exist
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

  // Base styling for outer container
  const outerClass = `
    ${width} ${height} rounded-xl flex justify-center items-center 
    ${disabled 
      ? 'bg-gray-400 cursor-not-allowed' 
      : 'bg-black hover:bg-[#17181A] active:bg-[#262728]'
    } 
    ${className}
  `.trim();

  // Base styling for inner container
  const innerClass = `
    w-[calc(100%-2px)] h-[calc(100%-2px)] ${innerDivPadding} rounded-[11px] text-center 
    flex justify-center items-center gap-x-2 
    shadow-[0px_3px_8px_0px_rgba(0,0,0,0.15)] 
    outline-[1px] outline-offset-[-1px] outline-[rgba(255,255,255,0.12)]
    ${disabled
      ? 'bg-gray-500'
      : `bg-gradient-to-b from-[#252525] to-[#17181A] 
         hover:from-[#323232] hover:to-[#17181A] 
         active:from-[#484848] active:to-[#262728]`
    }
    ${(badge || icon) ? 'justify-between' : 'justify-center'}
    ${innerClassName}
  `.trim();

  // Text styling
  const textClass = `
    text-white font-openRunde text-[14px] font-medium 
    leading-[17px] tracking-[0.14px] 
    ${(badge || icon) ? 'w-fit' : ''}
    ${textClassName}
  `.trim();

  // Badge styling  
  const badgeClass = `
    w-[17px] h-[17px] flex items-center justify-center 
    py-[0.5px] px-[4.5px] rounded-[3px] 
    bg-[rgba(255,255,255,0.10)]
    ${badgeClassName}
  `.trim();

  const badgeTextClass = `
    text-[rgba(255,255,255,0.75)] text-center 
    text-[11px] font-normal leading-[16px] tracking-[0.11px]
  `.trim();

  // Icon container class
  const iconContainerClass = `
    flex items-center justify-center
    ${iconClassName}
  `.trim();

  // Content JSX
  const content = (
    <div className={outerClass}>
      <div className={innerClass}>
        <span className={textClass}>
          {children}
        </span>
        {badge && (
          <span className={badgeClass}>
            {typeof badge === 'string' ? (
              <span className={badgeTextClass}>
                {badge}
              </span>
            ) : (
              badge
            )}
          </span>
        )}
        {!badge && icon && (
          <span className={iconContainerClass}>
            {icon}
          </span>
        )}
      </div>
    </div>
  );

  // Return appropriate element based on props
  if (href) {
    return (
      <a
        ref={ref}
        href={disabled ? undefined : href}
        target={disabled ? undefined : target}
        rel={disabled ? undefined : rel}
        aria-label={ariaLabel}
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
      aria-label={ariaLabel}
      disabled={disabled}
      className={wrapperClassName}
      {...props}
    >
      {content}
    </button>
  );
});

ButtonBlack.displayName = 'ButtonBlack';

// Cleanup on module unload
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', () => {
    const system = getNavigationSystem();
    document.removeEventListener('keydown', system.handleKeyPress);
  });
}

export default ButtonBlack;
