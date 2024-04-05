import {
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";

const AvailableDresses = () => {
  const [dresses, setDresses] = useState([]);

  useEffect(() => {
    // Fetch dress data from API or database
    // Replace this with actual API call or database fetch logic
    const fetchData = async () => {
      try {
        // Your fetch logic here
        const response = await fetch("api/dresses"); // Example API endpoint
        const data = await response.json();
        setDresses(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleRentClick = (dress) => {
    // Handle rent button click
    console.log("Renting dress:", dress);
    // Add your logic to proceed with renting the dress (e.g., redirect to payment page)
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container sx={{ marginTop: "100px" }}>
        <Typography variant="h3" align="center" gutterBottom>
          Wardrobe Wonders
        </Typography>
        <Grid container spacing={3} justifyContent="space-around">
          {dresses.map((dress) => (
            <Grid item key={dress.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={dress.dress_img}
                  alt={dress.dress_name}
                />
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    {dress.dress_name}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Price: Rs. {dress.dress_price} /day
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Advance: Rs. {dress.advance}
                  </Typography>
                  {dress.Stock > 0 ? (
                    <>
                      <Typography
                        variant="body1"
                        className="in-stock"
                        gutterBottom
                      >
                        In Stock
                      </Typography>
                      <form onSubmit={() => handleRentClick(dress)}>
                        <TextField
                          type="number"
                          label="Number of days"
                          name="days"
                          InputProps={{ inputProps: { min: 1, max: 5 } }}
                          required
                        />
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                        >
                          Rent
                        </Button>
                      </form>
                    </>
                  ) : (
                    <Typography
                      variant="body1"
                      className="out-of-stock"
                      gutterBottom
                    >
                      Out of Stock
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AvailableDresses;
