import { Navigate } from "react-router-dom";

const ProtectedRoutesAdmin = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("userToken");
  const role = localStorage.getItem("role");

  const navigate = useNavigate();
  // function presentPage() {
  //   navigate(-1);
  // }

  if (!token) return <Navigate to="/login" />;
  if (allowedRoles && !allowedRoles.includes(role))
    return <Navigate to="/unauthorized" />;

  return children;
};

export default ProtectedRoutesAdmin;
