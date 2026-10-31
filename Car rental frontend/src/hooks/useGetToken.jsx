import { useEffect, useState } from "react";

const useGetToken = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenValue = localStorage.getItem("userToken");

    if (!tokenValue) {
      console.log("No token!!")
    }

    setToken(tokenValue);
  }, []);

  return token;
};

export default useGetToken;
