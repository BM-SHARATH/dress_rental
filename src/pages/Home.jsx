import ResponsiveAppBar from "../components/Navbar";
import { Box, Typography, Stack } from "@mui/material";
import axios from "axios";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { BASE_URL } from "../config/axiosConfig";
import ProductCard from "../components/ProductCard";
const StyledContainer = styled(Box)({
  width: "100%",
  margin: "auto",
  display: "flex",
  flexWrap: "wrap",
});
const Home = () => {
  const [mdress, setMDresses] = useState([]);
  const [fdress, setFDresses] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/products/men`)
      .then((res) => {
        setMDresses(res.data.slice(0, 4));
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${BASE_URL}/products/women`)
      .then((res) => {
        setFDresses(res.data.slice(0, 4));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <ResponsiveAppBar />
      <Stack>
        <Stack>
          <Typography mt={3} mx={2} variant="h5">
            Popular Woman's Collections
          </Typography>
          <StyledContainer>
            {Array.isArray(fdress) &&
              fdress.map((dress, index) => (
                <ProductCard key={index} dress={dress} />
              ))}
          </StyledContainer>
        </Stack>
        <Stack>
          <Typography mt={3} mx={2} variant="h5">
            Popular Men's Collections
          </Typography>
          <StyledContainer>
            {Array.isArray(mdress) &&
              mdress.map((dress, index) => (
                <ProductCard key={index} dress={dress} />
              ))}
          </StyledContainer>
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
