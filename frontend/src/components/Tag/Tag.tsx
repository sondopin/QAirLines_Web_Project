import React from 'react';
import styles from './Tag.module.css';

interface TagProps {
  text: string;
}

const Tag: React.FC<TagProps> = ({ text }) => {
  return (
    <span className={styles.tag}>
      {text}
    </span>
  );
};

export default Tag;