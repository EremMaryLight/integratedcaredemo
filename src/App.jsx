import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import "./App.css";
import { HomePage, RoleSelection, SignIn, SignUp } from "./pages";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<Outlet />}>
        <Route index element={<HomePage />} />
        <Route path="auth">
          <Route path="Selection" element={<RoleSelection />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="Signin" element={<SignIn />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
