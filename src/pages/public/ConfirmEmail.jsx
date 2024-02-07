import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { ConfirmMail, ConfirmMailApprove } from "../../component";
import { useState } from "react";

export default function ConfirmEmail() {
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  if (!location.state) {
    return <Navigate to={"?"} replace />;
  }

  return (
    <section className="grid w-full h-screen place-content-center">
      {/* <ConfirmMailApprove onclick={() => navigate(location.state)} /> */}
      <ConfirmMail />
    </section>
  );
}
