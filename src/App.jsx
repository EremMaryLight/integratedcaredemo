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
  PatientDashboard,
  PractitionerDashboard,
  PractitionerFAQ,
  PractitionerNotif,
  PractitionerPatients,
  PractitionerSettings,
  PractitionerSupport,
  RoleSelection,
  SignIn,
  SignUp,
} from "./pages";
import {
  RootLayout,
  PrivateLayoutPatient,
  PrivateLayoutPractitioner,
} from "./layout";
import { GlobalPatientProvider } from "./context/GlobalPatientUser";
import { GlobalPractitionerProvider } from "./context/GlobalPractitionerUser";
import { Suspense } from "react";
import { MainLoader } from "./component";

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
            <Suspense fallback={<p>loading route..</p>}>
              <GlobalPatientProvider>
                <PrivateLayoutPatient />
              </GlobalPatientProvider>
            </Suspense>
          }
        >
          <Route path="dashboard" element={<PatientDashboard />} />
        </Route>
        {/* Practitioner protected route */}
        <Route
          path="practitioner"
          element={
            <Suspense fallback={<MainLoader />}>
              <GlobalPractitionerProvider>
                <PrivateLayoutPractitioner />
              </GlobalPractitionerProvider>
            </Suspense>
          }
        >
          <Route path="dashboard" element={<PractitionerDashboard />} />
          <Route path="patients" element={<PractitionerPatients />} />
          <Route path="notification" element={<PractitionerNotif />} />
          <Route path="settings" element={<PractitionerSettings />} />
          <Route path="faq" element={<PractitionerFAQ />} />
          <Route path="support" element={<PractitionerSupport />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
