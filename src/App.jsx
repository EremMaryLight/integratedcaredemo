import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import "./App.css";
import {
  ConfirmEmail,
  ContactUs,
  HomePage,
  RoleSelection,
  SignIn,
  SignUp,
} from "./pages";
import RootLayout from "./layout/RootLayout";
import PrivateLayoutPatient from "./layout/PrivateLayoutPatient";
import { GlobalPatientProvider } from "./context/GlobalPatientUser";
import { GlobalPractitionerProvider } from "./context/GlobalPractitionerUser";
import PrivateLayoutPractitioner from "./layout/PrivateLayoutPractitioner";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<Outlet />}>
        {/* Landing page */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
        {/* Authentication */}
        <Route path="auth">
          <Route path="Selection" element={<RoleSelection />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="Signin" element={<SignIn />} />
          <Route path="confirm" element={<ConfirmEmail />} />
        </Route>
        {/* Patient protected route */}
        <Route
          path="/patient"
          element={
            <GlobalPatientProvider>
              <PrivateLayoutPatient />
            </GlobalPatientProvider>
          }
        ></Route>
        {/* Practitioner protected route */}
        <Route
          path="practitioner"
          element={
            <GlobalPractitionerProvider>
              <PrivateLayoutPractitioner />
            </GlobalPractitionerProvider>
          }
        ></Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
