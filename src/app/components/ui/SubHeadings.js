import React from 'react';

const SubHeadings = ({ type = 'h2', className, children, ...props }) => {
  const Tag = type;

  return (
    <Tag className={`${className} text-primary-black font-rethinkSans font-semibold 
    text-[30px] leading-[40px] tracking-[0.3px] 
    md:text-[56px] md:leading-[68px] md:tracking-[0.56px]`} {...props}>
      {children}
    </Tag>
  );
};

export default SubHeadings;
