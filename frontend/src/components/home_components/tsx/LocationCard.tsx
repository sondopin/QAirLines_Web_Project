import React from 'react';
import styles from '../css/LocationCard.module.css';

interface LocationCardProps {
  image: string;
  name: string;
  rating: string;
  description: string;
  price: string;
  country: string;
}

const LocationCard: React.FC<LocationCardProps> = ({ image, name, rating, description, price, country }) => {
  return (
    <div className={styles.locationCard}>
      <img src={image} alt={name} className={styles.locationImage} />
      <div className={styles.locationInfo}>
        <div className={styles.nameRating}>
          <h3 className={styles.locationName}>{name}</h3>
          <div className={styles.rating}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9103b3d17b24f15e4ba23a66e5b21529f3b8d16e300f497dbc71ee65fdb71855?placeholderIfAbsent=true&apiKey=f8ff8e6c001546d0b8b7d8599eb812e4" alt="" className={styles.starIcon} />
            <span>{rating}</span>
          </div>
        </div>
        <p className={styles.locationDescription}>{description}</p>
        <hr className={styles.divider} />
        <div className={styles.priceCountry}>
          <div className={styles.price}>
            <span className={styles.priceAmount}>{price}</span>
            <span className={styles.priceUnit}>Night</span>
          </div>
          <div className={styles.country}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/55dbdce461ac3889aeef4e379a7cf3243e502b27ded9d347dbc95661b0ec4309?placeholderIfAbsent=true&apiKey=f8ff8e6c001546d0b8b7d8599eb812e4" alt="" className={styles.flagIcon} />
            <span>{country}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;