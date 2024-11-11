import React from 'react';
import styles from '../css/Footer.module.css';

interface NavItem {
  title: string;
  href: string;
}

interface NavColumn {
  title: string;
  items: NavItem[];
}

const navColumns: NavColumn[] = [
  {
    title: "Product",
    items: [
      { title: "About", href: "#about" },
      { title: "Career", href: "#career" },
      { title: "Blog", href: "#blog" },
      { title: "Special Offers", href: "#special-offers" },
    ],
  },
  {
    title: "Help",
    items: [
      { title: "FAQ", href: "#faq" },
      { title: "Help Center", href: "#help-center" },
      { title: "Privacy Policy", href: "#privacy-policy" },
    ],
  },
  {
    title: "Partner",
    items: [
      { title: "Partner Hub", href: "#partner-hub" },
      { title: "Affiliates", href: "#affiliates" },
      { title: "Advertise", href: "#advertise" },
    ],
  },
];

const Footer: React.FC = () => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.companyInfo}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3603a43a6741f0b32be76937b4e6bd5b92a11c2a04469c48351cadb5d030c82?placeholderIfAbsent=true&apiKey=f8ff8e6c001546d0b8b7d8599eb812e4" alt="Company Logo" className={styles.footerLogo} />
          <p className={styles.companyDescription}>
            Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.
          </p>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/25c8d60067fc0f313fa8f668b89ecc61a56f5be4b3e2f574bb1a02283343722e?placeholderIfAbsent=true&apiKey=f8ff8e6c001546d0b8b7d8599eb812e4" alt="Social Media Icons" className={styles.socialIcons} />
        </div>
        <nav className={styles.footerNav}>
          {navColumns.map((column, index) => (
            <div key={index} className={styles.navColumn}>
              <h3 className={styles.navTitle}>{column.title}</h3>
              <ul className={styles.navList}>
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href={item.href}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div className={styles.subscribe}>
          <h3 className={styles.subscribeTitle}>Subscribe</h3>
          <form onSubmit={handleSubmit} className={styles.subscribeForm}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-label="Subscribe to our newsletter"
              className={styles.subscribeInput}
              required
            />
            <button type="submit" className={styles.subscribeButton}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/60f47bceb5d9938e33e78f5fd33019094d1673c63d20551c52d464fba6358ac8?placeholderIfAbsent=true&apiKey=f8ff8e6c001546d0b8b7d8599eb812e4" alt="Subscribe" />
            </button>
          </form>
          <p className={styles.subscribeDescription}>
            Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.
          </p>
        </div>
      </div>
      <hr className={styles.footerDivider} />
      <div className={styles.footerBottom}>
        <nav className={styles.legalLinks}>
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
          <a href="#cookies">Cookies</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;