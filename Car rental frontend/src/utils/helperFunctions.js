


 export async function getListOfStates(countryCode, stateCode) {
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


  export function getRandomCars(arr,count){
    if(!Array.isArray(arr)|| arr.length === 0){
      throw new Error("Input must be a non-empty array")
    }

    if(count > arr.length){
      throw new Error("Count cannot be greater than array length")
    }

    if (count === arr.length) {
      return [...arr]
    }

    const shuffled = [...arr]
    for(let i = shuffled.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i],shuffled[j]] = [shuffled[j],shuffled[i] ]
    }

    return shuffled.slice(0,count)
  }



  export function removeDot(string){
    if(typeof string === "string"){
      throw new TypeError("input must be a string")
    }

    const lastDotIndex = string.lastIndexOf(".")

    if(lastDotIndex === -1){
      return string
    }


    if(lastDotIndex === string.length - 1){
      return string.slice(0,-1)
    }

    return string.substring(0,lastDotIndex)



}