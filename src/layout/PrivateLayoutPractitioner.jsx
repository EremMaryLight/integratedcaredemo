import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { GlobalPractitionerContext } from "../context/GlobalPractitionerUser";

export default function PrivateLayoutPractitioner() {
  const { userPractitioner } = useContext(GlobalPractitionerContext);
  return userPractitioner ? <Outlet /> : <Navigate to={"/auth/signin"} />;
}
