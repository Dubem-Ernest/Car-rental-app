import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faBell,faGear,faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux'

const NavIcons = (props) => {
  const _userInfo = localStorage.getItem("userInfo");

  const userInfo = JSON.parse(_userInfo );

  
//<img src={`${userInfo.profilePics == null ? 

  // console.log(userInfo.profilePics)

  const renderCartComponents = () => {
    switch (props.icon) {
      case "faHeart":
        return <FontAwesomeIcon icon={faHeart} />;      // Shows list of items in cart
      case "faBell":
        return <FontAwesomeIcon icon={faBell} />;       // Displays checkout form
      case "faGear":
        return <FontAwesomeIcon icon={faGear} />; // Shows order confirmation
      case "profile_picture":
        return <><Link to="/user">{userInfo.profilePics === null ? <FontAwesomeIcon icon={faUser} /> : <img src={userInfo.profilePics } alt="img" /> }</Link></> // Shows order confirmation
      default:
        return
    }
  };


  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      {userInfo && renderCartComponents()}
    </div>
  );
};

export default NavIcons;
