import {
  Box,
  Container,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Modal,
  Button,
  TextField,
  styled,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Avatar,
  IconButton,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import { BASE_URL } from "../config/axiosConfig";
import axios from "axios";
import ResponsiveAppBar from "../components/Navbar";
import { Delete, Edit, PlusOne } from "@mui/icons-material";

const StyledContainer = styled(Container)({
  textAlign: "center",
  background: "#fff",
  margin: "50px auto",
  padding: "20px",
  width: "500px",
});

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "15px",
});

const StyledInput = styled(TextField)({
  marginBottom: "10px",
});

const StyledButton = styled(Button)({
  marginTop: "20px",
});

const Dashboard = () => {
  const [dresses, setDresses] = useState([]);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    advance: "",
    category: "",
    image: "",
  });

  const handleClose = () => setOpen((prev) => !prev);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddDress = () => {
    console.log(formData);
    axios
      .post(`${BASE_URL}/products/create`, formData)
      .then((res) => {
        console.log("object", res);
        setDresses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // setDresses([...dresses, formData]);
    setFormData({
      name: "",
      price: "",
      stock: "",
      advance: "",
      category: "",
      image: "",
    });
  };
  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      category: event.target.value,
    }));
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/products`)
      .then((res) => {
        console.log("object", res);
        setDresses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = async (_id) => {
    await axios
      .post(`${BASE_URL}/products/delete`, { _id })
      .then((res) => {
        console.log("object", res);
        setDresses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{ padding: "20px" }}>
        <Table sx={{ marginTop: "20px" }}>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Dress name</TableCell>
              <TableCell>Dress Price</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Advance</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  startIcon={<PlusOne />}
                  onClick={handleClose}
                >
                  Add Dress
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(dresses) &&
              dresses?.map((dress, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <img
                      style={{ width: 100, height: 100, objectFit: "contain" }}
                      src={dress?.image}
                    />
                  </TableCell>
                  <TableCell>{dress?.name}</TableCell>
                  <TableCell>{dress?.price}</TableCell>
                  <TableCell>{dress?.stock}</TableCell>
                  <TableCell>{dress?.advance}</TableCell>
                  <TableCell>{dress?.category}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={2}>
                      {/* <IconButton>
                      <Edit />
                    </IconButton> */}
                      <IconButton onClick={() => handleDelete(dress._id)}>
                        <Delete
                          sx={{
                            color: "#cc0000",
                          }}
                        />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <Box mt={5}>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <StyledContainer>
              <Typography variant="h6">Add Dress</Typography>
              <StyledForm onSubmit={handleAddDress}>
                <StyledInput
                  type="text"
                  id="image"
                  name="image"
                  fullWidth
                  label="Image URL"
                  value={formData.image}
                  required
                  variant="outlined"
                  onChange={handleInputChange}
                />
                <StyledInput
                  type="text"
                  id="name"
                  name="name"
                  fullWidth
                  label="Dress Name"
                  value={formData.name}
                  required
                  variant="outlined"
                  onChange={handleInputChange}
                />
                <StyledInput
                  type="text"
                  id="price"
                  name="price"
                  fullWidth
                  required
                  variant="outlined"
                  label="Price"
                  value={formData.price}
                  onChange={handleInputChange}
                />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formData.category}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={"men"}>Men's</MenuItem>
                    <MenuItem value={"women"}>Women's</MenuItem>
                  </Select>
                </FormControl>
                <StyledInput
                  fullWidth
                  type="text"
                  id="stock"
                  name="stock"
                  required
                  variant="outlined"
                  label="Stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                />
                <StyledInput
                  fullWidth
                  type="text"
                  id="advance"
                  name="advance"
                  required
                  variant="outlined"
                  label="Advance"
                  value={formData.advance}
                  onChange={handleInputChange}
                />
                <StyledButton fullWidth type="submit" variant="contained">
                  Add Dress
                </StyledButton>
              </StyledForm>
            </StyledContainer>
          </Modal>
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
