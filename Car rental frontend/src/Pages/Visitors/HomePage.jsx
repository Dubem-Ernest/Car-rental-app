import { useState, useEffect, useRef } from "react";
import Herosection from "../../components/Visitor Homepage/Herosection";
import PopularCars from "../../components/Visitor Homepage/PopularCars";
import RecommendedCars from "../../components/Visitor Homepage/RecommendedCars";
// import LoginPage from "../../Pages/"
import {cars} from "../../assets/car";
import DarkOverlay from "../../components/DarkOvelay";
import ModalContent from "../../components/ModalContent";
import FormWrapper from "../../components/DatePicker/FormWrapper";
import AuthForm from "../../components/SignUpSignIn/Authform";
import useIsAuthorized from "../../hooks/useIsAuthorized";

const HomePage = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const buttonRef = useRef(null);
  const modalRef = useRef(null);

  const { isAuthorized} = useIsAuthorized();

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div className="h-auto flex flex-col mx-auto container relative md:mt-6 ">
      {!isAuthorized && (
        <DarkOverlay isVisible={showOverlay} toggleOverlay={toggleOverlay}>
          <ModalContent>
            <AuthForm />

            {/* <button
    className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    ref={buttonRef}
    onClick={toggleOverlay}
  >
    Close
  </button> */}
          </ModalContent>
        </DarkOverlay>
      )}

      <Herosection />
      <FormWrapper />
      <PopularCars />
      <RecommendedCars cars={cars} />
    </div>
  );
};

export default HomePage;
