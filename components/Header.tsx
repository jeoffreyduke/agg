import Image from "next/image";
import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.logo}>
        <Image src="/assets/logo.svg" alt="logo" height={80} width={80} />
      </div>

      <nav className={styles.right}>
        <div>STAKING</div>
        <div>SOCIALS</div>
        <div>PARTNERS</div>
        <div>FAQ</div>
        <button className={styles.btn}>WHITEPAPER</button>
      </nav>
    </header>
  );
};

export default Header;
