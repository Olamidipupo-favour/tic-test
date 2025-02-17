import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState, ReactNode } from "react";
import { useUser } from "../../provider/contexts/userContext";

interface ProtectedRouteProps {
  children: any;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [token] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  const {user} = useUser()
  useEffect(
    function () {
      if (token === 'null' && !user.isAuth) navigate("/auth");
    },
    [token, navigate, user.isAuth]
  );
  return token !== "null" && user.isAuth ? children : null;
}

export default ProtectedRoute;
