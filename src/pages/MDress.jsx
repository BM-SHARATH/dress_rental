import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { styled } from "@mui/system";

const StyledContainer = styled(Box)({
  width: "80%",
  margin: "auto",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  paddingTop: 100,
});

const StyledCard = styled(Card)({
  width: "calc(33.33% - 40px)",
  margin: 20,
  padding: 15,
  border: "1px solid #ccc",
  borderRadius: 5,
  boxSizing: "border-box",
});

const StyledCardContent = styled(CardContent)({
  textAlign: "center",
});

const StyledCardMedia = styled(CardMedia)({
  width: "100%",
  height: "auto",
});

const StyledHomeIcon = styled(HomeIcon)({
  width: 40,
  height: 40,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  cursor: "pointer",
  marginBottom: 20,
  position: "absolute",
  top: "5%",
  left: "5%",
});

const dresses = [
  {
    dress_name: "Dress 1",
    dress_price: 500,
    advance: 100,
    stock: 5,
    dress_img: "https://via.placeholder.com/150",
  },
  {
    dress_name: "Dress 2",
    dress_price: 600,
    advance: 150,
    stock: 0,
    dress_img: "https://via.placeholder.com/150",
  },
  {
    dress_name: "Dress 1",
    dress_price: 500,
    advance: 100,
    stock: 5,
    dress_img: "https://via.placeholder.com/150",
  },
  {
    dress_name: "Dress 2",
    dress_price: 600,
    advance: 150,
    stock: 0,
    dress_img: "https://via.placeholder.com/150",
  },
  {
    dress_name: "Dress 1",
    dress_price: 500,
    advance: 100,
    stock: 5,
    dress_img: "https://via.placeholder.com/150",
  },
  {
    dress_name: "Dress 2",
    dress_price: 600,
    advance: 150,
    stock: 0,
    dress_img: "https://via.placeholder.com/150",
  },
  // Add more dress objects as needed
];

const AvailableDresses = () => {
  return (
    <div>
      <StyledHomeIcon onClick={() => (window.location.href = "index.php")} />
      <StyledContainer>
        {dresses.map((dress, index) => (
          <StyledCard key={index}>
            <StyledCardMedia
              component="img"
              image={dress.dress_img}
              alt={dress.dress_name}
            />
            <StyledCardContent>
              <Typography variant="h5" component="h2">
                {dress.dress_name}
              </Typography>
              <Typography variant="body1">
                Price: Rs. {dress.dress_price} /day
              </Typography>
              <Typography variant="body1">
                Advance: Rs. {dress.advance}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: dress.stock > 0 ? "green" : "red" }}
              >
                {dress.stock > 0 ? `${dress.stock} In Stock` : "Out of Stock"}
              </Typography>
              {dress.stock > 0 && (
                <div>
                  <form method="post" action="generate_bill1.php">
                    <input
                      type="hidden"
                      name="dress_name"
                      value={dress.dress_name}
                    />
                    <input
                      type="hidden"
                      name="dress_price"
                      value={dress.dress_price}
                    />
                    <input type="hidden" name="advance" value={dress.advance} />
                    <Stack spacing={2}>
                      <TextField
                        type="number"
                        id="days"
                        size="small"
                        name="days"
                        fullWidth
                        label="Days"
                        inputProps={{ min: 1, max: 5 }}
                        required
                      />
                      <Button variant="contained" fullWidth type="submit">
                        Rent
                      </Button>
                    </Stack>
                  </form>
                </div>
              )}
            </StyledCardContent>
          </StyledCard>
        ))}
      </StyledContainer>
    </div>
  );
};

export default AvailableDresses;
