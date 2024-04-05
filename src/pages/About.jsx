import { Button } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="centered-text">
          <h1>Wardrobe Wonders</h1>
          <br />
        </div>
        <center>
          <u>
            <h1 div className="about">
              About us{" "}
            </h1>
          </u>
        </center>
        <h2>How Dress Rental Works</h2>
        <p>
          Dress rental is a convenient and cost-effective way to access designer
          clothing for special occasions without the need to purchase expensive
          items that may only be worn once. Here's how it works:
        </p>
        <ol>
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
        <p>
          At Dress Rental, we strive to make the dress rental process as
          seamless as possible, providing high-quality designer dresses and
          excellent customer service.
        </p>
      </div>
      <Button className="home-icon" onclick="goToHomePage()" />
    </div>
  );
};

export default About;
