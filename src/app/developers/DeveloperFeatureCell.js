import React from 'react';
import styles from './DeveloperFeatureCell.module.scss';

const DeveloperFeatureCell = ({ title, iconPath }) => {
  return (
    <div className={`flex flex-col gap-4 p-6 ${styles.cell}`}>
      <img 
        src={iconPath}
        alt={title}
        width={16}
        height={16}
      />
      <p className="text-white font-inter text-base font-normal leading-6">
        {title}
      </p>
    </div>
  );
};

export default DeveloperFeatureCell;
