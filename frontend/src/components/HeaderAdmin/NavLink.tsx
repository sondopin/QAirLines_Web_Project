import React from 'react';
import styles from './HeaderAdmin.module.css';

interface NavLinkProps {
  href: string;
  isActive?: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, isActive = false, children }) => {
  return (
    <a 
      href={href} 
      className={`${styles.navLink} ${isActive ? styles.activeLink : ''}`}
    >
      {children}
    </a>
  );
};

export default NavLink;