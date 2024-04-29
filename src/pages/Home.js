import { Box } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";
import Slide from "../components/slider/Slide";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
   
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#F5F5F5",
          width: "100%",
          height: "54px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Vidéo à l'intérieur de la Box */}
        <video
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "auto" }} // Vidéo occupant toute la largeur
        >
          <source src="lien_de_la_video.mp4" type="video/mp4" />
          {/* Ajoutez d'autres sources de vidéo si nécessaire pour la compatibilité des navigateurs */}
        </video>
      </Box>

      <Slide />
      <Footer />
    </>
  );
};

export default Home;
