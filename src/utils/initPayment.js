import axios from "axios";
import { BASE_URL } from "../config/axiosConfig";
export const initPayment = async (dress, quantity) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  console.log("object", dress);
  if (!user) {
    alert("Please Login to continue");
    return;
  }
  try {
    const reqData = {
      dress,
      quantity,
      email: user?.email,
    };
    const response = await axios.post(`${BASE_URL}/payment`, reqData);
    const data = response.data;
    if (data.success) {
      localStorage.setItem("tID", data.data.merchantTransactionId);
      localStorage.setItem("dressId", dress._id);
      localStorage.setItem("quantity", quantity);
      console.log(localStorage.getItem("dressId"));
      window.location.href = data.data.instrumentResponse.redirectInfo.url;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
