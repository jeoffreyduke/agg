import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import CheckPoint from "./CheckPoint";
gsap.registerPlugin(ScrollTrigger);

const ThirdSection = () => {
  const section = useRef<HTMLDivElement>(null);
  const lbankTxt = useRef<HTMLDivElement>(null);
  const lbankImg = useRef<HTMLDivElement>(null);
  const reefTxt = useRef<HTMLDivElement>(null);
  const reefImg = useRef<HTMLDivElement>(null);
  const patriciaTxt = useRef<HTMLDivElement>(null);
  const patriciaImg = useRef<HTMLDivElement>(null);
  const dimenTxt = useRef<HTMLDivElement>(null);
  const dimenImg = useRef<HTMLDivElement>(null);
  const decaTxt = useRef<HTMLDivElement>(null);
  const decaImg = useRef<HTMLDivElement>(null);

  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 900) {
      setIsSmallDevice(true);
    } else {
      setIsSmallDevice(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openSponsors = (
    left: React.RefObject<HTMLDivElement>,
    right: React.RefObject<HTMLDivElement>,
    id: string
  ) => {
    const tl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: section.current?.querySelector(id),
        scrub: 0.8,
        start: "top bottom",
        end: "top top",
      },
    });

    if (window.innerWidth <= 900) {
      gsap.to(right.current, {
        x: "-0%",
        duration: "5",
        ease: "power1.out",
        scrollTrigger: {
          trigger: right.current,
          scrub: 0.8,
          start: "top bottom",
          end: "top top",
        },
      });

      return;
    }

    if (window.innerWidth < 1400) {
      gsap.to(left.current, {
        x: "-310",
        duration: "5",
        ease: "power1.out",
        scrollTrigger: {
          trigger: left.current,
          scrub: 0.8,
          start: "top bottom",
          end: "top top",
        },
      });
      gsap.to(right.current, {
        x: "230",
        duration: "5",
        ease: "power1.out",
        scrollTrigger: {
          trigger: right.current,
          scrub: 0.8,
          start: "top bottom",
          end: "top top",
        },
      });

      return;
    }

    gsap.to(left.current, {
      x: "-50%",
      duration: "5",
      ease: "power1.out",
      scrollTrigger: {
        trigger: left.current,
        scrub: 0.8,
        start: "top bottom",
        end: "top top",
      },
    });
    gsap.to(right.current, {
      x: "50%",
      duration: "5",
      ease: "power1.out",
      scrollTrigger: {
        trigger: right.current,
        scrub: 0.8,
        start: "top bottom",
        end: "top top",
      },
    });
  };

  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
      openSponsors(lbankTxt, lbankImg, "#lbank");
      openSponsors(reefTxt, reefImg, "#reef");
      openSponsors(patriciaTxt, patriciaImg, "#patricia");
      openSponsors(dimenTxt, dimenImg, "#dimen");
      openSponsors(decaTxt, decaImg, "#deca");
    }, 1000);

    return () => {};
  }, [
    lbankTxt,
    lbankImg,
    reefTxt,
    reefImg,
    patriciaTxt,
    patriciaImg,
    dimenTxt,
    dimenImg,
    decaTxt,
    decaImg,
  ]);

  return (
    <div className={styles.ThirdSection} ref={section}>
      <CheckPoint checkpoint="Our Partners" />
      <div className={`${styles.secondHeading} ${styles.thirdHeading}`}>
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
        {isSmallDevice ? (
          <>
            <div className={styles.sponsor} id="lbank" ref={lbankImg}>
              <div className={styles.sponsorImg}>
                <Image
                  src={"/assets/images/partners/Lbank.svg"}
                  alt="sponsor"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.sponsorDesc}>
                {`LBank Cryptocurrency Exchange - is the world's leading crypto
            trading platform providing safe and professional services for global
            crypto users.`}
              </div>
            </div>
            <div className={styles.sponsor} id="reef" ref={reefImg}>
              <div className={styles.sponsorImg}>
                <Image
                  src={"/assets/images/partners/Reef.svg"}
                  alt="sponsor"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.sponsorDesc}>
                Reef chain is an EVM compatible blockchain for DeFi. It is fast,
                scalable, has low transaction costs and does no wasteful mining.
              </div>
            </div>
            <div className={styles.sponsor} id="patricia" ref={patriciaImg}>
              <div className={styles.sponsorImg}>
                <Image
                  src={"/assets/images/partners/Patricia.svg"}
                  alt="sponsor"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.sponsorDesc}>
                Patricia is an alternative payment solutions company that
                facilitates the easy use of cryptocurrencies for everyday
                transactions. By harnessing the intrinsic power of Blockchain
                technology, Patricia is set to make Crypto easy for mankind,
                hereby creating a new and sustainable path for the present and
                future generations.
              </div>
            </div>
            <div className={styles.sponsor} id="dimen" ref={dimenImg}>
              <div className={styles.sponsorImg}>
                <Image
                  src={"/assets/images/partners/Dimension11.svg"}
                  alt="sponsor"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.sponsorDesc}>
                Dimension11 Studios is an Indie game studio located in Lagos,
                Ile-Ife, and Dubai. Our goal as an indie game studio is to
                enrich the lives of everyday people by harnessing the latest
                technologies. This agenda is advanced right from the heart of
                Africa and across the world, by a legion of deeply creative,
                skilful and passionate people.
              </div>
            </div>
            <div className={styles.sponsor} id="deca" ref={decaImg}>
              <div className={styles.sponsorImg}>
                <Image
                  src={"/assets/images/partners/deca4.svg"}
                  alt="sponsor"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.sponsorDesc}>
                DECA4 brings together thought leaders and innovators to identify
                how clients can leverage blockchain in their business. With
                experts from software development and consulting, legal,
                marketing, educational, business development organizations, we
                are ideally positioned to assist you in building a blockchain
                solution which suits your needs.
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.sponsor} id="lbank">
              <div className={styles.sponsorDesc} ref={lbankTxt}>
                {`LBank Cryptocurrency Exchange - is the world's leading crypto
            trading platform providing safe and professional services for global
            crypto users.`}
              </div>
              <div className={styles.sponsorImg} ref={lbankImg}>
                <Image
                  src={"/assets/images/partners/Lbank.svg"}
                  alt="sponsor"
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <div className={styles.sponsor} id="reef">
              <div className={styles.sponsorDesc} ref={reefTxt}>
                Reef chain is an EVM compatible blockchain for DeFi. It is fast,
                scalable, has low transaction costs and does no wasteful mining.
              </div>
              <div className={styles.sponsorImg} ref={reefImg}>
                <Image
                  src={"/assets/images/partners/Reef.svg"}
                  alt="sponsor"
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <div className={styles.sponsor} id="patricia">
              <div className={styles.sponsorDesc} ref={patriciaTxt}>
                Patricia is an alternative payment solutions company that
                facilitates the easy use of cryptocurrencies for everyday
                transactions. By harnessing the intrinsic power of Blockchain
                technology, Patricia is set to make Crypto easy for mankind,
                hereby creating a new and sustainable path for the present and
                future generations.
              </div>
              <div className={styles.sponsorImg} ref={patriciaImg}>
                <Image
                  src={"/assets/images/partners/Patricia.svg"}
                  alt="sponsor"
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <div className={styles.sponsor} id="dimen">
              <div className={styles.sponsorDesc} ref={dimenTxt}>
                Dimension11 Studios is an Indie game studio located in Lagos,
                Ile-Ife, and Dubai. Our goal as an indie game studio is to
                enrich the lives of everyday people by harnessing the latest
                technologies. This agenda is advanced right from the heart of
                Africa and across the world, by a legion of deeply creative,
                skilful and passionate people.
              </div>
              <div className={styles.sponsorImg} ref={dimenImg}>
                <Image
                  src={"/assets/images/partners/Dimension11.svg"}
                  alt="sponsor"
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <div className={styles.sponsor} id="deca">
              <div className={styles.sponsorDesc} ref={decaTxt}>
                DECA4 brings together thought leaders and innovators to identify
                how clients can leverage blockchain in their business. With
                experts from software development and consulting, legal,
                marketing, educational, business development organizations, we
                are ideally positioned to assist you in building a blockchain
                solution which suits your needs.
              </div>
              <div className={styles.sponsorImg} ref={decaImg}>
                <Image
                  src={"/assets/images/partners/deca4.svg"}
                  alt="sponsor"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ThirdSection;
