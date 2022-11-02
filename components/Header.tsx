import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 480) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header
      className={
        showMenu ? `${styles.Header} ${styles.headerOpen}` : styles.Header
      }
    >
      <div className={styles.logo}>
        <Image
          src="/assets/logo.svg"
          alt="logo"
          height={isMobile ? 50 : 80}
          width={isMobile ? 50 : 80}
        />
      </div>

      <nav className={styles.right}>
        {isMobile ? (
          <>
            <div
              className={styles.menuTxt}
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? "Close" : "Menu"}
            </div>
            {showMenu && (
              <div className={styles.menuDropDown}>
                <div className={styles.mobMenuItem}>STAKING</div>
                <div className={styles.mobMenuItem}>SOCIALS</div>
                <div className={styles.mobMenuItem}>PARTNERS</div>
                <div className={styles.mobMenuItem}>FAQ</div>
                <div className={styles.btnsDiv}>
                  <button className={styles.btn}>Connect Wallet</button>
                  <br />
                  <button className={styles.btn}>WHITEPAPER</button>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div className={styles.menuItem}>STAKING</div>
            <div className={styles.menuItem}>SOCIALS</div>
            <div className={styles.menuItem}>PARTNERS</div>
            <div className={styles.menuItem}>FAQ</div>
            <button className={styles.btn}>WHITEPAPER</button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
