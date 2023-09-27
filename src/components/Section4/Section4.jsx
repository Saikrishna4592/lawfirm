

import Image1 from "../../assets/img/BussinessCard.png";
import Image2 from "../../assets/img/BussinessLawCard.png";
import Image3 from "../../assets/img/ElderCard.png";
import Image4 from "../../assets/img/LandLordCard.png";
import Image5 from "../../assets/img/PartnershipCard.png";
import Image6 from "../../assets/img/RealEstateCard.png";
import styles from "./Section4.module.css";

const Section4 = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Area of Practices</h2>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img src={Image1} alt="businesslaw" />
          <h3>BUSINESS LAW</h3>
        </div>
        <div className={styles.card}>
          <img src={Image2} alt="partnershiplaw" />
          <h3>PARTENERSHIP LAW</h3>
        </div>
        <div className={styles.card}>
          <img src={Image3} alt="businesslaw" />
          <h3>REAL ESTATE LAW</h3>
        </div>
        <div className={styles.card}>
          <img src={Image4} alt="partnershiplaw" />
          <h3>BUSINESS LAW</h3>
        </div>
        {/* Row 3 */}
        <div className={styles.card}>
          <img src={Image5} alt="businesslaw" />
          <h3>LANDLORD DISPUTES</h3>
        </div>
        <div className={styles.card}>
          <img src={Image6} alt="partnershiplaw" />

          <h3>ELDER ABUSE</h3>
        </div>
      </div>
    </div>
  );
};

export default Section4;