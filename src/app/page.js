"use client";

import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HomePage from "./components/Home/Home"; // Correct path to HomePage
import Head from "next/head";

export default function Page() {
  return (
    <div>
      <Head>
        <title>Discover Great Food & Places - My Food App</title>
        <meta
          name="description"
          content="Find the best restaurants, cafes, and food spots near you."
        />
      </Head>

      <Nav />
      <Hero />
      <HomePage />
      <Footer />
    </div>
  );
}
