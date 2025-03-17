import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Management from "./pages/management/Management";
import Metrics from "./pages/metrics/Metrics";

import Login from "./pages/login/Login";
import RootLayout from "./layout/RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<Login />} />
        <Route path="/" element={<RootLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="management" element={<Management />} />
          <Route path="metrics" element={<Metrics />} />
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
