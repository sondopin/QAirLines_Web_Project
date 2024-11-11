import React from 'react';
import styles from '../css/FlightSearch.module.css';

const FlightSearch: React.FC = () => {
  return (
    <form className={styles.flightSearch}>
      <div className={styles.searchTabs}>
        <button className={styles.activeTab}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccd6fc34d38a284fc345673f403e1450a648081927b58ee3f279f68ea2654071?placeholderIfAbsent=true&apiKey=f8ff8e6c001546d0b8b7d8599eb812e4" alt="" className={styles.tabIcon} />
          Flights
        </button>
      </div>
      <div className={styles.searchFields}>
        <div className={styles.inputGroup}>
          <label htmlFor="departurePoint" className={styles.label}>Departure Point</label>
          <input type="text" id="departurePoint" placeholder="Where are you from?" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="departureDate" className={styles.label}>Departure Date</label>
          <div className={styles.dateInput}>
            <input type="text" id="departureDate" placeholder="Choose Dates" className={styles.input} />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b1b24edbb736331e2f5393107907f149f307d99f4afa03581520f1b8c469c7a?placeholderIfAbsent=true&apiKey=f8ff8e6c001546d0b8b7d8599eb812e4" alt="Calendar" className={styles.calendarIcon} />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="destinationPoint" className={styles.label}>Destination Point</label>
          <input type="text" id="destinationPoint" placeholder="Where are you going?" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="returnDate" className={styles.label}>Return Date</label>
          <div className={styles.dateInput}>
            <input type="text" id="returnDate" placeholder="Choose Dates" className={styles.input} />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b1b24edbb736331e2f5393107907f149f307d99f4afa03581520f1b8c469c7a?placeholderIfAbsent=true&apiKey=f8ff8e6c001546d0b8b7d8599eb812e4" alt="Calendar" className={styles.calendarIcon} />
          </div>
        </div>
      </div>
      <button type="submit" className={styles.searchButton}>Search Flights</button>
    </form>
  );
};

export default FlightSearch;