import React from 'react';
import styles from './HeaderUser.module.css';
import NavLink from './NavLink.tsx';
import Button from '../Button/Button.tsx';


interface HeaderUserProps {
  logoSrc: string;
}

const HeaderUser: React.FC<HeaderUserProps> = ({ logoSrc }) => {
  return (
    <header className={styles.header}>
      <img src={logoSrc} alt="Company Logo" className={styles.logo} />
      <nav className={styles.navigation}>
        <NavLink label='Home' isActive={true} href='\home'/>
        <NavLink label='About' isActive={false} href='\about'/>
        <NavLink label='Flight' isActive={false} href='\flight'/>
        <NavLink label='Buy Tickets' isActive={false} href='\buyticket'/>
        <NavLink label='My Booking' isActive={false} href='\mybooking'/>
      </nav>
      <div className={styles.buttonContainer}>
        <Button text='Register' variant='secondary'/>
        <Button text='Login' variant='primary'/>
      </div>
    </header>
  );
};

export default HeaderUser;