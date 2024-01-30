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
          <Route path="selection" element={<RoleSelection />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
