import React from 'react';
import FeedbackCard from '../tsx/FeedbackCard.tsx';
import styles from '../css/Feedback.module.css';

const feedbacks = [
  {
    content: "Odit deserunt quia et sed repellendus veniam totam. Illo magnam perferendis. Impedit laborum ipsa doloremque rerum. Est rerum aut dolorum et omnis a.",
    author: "Carolyn Jacobson",
    country: "Brazil",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/124024a213fec96dffdce78965a7b9f48ce811338ed1b65ed6cf26a040a88717?placeholderIfAbsent=true&apiKey=f8ff8e6c001546d0b8b7d8599eb812e4"
  },
  {
    content: "Odit deserunt quia et sed repellendus veniam totam. Illo magnam perferendis. Impedit laborum ipsa doloremque rerum. Est rerum aut dolorum et omnis a.",
    author: "Carolyn Jacobson",
    country: "Brazil",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/351c53039934ede0f949960287caaa6f7bcf872507d0f0b719576784c657ac69?placeholderIfAbsent=true&apiKey=f8ff8e6c001546d0b8b7d8599eb812e4"
  },
  {
    content: "Odit deserunt quia et sed repellendus veniam totam. Illo magnam perferendis. Impedit laborum ipsa doloremque rerum. Est rerum aut dolorum et omnis a.",
    author: "Carolyn Jacobson",
    country: "Brazil",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/b0735160387008c2dc6bf0c1369766098c4845acd0d9987174d7571e130ccebe?placeholderIfAbsent=true&apiKey=f8ff8e6c001546d0b8b7d8599eb812e4"
  },
  {
    content: "Odit deserunt quia et sed repellendus veniam totam. Illo magnam perferendis. Impedit laborum ipsa doloremque rerum. Est rerum aut dolorum et omnis a.",
    author: "Carolyn Jacobson",
    country: "Brazil",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0ac34596b6ad0902d0d41ca96be638ac04e10919f9b425799d5ceaae79809f9?placeholderIfAbsent=true&apiKey=f8ff8e6c001546d0b8b7d8599eb812e4"
  }
];

const Feedback: React.FC = () => {
  return (
    <section className={styles.feedback}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Feed<span className={styles.highlight}>back</span></h2>
        <div className={styles.navigationButtons}>
          <button className={styles.navButton} aria-label="Previous feedback">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eef5f2b691a53a7ee12539f55bb07d2876721af22637da40839e920fe6f2d8a?placeholderIfAbsent=true&apiKey=f8ff8e6c001546d0b8b7d8599eb812e4" alt="" />
          </button>
          <button className={styles.navButton} aria-label="Next feedback">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/509df0989fdd72eca2c9b67d00efdf470e6f4adb4251e728ef4825d41450b031?placeholderIfAbsent=true&apiKey=f8ff8e6c001546d0b8b7d8599eb812e4" alt="" />
          </button>
        </div>
      </div>
      <div className={styles.feedbackGrid}>
        {feedbacks.map((feedback, index) => (
          <FeedbackCard key={index} {...feedback} />
        ))}
      </div>
    </section>
  );
};

export default Feedback;