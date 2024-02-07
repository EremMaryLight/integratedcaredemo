import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { GlobalPatientContext } from "../context/GlobalPatientUser";

export default function PrivateLayoutPatient() {
  const { userPatient } = useContext(GlobalPatientContext);
  const location = useLocation();
  return userPatient && userPatient.confirmed ? (
    <Outlet />
  ) : userPatient && !userPatient.confirmed ? (
    <Navigate to={"/auth/confirm"} replace state={location.pathname} />
  ) : (
    <Navigate to={"/auth/signin"} replace state={location.pathname} />
  );
}
