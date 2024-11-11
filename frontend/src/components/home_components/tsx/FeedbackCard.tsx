import React from 'react';
import styles from '../css/FeedbackCard.module.css';

interface FeedbackCardProps {
  content: string;
  author: string;
  country: string;
  avatar: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ content, author, country, avatar }) => {
  return (
    <div className={styles.feedbackCard}>
      <p className={styles.content}>{content}</p>
      <div className={styles.rating}>
        {[1, 2, 3, 4, 5].map((star) => (
          <img key={star} src="https://cdn.builder.io/api/v1/image/assets/TEMP/327defd2f85b7c27a1ca2e79bb596110c0204ad16bfd4d3a968dc1d6166f547e?placeholderIfAbsent=true&apiKey=f8ff8e6c001546d0b8b7d8599eb812e4" alt="" className={styles.starIcon} />
        ))}
      </div>
      <div className={styles.author}>
        <div className={styles.authorInfo}>
          <h3 className={styles.authorName}>{author}</h3>
          <p className={styles.authorCountry}>{country}</p>
        </div>
      </div>
      <img src={avatar} alt={author} className={styles.authorAvatar} />
    </div>
  );
};

export default FeedbackCard;