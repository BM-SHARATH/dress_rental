import React from "react";
import { Container, Typography, Button, Box, IconButton } from "@mui/material";
import { Home as HomeIcon } from "@mui/icons-material";

const AboutUs = () => {
  const goToHomePage = () => {
    window.location.href = "/";
  };
  const goBack = () => {
    window.history.back();
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: 'url("assets/f.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
        position: "relative",
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: "5%",
          left: "5%",
          width: "40px",
          height: "40px",
          backgroundColor: "transparent",
          backgroundImage: 'url("assets/homeicon.png")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          cursor: "pointer",
        }}
        onClick={goToHomePage}
      >
        <HomeIcon />
      </IconButton>
      <Container
        sx={{
          maxWidth: "800px",
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <Typography variant="h1">Wardrobe Wonders</Typography>
        <Typography variant="h2" sx={{ marginTop: "20px" }}>
          <u>About Us</u>
        </Typography>
        <Typography
          variant="h3"
          sx={{ color: "black", fontSize: "50px", marginTop: "20px" }}
        >
          How Dress Rental Works
        </Typography>
        <Typography variant="body1" sx={{ color: "#666", marginTop: "20px" }}>
          Dress rental is a convenient and cost-effective way to access designer
          clothing for special occasions without the need to purchase expensive
          items that may only be worn once. Here's how it works:
        </Typography>
        <ol sx={{ color: "#666", marginTop: "20px" }}>
          <li>
            <strong>Browse:</strong> Browse our collection of dresses and choose
            the one that suits your style and occasion.
          </li>
          <li>
            <strong>Reserve:</strong> Reserve the dress for your desired rental
            period. You can typically rent dresses for a few days or up to a
            week, depending on your needs.
          </li>
          <li>
            <strong>Try On:</strong> Once reserved, the dress will be shipped to
            your address. Try on the dress to ensure it fits perfectly and meets
            your expectations.
          </li>
          <li>
            <strong>Wear:</strong> Wear the dress to your event and enjoy
            looking stunning in designer attire.
          </li>
          <li>
            <strong>Return:</strong> After your event, simply return the dress
            using the provided packaging and shipping label. No need to worry
            about dry cleaning—we take care of that for you!
          </li>
        </ol>
        <Typography variant="body1" sx={{ color: "#666", marginTop: "20px" }}>
          At Dress Rental, we strive to make the dress rental process as
          seamless as possible, providing high-quality designer dresses and
          excellent customer service.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#4CAF50",
            color: "white",
            borderRadius: "8px",
            marginTop: "20px",
          }}
          onClick={goBack}
        >
          Back
        </Button>
      </Container>
    </Box>
  );
};

export default AboutUs;
