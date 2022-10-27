import React, { useState, useRef, LegacyRef } from "react";
import styles from "../styles/FAQ.module.css";
import gsap from "gsap";

interface FAQProps {
  title: string;
  text: string;
}

const FAQ = ({ title, text }: FAQProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const content = useRef<HTMLDivElement>(null);
  const iconDiv = useRef<HTMLDivElement>(null);
  const icon = useRef<any>(null);

  const handleEnterHover = () => {
    gsap.to(iconDiv.current, {
      color: "#f5a317",
      ease: "power1.out",
    });
    gsap.to(iconDiv.current, {
      rotate: "360deg",
      ease: "power1.out",
    });
  };
  const handleLeaveHover = () => {
    gsap.to(iconDiv.current, {
      color: "#fff",
      ease: "power1.out",
    });

    gsap.to(iconDiv.current, {
      rotate: "-360deg",
      ease: "power1.out",
    });
  };

  const handleClick = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      gsap.to(content.current, {
        display: "block",
        ease: "power1.out",
      });
      gsap.to(iconDiv.current, {
        color: "#fff",
        ease: "power1.out",
      });
    } else if (isOpen) {
      gsap.to(content.current, {
        display: "none",
        ease: "power1.out",
      });
      gsap.to(iconDiv.current, {
        color: "#f5a317",
        ease: "power1.out",
      });
    }
  };

  return (
    <div
      className={styles.FAQ}
      onMouseEnter={handleEnterHover}
      onMouseLeave={handleLeaveHover}
      onClick={handleClick}
    >
      <div className={styles.icon} ref={iconDiv}>
        [
        {isOpen ? (
          <>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              ref={icon}
            >
              <g data-name="Layer 2">
                <g data-name="arrow-downward">
                  <rect
                    width="24"
                    height="24"
                    transform="rotate(-90 12 12)"
                    opacity="0"
                  />
                  <path d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05 2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17z" />
                </g>
              </g>
            </svg>
          </>
        ) : (
          <>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g data-name="Layer 2">
                <g data-name="arrow-up">
                  <rect
                    width="24"
                    height="24"
                    transform="rotate(90 12 12)"
                    opacity="0"
                  />
                  <path d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1 2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1z" />
                </g>
              </g>
            </svg>
          </>
        )}
        ]
      </div>
      <span className={styles.title}>{title}</span>
      <div className={styles.content} ref={content}>
        {text}
      </div>
    </div>
  );
};

export default FAQ;
