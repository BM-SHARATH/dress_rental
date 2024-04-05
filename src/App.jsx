import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import ContactUs from "./pages/Contact";
import AboutUs from "./pages/About";
import AvailableDresses from "./pages/MDress";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/m-dress" element={<AvailableDresses />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
