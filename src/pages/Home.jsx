// In your Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import ViewButton from "../components/ViewButton";

const Home = () => {
  const navigate = useNavigate();

  const handleGoToICreate = () => {
    navigate("/icreate");
  };

  return (
    <section>
      <Hero />
      <div className="py-8 text-center">
        <ViewButton onClick={handleGoToICreate} />
      </div>
    </section>
  );
};

export default Home;
