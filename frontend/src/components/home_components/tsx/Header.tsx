import React from 'react';
import styles from '../css/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/66865522fea24a2408e7cb8b32433169229265979b3ad665abca6780c5663196?placeholderIfAbsent=true&apiKey=f8ff8e6c001546d0b8b7d8599eb812e4" alt="Airline Logo" className={styles.logo} />
      <nav className={styles.navigation}>
        <a href="#home" className={styles.navLink}>Home</a>
        <a href="#about" className={styles.navLink}>About</a>
        <a href="#flight" className={styles.navLink}>Flight</a>
        <a href="#myTicket" className={styles.navLink}>My Ticket</a>
        <a href="#destination" className={styles.navLink}>Destination</a>
      </nav>
      <div className={styles.authButtons}>
        <button className={styles.signIn}>Sign In</button>
        <button className={styles.signUp}>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;