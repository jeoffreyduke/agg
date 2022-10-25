import Image from "next/image";
import React, { useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";
import gsap from "gsap";

const ThirdSection = () => {
  const firstTop = useRef<HTMLDivElement>(null);
  const secTop = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // use a timeline to start the secTop animation after the firstTop animation
    // let the two flow in from the left concurrently and continuosly
  }, []);

  return (
    <div className={styles.ThirdSection}>
      <div className={styles.checkpoint}>
        <span>[ Checkpoint reached: our partners ]</span>
      </div>
      <div className={styles.secondHeading}>
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H22C22.8284 0.5 23.5 1.17157 23.5 2V22C23.5 22.8284 22.8284 23.5 22 23.5H8.82843C8.4306 23.5 8.04907 23.342 7.76777 23.0607L0.939339 16.2322C0.658035 15.9509 0.5 15.5694 0.5 15.1716V2Z"
              stroke="currentColor"
            ></path>
          </svg>
        </span>
        OUR PARTNERS
      </div>
      <div className={styles.sponsorCon}>
        <div className={styles.sponsor}>
          <div className={styles.sponsorDesc}>
            {`LBank Cryptocurrency Exchange - is the world's leading crypto
            trading platform providing safe and professional services for global
            crypto users.`}
          </div>
          <div className={styles.sponsorImg}>
            <Image
              src={"/assets/images/partners/Lbank.svg"}
              alt="sponsor"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className={styles.sponsor}>
          <div className={styles.sponsorDesc}></div>
          <div className={styles.sponsorImg}>
            <Image
              src={"/assets/images/partners/Reef.svg"}
              alt="sponsor"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className={styles.sponsor}>
          <div className={styles.sponsorDesc}></div>
          <div className={styles.sponsorImg}>
            <Image
              src={"/assets/images/partners/Patricia.svg"}
              alt="sponsor"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className={styles.sponsor}>
          <div className={styles.sponsorDesc}></div>
          <div className={styles.sponsorImg}>
            <Image
              src={"/assets/images/partners/Dimension11.svg"}
              alt="sponsor"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className={styles.sponsor}>
          <div className={styles.sponsorDesc}>
            DECA4 brings together thought leaders and innovators to identify how
            clients can leverage blockchain in their business. With experts from
            software development and consulting, legal, marketing, educational,
            business development organizations, we are ideally positioned to
            assist you in building a blockchain solution which suits your needs.
          </div>
          <div className={styles.sponsorImg}>
            <Image
              src={"/assets/images/partners/deca4.svg"}
              alt="sponsor"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
