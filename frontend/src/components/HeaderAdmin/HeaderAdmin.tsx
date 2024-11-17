import React from 'react';
import styles from './HeaderAdmin.module.css';
import NavLink from './NavLink';

const HeaderAdmin: React.FC = () => {
  return (
    <header className={styles.header}>
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/66865522fea24a2408e7cb8b32433169229265979b3ad665abca6780c5663196?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&" 
        alt="Company Logo" 
        className={styles.logo} 
      />
      <nav className={styles.nav}>
        <NavLink href="/" isActive>Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/aircrafts-management">Aircrafts Management</NavLink>
        <NavLink href="/tickets-statistics">Tickets Statistics</NavLink>
        <NavLink href="/blogs">Blogs</NavLink>
      </nav>
      <div className={styles.account}>
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/7001ec77741a69b677cff19bf83c12bcac69f09636dac41964d2bd7f9cf76064?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&" 
          alt="" 
          className={styles.accountIcon} 
        />
        <span>Administrator</span>
      </div>
    </header>
  );
};

export default HeaderAdmin;