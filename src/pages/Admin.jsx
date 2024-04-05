import React from "react";
import {
  Box,
  Container,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  TextField,
} from "@mui/material";
import { useState } from "react";

const Dashboard = () => {
  const [dresses, setDresses] = useState([]);
  const [formData, setFormData] = useState({
    dress_name: "",
    dress_price: "",
    Stock: "",
    advance: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddDress = () => {
    setDresses([...dresses, formData]);
    setFormData({
      dress_name: "",
      dress_price: "",
      Stock: "",
      advance: "",
    });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: 200,
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          bgcolor: "linear-gradient(to bottom, #33ccff 0%, #ffffff 100%)",
          paddingTop: "20px",
        }}
      >
        {/* Sidebar Content */}
      </Box>
      <Container sx={{ marginLeft: 200, padding: "20px" }}>
        <div className="header">Dashboard</div>
        {/* Content */}
        <Table sx={{ marginTop: "20px" }}>
          <TableHead>
            <TableRow>
              <TableCell>Dress name</TableCell>
              <TableCell>Dress Price</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Advance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dresses.map((dress, index) => (
              <TableRow key={index}>
                <TableCell>{dress.dress_name}</TableCell>
                <TableCell>{dress.dress_price}</TableCell>
                <TableCell>{dress.Stock}</TableCell>
                <TableCell>{dress.advance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* Add Dress Form */}
        <Box sx={{ maxWidth: 400, margin: "20px auto" }}>
          <TextField
            fullWidth
            label="Dress Name"
            name="dress_name"
            value={formData.dress_name}
            onChange={handleInputChange}
            sx={{ marginBottom: "15px" }}
          />
          {/* Add other form fields here */}
          <Button variant="contained" onClick={handleAddDress}>
            Add Dress
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Dashboard;
