import { lazy } from "react";

export { default as HomePage } from "./public/HomePage";
export { default as RoleSelection } from "./public/RoleSelection";
export { default as SignUp } from "./public/Signup";
export { default as SignIn } from "./public/Signin";
export { default as ForgotPassword } from "./public/ForgotPasword";
export { default as ContactUs } from "./public/ContactUs";
export { default as ConfirmEmail } from "./public/ConfirmEmail";
// ? Private Lazy Pages
export const PractitionerDashboard = lazy(() =>
  import("./private/PractitionerDashboard")
);
export const PatientDashboard = lazy(() =>
  import("./private/PatientDashboard")
);
export const PractitionerPatients = lazy(() =>
  import("./private/PractitionerPatients")
);
export const PractitionerNotif = lazy(() =>
  import("./private/PractitionerNotif")
);
export const PractitionerSettings = lazy(() =>
  import("./private/PractitionerSettings")
);
export const PractitionerFAQ = lazy(() => import("./private/PractitionerFaq"));
export const PractitionerSupport = lazy(() =>
  import("./private/PractitionerSupport")
);
