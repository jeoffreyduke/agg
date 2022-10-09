import React, { useRef, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Particle from "../components/Particle";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tech4Pidgin</title>
        <meta name="description" content="Choraji" />
        <link rel="icon" href="/favicon.ico" />
        <script src="../components/Particles.js" defer></script>
      </Head>

      <Header />
      <Particle />
      <h1 className={styles.heading}>agg is a play-to-earn game guild</h1>
    </div>
  );
};

export default Home;
