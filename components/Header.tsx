import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 480) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className={styles.Header}>
      <div className={styles.logo}>
        <Image
          src="/assets/logo.svg"
          alt="logo"
          height={isMobile ? 40 : 80}
          width={isMobile ? 40 : 80}
        />
      </div>

      <nav className={styles.right}>
        {isMobile ? (
          "Menu"
        ) : (
          <>
            <div>STAKING</div>
            <div>SOCIALS</div>
            <div>PARTNERS</div>
            <div>FAQ</div>
            <button className={styles.btn}>WHITEPAPER</button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
