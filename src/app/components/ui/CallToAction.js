import React from 'react';

const CallToAction = ({
  // Container styling
  containerClassName = "my-[176px]",
  
  // Text content (can include <br/> tags)
  text = "Drive more adoption<br/>for your product.",
  
  // Words to highlight with gradient
  highlightWords = ["adoption"],
  
  // Buttons array - pass any buttons you want
  buttons = [],
  
  ...props
}) => {

  const renderText = () => {
    // Replace <br/> tags with actual line breaks
    const parts = text.split('<br/>');
    
    return parts.map((part, partIndex) => (
      <React.Fragment key={partIndex}>
        {highlightWords.length > 0 ? (
          // Create regex for all highlight words
          (() => {
            const regex = new RegExp(`(${highlightWords.join('|')})`, 'gi');
            return part.split(regex).map((chunk, chunkIndex) => {
              const isHighlighted = highlightWords.some(word => 
                chunk.toLowerCase() === word.toLowerCase()
              );
              
              if (isHighlighted) {
                return (
                  <span 
                    key={`${partIndex}-${chunkIndex}`}
                    className="font-instrumentSerif font-normal font-feature-settings-salt italic bg-gradient-to-r from-[#0089FF] to-[#7D52F4] bg-clip-text text-transparent text-[32px] sm:text-[48px] lg:text-[56px] leading-[48px] sm:leading-[60px] lg:leading-[72px] tracking-[0.32px] sm:tracking-[0.48px] lg:tracking-[0.56px]"
                  >
                    {chunk}
                  </span>
                );
              }
              return chunk;
            });
          })()
        ) : (
          part
        )}
        {partIndex < parts.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className={`w-full flex flex-col items-center gap-8 lg:py-31 lg:px-16 mx-auto ${containerClassName}`} {...props}>
      {/* Main Text */}
      <p className="w-[520px] text-center text-[#17181A] font-rethinkSans font-bold font-feature-settings-salt text-[32px] sm:text-[48px] lg:text-[56px] leading-[48px] sm:leading-[60px] lg:leading-[72px] tracking-[0.32px] sm:tracking-[0.48px] lg:tracking-[0.56px]">
        {renderText()}
      </p>
        
      {/* Buttons Container */}
      {buttons.length > 0 && (
        <div className="flex flex-col xs:flex-row items-center w-fit gap-3">
          {buttons.map((button, index) => (
            <React.Fragment key={index}>
              {button}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default CallToAction;
