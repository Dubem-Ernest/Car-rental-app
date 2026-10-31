import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };

  const handlePhoneChange = (phoneValue) => {
    setFormData({ ...formData, phoneNumber: phoneValue });
   
  };


  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const response = await fetch('http://localhost/api/v1/auth/signup', { // Replace with your backend API endpoint
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const result = await response.json();
  //     // setSubmissionStatus('Data submitted successfully!');
  //     setIsSignUp(false)
  //     console.log('Success:', result);
  //     // Optionally, clear the form or perform other actions
  //     setFormData({ name: '', email: '' });
  //   } catch (error) {
  //     setSubmissionStatus(`Error submitting data: ${error.message}`);
  //     console.error('Error:', error);
  //   }
  // }


  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 transition-all duration-500">
      <div onClick={()=>setIsSignUp(!isSignUp)} className="cursor-pointer relative w-48 h-14 bg-gray-300 rounded-full flex items-center p-1 mb-6">
        <div className={`w-1/2 h-full bg-red-500 rounded-l-full flex items-center justify-center`}>
          {isSignUp ? "Sign up" : "Sign in"}
        </div>
        <button className={`bg-yellow-500 absolute top-1 left-1 w-1/2 h-[87%] rounded-full ${isSignUp ? "translate-x-full ease-in duration-100 -left-[0.261rem]" : "translate-x-0 ease-out duration-100 "} `}>
          {isSignUp ? "Sign up" : "Sign in"}
        </button>
        <div className={`w-1/2 h-full bg-red-500 rounded-r-full flex items-center justify-center`}>
          {isSignUp ? "Sign in" : "Sign up"}
        </div>
      </div>
      {isSignUp ? (
        <SignUpForm
          handleChange={handleChange}
          formData={formData}
          handlePhoneChange={handlePhoneChange}
          setIsSignUp={setIsSignUp}
          isSignUp={isSignUp}
          setFormData={setFormData}
        />
      ) : (
        <SignInForm />
      )}
    </div>
  );
}
