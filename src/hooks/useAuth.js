import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  saveRefreshToken,
  saveAccessToken as saveAccessToken,
} from "../services/acessToken";
import { login } from "../services/requestHTTP";

const useAuth = () => {
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("admin123");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate(); // Use useNavigate para redirecionar

  const signIn = async () => {
    try {
      console.log("Login: ", { email, password });
      const response = login({ email, password });
      console.log("data: ", JSON.stringify(response.data, null, 2));
      const { accessToken, refreshToken } = response.data;
      if (!response.data) return;
      saveAccessToken(accessToken);
      saveRefreshToken(refreshToken);

      navigate("/Dashboard");
    } catch (err) {
      console.log(`[AXIOS]: ${err}`);

      setLoginError(true);
      setPassword("");
    }
  };

  return {
    // Estado e manipulação do e-mail
    email,
    setEmail,

    // Estado e manipulação da senha
    password,
    setPassword,

    showPassword,
    setShowPassword,

    loginError,
    setLoginError,

    // Função de autenticação
    signIn,
  };
};

export default useAuth;
