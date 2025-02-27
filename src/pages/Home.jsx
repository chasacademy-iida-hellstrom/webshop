import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

const Home = () => {
    return (
      <div>
        <Header />
        <main className="p-4 bg-gray-100">
          <h1 className="text-xl font-bold text-center">Nyheter</h1>
          <Carousel /> {/* Nyhetskarusellen ska ligga här */}
        </main>
        <Footer />
      </div>
    );
  };
  
  export default Home;
  