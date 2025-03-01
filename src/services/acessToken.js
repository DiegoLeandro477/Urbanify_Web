import CryptoJS from "crypto-js";

const secretKey = import.meta.env.VITE_URBANIFY_SECRET_KEY; // Nunca expor publicamente

export const saveToken = (token) => {
  const encryptedToken = CryptoJS.AES.encrypt(token, secretKey).toString();
  localStorage.setItem("token", encryptedToken);
  console.log(
    "token: ",
    JSON.stringify({ token: token, crypt: encryptedToken }, null, 2)
  );
};

export const getToken = () => {
  const encryptedToken = localStorage.getItem("token");
  if (!encryptedToken) return null;
  console.log("token -> ", encryptedToken);
  const bytes = CryptoJS.AES.decrypt(encryptedToken, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};
