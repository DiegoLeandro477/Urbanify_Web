import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Importação corrigida
import { getAccessToken } from "../services/acessToken"; // Assumindo que getAccessToken retorna o token

const ProtectedRoute = () => {
  const token = getAccessToken(); // Chama a função para obter o token

  if (!token) {
    return <Navigate to="/" replace />; // Se não houver token, redireciona para login
  }

  try {
    const user = jwtDecode(token); // Decodifica o token para pegar a role
    if (user.role !== "ADMIN") {
      return <Navigate to="/" replace />; // Se o role não for ADMIN, redireciona
    }
    return <Outlet />; // Se for ADMIN, renderiza as rotas filhas protegidas
  } catch (error) {
    console.log(error); // Caso o token seja inválido
    return <Navigate to="/" replace />; // Redireciona para login se ocorrer erro ao decodificar
  }
};

export default ProtectedRoute;
