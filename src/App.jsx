import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import "./App.css";
import { ContactUs, HomePage, RoleSelection, SignIn, SignUp } from "./pages";
import RootLayout from "./layout/RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<Outlet />}>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
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
