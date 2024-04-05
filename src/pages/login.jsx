import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
const StyledContainer = styled(Box)({
  maxWidth: "400px",
  margin: "100px auto",
  backgroundColor: "#fff",
  padding: 20,
  borderRadius: 8,
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
});

const StyledForm = styled("form")({
  textAlign: "center",
});

const StyledInputGroup = styled("div")({
  marginBottom: 15,
});

const StyledButtonGroup = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: 20,
});

const StyledButton = styled(Button)({
  padding: "10px 20px",
  textTransform: "capitalize",
  color: "#fff",
  borderRadius: 5,
  cursor: "pointer",
});

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    navigate("/");
  };
  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <StyledInputGroup>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            fullWidth
            required
          />
        </StyledInputGroup>
        <StyledInputGroup>
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
          />
        </StyledInputGroup>
        <StyledButtonGroup>
          <StyledButton fullWidth variant="contained" type="submit">
            Sign In
          </StyledButton>
        </StyledButtonGroup>
      </StyledForm>
      <div style={{ textAlign: "center", marginTop: 15 }}>
        <Typography variant="body1">
          New User?{" "}
          <Link href="signup.html" color="primary">
            Sign Up
          </Link>
        </Typography>
      </div>
    </StyledContainer>
  );
};

export default Login;
