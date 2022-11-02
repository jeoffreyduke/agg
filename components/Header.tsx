import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import gsap from "gsap";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth <= 480) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShowMenu = () => {
    gsap.to(menuRef.current, {
      duration: 0.2,
      display: "block",
      ease: "power3.inOut",
    });
    gsap.to(menuRef.current, {
      duration: 0.4,
      width: "100vw",
      ease: "power4.inOut",
    });

    setShowMenu(true);
  };

  const handleHideMenu = () => {
    if (showMenu) {
      gsap.to(menuRef.current, {
        duration: 0.2,
        display: "none",
        ease: "power3.inOut",
      });
      gsap.to(menuRef.current, {
        duration: 0.4,
        width: "0",
        ease: "power4.inOut",
      });

      setShowMenu(false);
    }
  };

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
              onClick={showMenu ? handleHideMenu : handleShowMenu}
            >
              {showMenu ? "Close" : "Menu"}
            </div>
            <div className={styles.menuDropDown} ref={menuRef}>
              {showMenu && (
                <>
                  <div className={styles.mobMenuItem}>STAKING</div>
                  <div className={styles.mobMenuItem}>SOCIALS</div>
                  <div className={styles.mobMenuItem}>PARTNERS</div>
                  <div className={styles.mobMenuItem}>FAQ</div>
                  <div className={styles.btnsDiv}>
                    <button className={styles.btn}>Connect Wallet</button>
                    <br />
                    <button className={styles.btn}>WHITEPAPER</button>
                  </div>
                </>
              )}
            </div>
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
