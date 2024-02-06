import { useContext } from "react";
import { GlobalPatientContext } from "../context/GlobalPatientUser";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateLayoutPatient() {
  const { userPatient } = useContext(GlobalPatientContext);
  return userPatient ? <Outlet /> : <Navigate to={"/auth/signin"} />;
}
