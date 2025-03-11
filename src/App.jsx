import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import RootLayout from "./layout/RootLayout";
import GestaoReparos from "./pages/gestaoReparos/gestReparos";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<Login />} />
        <Route path="/" element={<RootLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="gestaoReparos" element={<GestaoReparos />} />
        </Route>
      </>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
