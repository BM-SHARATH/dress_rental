/* eslint-disable react/prop-types */
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Button,
  Stack,
} from "@mui/material";

import { styled } from "@mui/system";
import { initPayment } from "../utils/initPayment";
import { useState } from "react";

const StyledCard = styled(Card)({
  width: "calc(25% - 40px)",
  margin: "10px",
  padding: 0,
  border: "1px solid #ddd",
  borderRadius: 10,
  overflow: "hidden",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",

  "&:hover": {
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
  },
});

const StyledCardContent = styled(CardContent)({
  padding: "10px",
});

const StyledCardMedia = styled(CardMedia)({
  width: "100%",
  height: "300px",
  objectFit: "contain",
});

const StyledTypography = styled(Typography)({
  marginBottom: "10px",
});

const StyledPriceTypography = styled(Typography)({
  fontWeight: "bold",
});

const StyledButton = styled(Button)({
  marginTop: "20px",
});
const ProductCard = ({ dress }) => {
  const [qty, setQty] = useState(0);
  const handlePayment = async (dress) => {
    if (qty == 0) return alert("Select any quantity");
    await initPayment(dress, qty);
  };
  return (
    <StyledCard>
      <StyledCardMedia component="img" image={dress.image} alt={dress.name} />
      <StyledCardContent>
        <StyledTypography variant="body1">{dress.name}</StyledTypography>
        <StyledPriceTypography variant="body1">
          Price: Rs. {dress.price} /day
        </StyledPriceTypography>
        <StyledPriceTypography variant="body1">
          Advance: Rs. {dress.advance}
        </StyledPriceTypography>
        <Typography
          variant="body1"
          sx={{ color: dress.stock > 0 ? "green" : "red" }}
        >
          {dress.stock > 0 ? `${dress.stock} In Stock` : "Out of Stock"}
        </Typography>
        {
          <Stack spacing={2}>
            <TextField
              disabled={dress.stock <= 0}
              type="number"
              id="days"
              size="small"
              value={qty}
              name="days"
              fullWidth
              label="Days"
              onChange={(e) => setQty(e.target.value)}
              inputProps={{ min: 1, max: 5 }}
              required
            />
            <StyledButton
              onClick={() => handlePayment(dress)}
              disabled={dress.stock <= 0}
              variant="contained"
              fullWidth
              type="submit"
            >
              Rent
            </StyledButton>
          </Stack>
        }
      </StyledCardContent>
    </StyledCard>
  );
};

export default ProductCard;
