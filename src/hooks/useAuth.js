import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveToken } from "../services/acessToken";

const url_api = import.meta.env.VITE_URBANIFY_API;

const useAuth = () => {
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("admin123");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate(); // Use useNavigate para redirecionar

  const signIn = async () => {
    try {
      console.log("Login: ", { email, password });
      const response = await axios.post(`${url_api}/user/login`, {
        email,
        password,
      });
      const { token } = response.data;
      if (!response.data) return;
      saveToken(token);
      if (response) navigate("/Dashboard");
    } catch (err) {
      console.log(`[AXIOS]: ${err}`);
    }
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    showPassword,
    setShowPassword,
    signIn,
  };
};

export default useAuth;
