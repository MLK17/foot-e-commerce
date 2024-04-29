import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333", // Couleur de fond du footer
        color: "#fff", // Couleur du texte
        textAlign: "center",
        padding: "20px 0", // Espacement intérieur du footer
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
      }}
    >
      <Typography variant="body1">
        © 2024 Votre Nom / Entreprise. Tous droits réservés.
      </Typography>
    </Box>
  );
};

export default Footer;
