import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState} from "react";
import { useUser } from "../../provider/contexts/userContext";

interface AdminProtectedRouteProps {
  children: any;
}

function AdminProtectedRoute({ children }: AdminProtectedRouteProps) {
  const [token] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  const { user } = useUser();
  useEffect(
    function () {
      if (token === "null" && !user.isAuth) navigate("/admin/login");
    },
    [token, navigate, user.isAuth]
  );
  return token !== "null" && user.isAuth ? children : null;
}

export default AdminProtectedRoute;
