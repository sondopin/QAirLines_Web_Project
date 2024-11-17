import React from 'react';
import styles from './InputEmail.module.css';

interface InputEmailProps {
  onSubmit: (email: string) => void;
}

const InputEmail: React.FC<InputEmailProps> = ({ onSubmit }) => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.inputContainer}>
      <label htmlFor="emailInput" className={styles.visuallyHidden}>
        Enter your email
      </label>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/89d1af211486f8a9cd21fd16209f0d9061374f9e65e163a37e7d9fc23b74a0e0?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&"
        className={styles.icon}
        alt=""
      />
      <input
        type="email"
        id="emailInput"
        className={styles.emailInput}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        aria-label="Enter your email"
      />
    </form>
  );
};

export default InputEmail;