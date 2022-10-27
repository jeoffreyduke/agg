import React from "react";
import styles from "../styles/Home.module.css";
import FAQ from "./FAQ";

const FourthSection = () => {
  return (
    <div className={styles.FourthSection}>
      <div className={styles.checkpoint}>
        <span>[ Checkpoint reached: our partners ]</span>
      </div>
      <div className={`${styles.secondHeading} ${styles.fourthHeading}`}>
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
        FAQS
      </div>
      <FAQ
        title="What is Play-to-Earn?"
        text="The play-to-earn concept is new gaming category that monetize 
        the gaming experience of players, 
        this gaming idea rewards players for winning battles and completing 
        gaming tasks with tokens or other cryptocurrency-based rewards that 
        are free to use in the games or trade on an open market. This is a 
        trail-blazing concept that is shaping the gaming world, which makes it 
        difficult for in-game assets difficult to be spent outside a centralized platform."
      />
      <FAQ
        title="What is an NFT?"
        text="An NFT is a unique and verifiable representation of a physical or 
        digital item on a blockchain. This technology allows important concepts 
        of physical ownership, such as provenance and authentication, to be 
        transferred digitally. In video games, NFTs gives gamers the opportunity 
        to make their in-game assets useable with a range of different games and platforms"
      />
      <FAQ
        title="How do NFT games work?"
        text="In decentralized game economies, there is an entire ecosystem of 
        players who buy, sell, and trade in-game items between each other. They 
        are able to do this because NFTs and cryptocurrencies provide the players 
        with digital property rights for their in-game assets. Thus, the players 
        actually become part-owners in the game and get to share in the value that 
        the community creates."
      />
      <FAQ
        title="How do people earn from NFT games? Where does the money come from?"
        text="In decentralized game economies, there is an entire ecosystem of players
         who buy, sell, and trade in-game items between each other. They are able to do
          this because NFTs and cryptocurrencies provide the players with digital property
           rights for their in-game assets. Thus, the players actually become part-owners 
           in the game and get to share in the value that the community creates."
      />
      <FAQ
        title="What are the most common game genres in play-to-earn?"
        text="The most popular play-to-earn game, Axie Infinity, it is a card-based strategy
         game. We also have plans of partnering with various play-to-earn games like car racing
          F1® Delta Time and REVV Racing, virtual worlds such as The Sandbox, RPGs such as Guild
          of Guardians, MMORPGs such as Ember Sword, and the grand strategy and space exploration 
          game Star Atlas, among others."
      />
      <FAQ
        title="How much money do I need to start?"
        text="It varies from game to game. Players can start with as little as US$20 in some games
         and upwards to US$1000 in the more expensive games."
      />
      <FAQ
        title="What is a scholarship?"
        text="The increasing cost of NFTs have made NFT games cost-prohibitive for some players. 
        Scholarships are revenue-sharing designed to help new players compete in the play-to-earn 
        space by renting NFTs to them so they can play the game without having to spend any money. 
        Any in-game rewards gotten from the use of the NFTs are shared between the player and the 
        owner of the NFT, with the player taking the largest cut."
      />
      <FAQ
        title="What is a gaming guild?"
        text="A guild is a community of players who regularly play together and collaborate for mutual
         benefit. AGG is a gaming guild that coordinates players around Africa with the sole aim of 
         earning crypto-based rewards in play-to-earn games, and ultimately, improving their lives. 
         It also invests in NFTs, such as in-game assets and virtual land, and makes them available 
         for guild members to borrow. AGG is made up of different community members, players, and 
         contributors who help each other get ease in to the play-to-earn space and earn income 
         through play-to-earn."
      />
      <FAQ
        title="Can NFT games provide a sustainable income?"
        text="Some Filipinos were able to earn two to three times the local minimum salary by playing
         the play-to-earn game Axie Infinity. However, the amount of money is hinged on several factors
          like the player's skill, how much time they spend playing the game, their win rate, and the 
          price movements of in-game tokens and assets on the open market. Many people play NFT games 
          to supplement their income"
      />
      <FAQ
        title="What are the requirements needed to participate in play-to-earn?"
        text="A mobile device or laptop/PC, internet connection, crypto wallet, and the NFT asset required
         to play the NFT game."
      />
      <FAQ
        title="Is crypto and NFT gaming safe?"
        text="Participating in NFT gaming comes with a certain amount of risk, so beginners are advised to
         DYOR (do your own research) regarding how to use crypto safely, securely, and responsibly. BitPinas,
          the Philippines' leading cryptocurrency news publication, created an guide on how to secure your 
          play-to-earn accounts and crypto wallets. Read it here."
      />
    </div>
  );
};

export default FourthSection;
