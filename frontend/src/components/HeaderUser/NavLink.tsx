import React from 'react';
import styles from './HeaderUser.module.css';

interface NavLinkProps {
  label: string;
  isActive: boolean;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ label, isActive , href}) => {
  return (
    <a href={href} className={`${styles.navItem} ${isActive ? styles.active : ''}`}>
      {label}
    </a>
  );
};

export default NavLink;