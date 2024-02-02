import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import "./App.css";
import { HomePage, RoleSelection, SignIn, SignUp,} from "./pages";
import About from "./pages/public/About";
import Offer from "./pages/public/Offer";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<Outlet />}>
        <Route index element={<HomePage />} />
        {/* <Route path="auth"> */}
          <Route path="Selection" element={<RoleSelection />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="Signin" element={<SignIn />} />
          <Route path="About" element={<About />} />
          <Route path="Offer" element={<Offer />} />
        {/* </Route> */}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
