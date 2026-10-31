import { useState, useEffect } from "react";

const useGetLocation = () => {
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function getListOfStates(countryCode, stateCode) {
    var headers = new Headers();
    headers.append(
      "X-CSCAPI-KEY",
      "R25TVVlLSW85ZmY1UTlQRkE0SDhtdkNZY2lNamdJenBTdDBDNVpyVg=="
    );

    var requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };

    // Pass Country & State Code -- Eg: Country Code : IN & State Code : MH
    fetch(
      `https://api.countrystatecity.in/v1/countries/${countryCode}/states/${stateCode}/cities`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setCities(result))
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            // Replace with your chosen geocoding API and API key
            const response = await fetch(
              `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=c8effe2fba744cc58fb606cf1e328122`
            );
            const data = await response.json();
            // console.log(data.results[0])
            // Adjust based on your API's response structure
            const { country_code: countryCode, iso3166_2: stateCode } =
              data.results[0];
            const stateCodeValue = stateCode.slice(3);
            // console.log([countryCode,stateCodeValue]);
            getListOfStates(countryCode, stateCodeValue);
          } catch (err) {
            setError(true)
            setErrorMsg("Error fetching country data.");
            console.error(err);
          }
        },
        (err) => {
          setError(err.message);
          console.error(err);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  return [cities,error,errorMsg];
};

export default useGetLocation;
