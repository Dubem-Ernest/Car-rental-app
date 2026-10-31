import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const useIsAuthorized = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("userToken");

    if (!token) {
      setIsAuthorized(false); //change later
      setLoading(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);

      // Check expiry
      const isExpired = decoded.exp * 1000 < Date.now();
      if (isExpired) {
        localStorage.removeItem("userToken");
        setIsAuthorized(false);
        setLoading(false);
        return;
      }

      // Check role
      const userRole = decoded.user?.role || decoded.role; // handle both formats

      console.log(userRole);
      if (userRole === "User") {
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    } catch (err) {
      console.error("Token decode failed:", err);
      localStorage.removeItem("userToken");
      setIsAuthorized(false);
    } finally {
      setLoading(false);
    }
  }, []);

  return { isAuthorized, loading };
};

export default useIsAuthorized;
