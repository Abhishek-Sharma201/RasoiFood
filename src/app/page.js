<<<<<<< Updated upstream
import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
=======
import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './components/Home/Home';  // Correct path to HomePage
import Head from 'next/head';
import Link from 'next/link';
>>>>>>> Stashed changes

export default function Page() {
  return (
    <div>
      <Head>
        <title>Discover Great Food & Places - My Food App</title>
        <meta name="description" content="Find the best restaurants, cafes, and food spots near you." />
      </Head>
      
      <Nav />
<<<<<<< Updated upstream
      <Hero />
=======
      
      {/* HomePage Component */}
      <HomePage />

      {/* Login and Signup Links */}
      {/* <div className="flex justify-center mt-8 space-x-4">
        <Link href="/login" className="px-4 py-2 bg-blue-500 text-white rounded">Login</Link>
        <Link href="/signup" className="px-4 py-2 bg-green-500 text-white rounded">Sign Up</Link>
      </div> */}

>>>>>>> Stashed changes
      <Footer />
    </div>
  );
}
