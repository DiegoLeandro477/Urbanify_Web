import CryptoJS from "crypto-js";

const secretKey = import.meta.env.VITE_URBANIFY_SECRET_KEY; // Nunca expor publicamente

export const saveToken = (token) => {
  try {
    localStorage.setItem("token", token);
  } catch (err) {
    console.error("[ACESS-TOKEN]: ", err);
  }
};

export const getToken = () => {
  try {
    return localStorage.getItem("token");
  } catch (err) {
    console.error("[ACESS-TOKEN]: ", err);
    return null;
  }
};
