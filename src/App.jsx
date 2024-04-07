import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import ContactUs from "./pages/Contact";
import AboutUs from "./pages/About";
import AvailableDresses from "./pages/MDress";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Fdress from "./pages/Fdress";
import Dashboard from "./pages/Admin";
import VerifyPayment from "./pages/VerifyPayment";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/m-dress" element={<AvailableDresses />} />
            <Route path="/w-dress" element={<Fdress />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/verify-payment" element={<VerifyPayment />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
