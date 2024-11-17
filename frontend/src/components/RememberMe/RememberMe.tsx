import React from 'react';
import styles from './RememberMe.module.css';

interface RememberMeProps {
  iconSrc: string;
  altText: string;
}

const RememberMe: React.FC<RememberMeProps> = ({ iconSrc, altText }) => {
  return (
    <div className={styles.rememberMeContainer}>
      <img 
        loading="lazy" 
        src={iconSrc} 
        alt={altText} 
        className={styles.rememberMeIcon} 
      />
      <span className={styles.rememberMeText}>Remember me</span>
    </div>
  );
};

export default RememberMe;