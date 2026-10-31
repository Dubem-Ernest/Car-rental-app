import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import StarRating from "../../components/Rating/StarRating";
import Reviews from "../../components/Reviews/Reviews";
import RecentCars from "../../components/Detailspage/RecentCars";
import RecommendedCars from "../../components/Detailspage/RecommendedCars";
import SideBarFilterComponents from "../../components/FilterComponents/SideBarFilterComponents";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import backendUrl from "../../utils/api/backendUrl";
import { useGetCarByIdQuery } from "../../Redux/slices/api";
import { useGetCarsQuery } from "../../Redux/slices/api";
import DarkOverlay from "../../components/DarkOvelay";
import ModalContent from "../../components/ModalContent";
import CarDescription from "../../components/Detailspage/CarDescription";
import {showDescription} from "../../Redux/slices/carDescriptionSlice"

const DetailsPage = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const { id } = useParams();
  const [clicked, setClicked] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCars, setSelectedCars] = useState({
    type: [],
    noOfSeats: [],
    price: 72,
  });
  const [pickedImage, setpickedImage] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    data: cars = [],
    error: carsError = null,
    isLoading: carsLoading = true,
  } = useGetCarsQuery();

 

  const { data, error, isLoading } = useGetCarByIdQuery(id);

  const imageUrl = data?.displayImage
    ? `${backendUrl}/getImages/${data.multipleImages[pickedImage]}`
    : "";

  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      dispatch(showDescription(data));
    }
  }, [id]);

  const pageRef = useRef(null);

  const handleClick = (id) => {
    navigate(`/user/details/${id}`, { replace: false });
    
  };
  const handleClick1 = () => {
    setShowOverlay(!showOverlay);
  };

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };
  const selectedImage = (arg) => {
    setpickedImage(arg);
    setClicked(arg)
  };

  //const { id } = useParams(); // Get the ID from the URL parameter

  useEffect(() => {
    const applyFilters = () => {
      let updatedList = [...cars];

      //Filter by car type
      if (
        selectedCars.type.length > 0 ||
        selectedCars.noOfSeats.length > 0 ||
        selectedCars.price > 0
      ) {
        updatedList = updatedList.filter((item) => {
          const typeMatch =
            selectedCars.type.length === 0 ||
            selectedCars.type.includes(item.carType);

          const seatMatch =
            selectedCars.noOfSeats.length === 0 ||
            selectedCars.noOfSeats.includes(item.numberOfSeats.toString());

          const priceMatch = item.recentPrice <= Number(selectedCars.price);

          return typeMatch && seatMatch && priceMatch;
        });

        setFilteredData(updatedList);
      }

      //Filter by price
    };

    applyFilters();
  }, [selectedCars, cars]);

  console.log(data)

  return (
    <div className="grid md:grid-cols-8 md:grid-flow-col gap-6 h-auto mt-1 grid-cols-1">
      {showOverlay && (
        <DarkOverlay isVisible={showOverlay} toggleOverlay={toggleOverlay}>
          <ModalContent>
            <CarDescription />
          </ModalContent>
        </DarkOverlay>
      )}

      <div className="md:col-span-2 col-span-2 bg-red-600 hidden md:grid">
        <SideBarFilterComponents
          selectedCars={selectedCars}
          setSelectedCars={setSelectedCars}
          filteredData={filteredData}
        />
      </div>
      <div className=" col-span-6 p-6 gap-6 cursor-pointer">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {" "}
          <div className="grid-rows-8 col-span-1 md:gap-4" ref={pageRef}>
            <div
              onClick={handleClick1}
              style={{
                backgroundImage: `url(${imageUrl})`,
                objectFit: 'contain',
              }}
              className={`row-span-2  bg-cover bg-center md:h-[70%] h-[20rem] rounded-md p-2`}
            >
              
            </div>

            <div className=" h-[30%] ">
              <div className="grid grid-cols-3 gap-2 h-full pt-4">
                {!isLoading &&
                  data?.multipleImages?.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => selectedImage(index)}
                      className={`col-span-1 object-contain border-2 border-solid rounded-lg cursor-pointer ${
                        clicked == index && "border border-indigo-600"
                      }`}
                    >
                      <img
                        className="h-full w-full"
                        src={`${backendUrl}/getImages/${item}`}
                        alt="img"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="col-span-1 bg-yellow-600 p-4">
            <div className="">
              <div className="">
                <h1 className="text-2xl">
                  {isLoading ? "Loading" : data.carName}
                </h1>
                <div className="flex flex-row gap-1 items-center">
                  <StarRating rating={4} />
                  <span className="text-xs text-gray-600">440+ Reviewers</span>
                </div>
                <div className="py-6">
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Libero porro possimus eos, nostrum quos omnis adipisci
                    repellat aliquam! Reprehenderit dolorum error facere autem,
                    beatae ex officia laborum blanditiis at ab.
                  </p>
                </div>

                <div className="grid grid-cols-2 bg-green-400 gap-8 w-full justify-between py-4">
                  <div className="grid grid-cols-2 bg-red-600">
                    <div className="col-span-1">
                      <div className="">
                        {" "}
                        <p>Car type :</p>
                      </div>
                      <div className="">
                        {" "}
                        <p>Steering :</p>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="py-">
                        {" "}
                        <p>{isLoading ? "Loading" : data.carType}</p>
                      </div>
                      <div className="">
                        <p>{isLoading ? "Loading" : data.carSteering}</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 bg-yellow-600">
                    {" "}
                    <div className="col-span-1">
                      <div className="">
                        <p>Capacity :</p>
                      </div>
                      <div className="">
                        <p>Gasoline :</p>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="">
                        <p>{isLoading ? "Loading" : data.numberOfSeats}</p>
                      </div>
                      <div className="">
                        <p>{isLoading ? "Loading" : data.gasolineCapacity}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-between pt-14 pb-6">
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <h2 className="font-bold text-lg">$45/</h2>
                  <span className="pt-1 pl-1 text-base">day</span>
                </div>

                <p className="text-xs line-through text-gray-600">$19.00</p>
              </div>{" "}
              <Link
              onClick={()=>dispatch(showDescription(data))}
                to="/user/bookings"
                className="w-36  py-2 px-3 rounded-md text-center bg-blue-500 text-white "
              >
                Rent now
              </Link>
            </div>
          </div>
        </div>

        <div className="h-auto mt-8 rounded-lg">
          <Reviews />
        </div>

        <RecentCars filteredData={filteredData} handleClick={handleClick} />
        <RecommendedCars
          filteredData={filteredData}
          pageRef={pageRef}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default DetailsPage;
