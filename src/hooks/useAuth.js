import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveAccessToken } from "../services/acessToken";
import { login } from "../services/requestHTTP";

const useAuth = () => {
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("admin123");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate(); // Use useNavigate para redirecionar

  const signIn = async () => {
    try {
      const response = await login({ email, password });

      if (response.status !== 200) return;

      const { accessToken } = response.data;
      saveAccessToken(accessToken);
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
