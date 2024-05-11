import React, { useState } from "react";
import FormInput from "../components/FormInput";
import { emailValidation } from "../Validation";
import { MdEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";

const Form = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  {
    /* <input className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
  <PiWarningCircleLight size={24} />
</input>; */
  }

  const [errorMessage, setErrorMessage] = useState({
    fname: "",
    lname: " ",
    email: " ",
    password: "",
  });

  //err, which is the error message to display, and field, which is the name of the field that has the error.
  // every time the handleError function is called, it will update the error object with the appropriate error message for the given field.
  const handleError = (err, field) => {
    setErrorMessage((prev) => ({ ...prev, [field]: err }));
  };

  const validate = async (e) => {
    // Prevent form submission
    e.preventDefault();
    let isValid = true;

    if (!fname || fname.length < 3) {
      handleError(
        "Please input  your first name (minimum 3 characters)",
        "fname"
      );
      isValid = false;
    }

    if (!lname || lname.length < 3) {
      handleError(
        "Please input  your last name (minimum 3 characters)",
        "lname"
      );
      isValid = false;
    }

    if (!email) {
      handleError("Please input email address", "email");
      isValid = false;
    } else if (!emailValidation(email).isValid) {
      handleError("Please input a vaild email", "email");
      isValid = false;
    }

    console.log(password);
    if (!password) {
      handleError("Please input password ", "password");
      isValid = false;
    } else if (password.length < 6) {
      handleError("Min password length of 6", "password");
      isValid = false;
    }

    // If everything is valid, proceed with form submission
    if (isValid) {
      e.target.submit();
      alert("Registered Successfully! ");
    }
  };

  return (
    <form
      onSubmit={(text) => validate(text)}
      className=" p-4 w-[308px] shadow-xl  
          rounded-lg  bg-white md:w-full md:max-w-[390px] md:p-8 "
    >
      {/* <div className="text-center m-3"></div> w-full max-w-[450px] mx-auto */}
      <div>
        <FormInput
          placeholder=" First Name"
          type="text"
          value={fname}
          required
          name="fname"
          onChange={(text) => setFname(text)}
          error={errorMessage.fname}
          resetError={() => handleError(null, "fname")}
          leftIcon={<FaUserAlt color="#666" size={14} />}
        />

        <FormInput
          placeholder=" Last Name"
          type="text"
          value={lname}
          required
          name="lname"
          onChange={(text) => setLname(text)}
          error={errorMessage.lname}
          resetError={() => handleError(null, "lname")}
          leftIcon={<FaUserAlt color="#666" size={14} />}
        />

        <FormInput
          placeholder="Email@gmail.com"
          type="email"
          value={email}
          required
          name="email"
          validator={emailValidation}
          onChange={(text) => setEmail(text)}
          error={errorMessage.email}
          resetError={() => handleError(null, "email")}
          leftIcon={<MdEmail color="#666" />}
        />

        <FormInput
          placeholder="Password"
          type="password"
          value={password}
          required
          name="password"
          onChange={(text) => setPassword(text)}
          error={errorMessage.password}
          resetError={() => handleError(null, "password")}
          leftIcon={<BsFillShieldLockFill color="#666" size={14} />}
        />

        <button
          type="submit"
          className="text-white border-green-300  
               bg-green-300 hover:scale-105 text-center 
              text-sm font-bold rounded
               w-full mt-8 p-2 uppercase"
        >
          claim your free trial
        </button>
        <p className="text-sm text-black mt-2">
          By clicking the button, you are agreeing to our
          <span className="text-red-500"> Terms and Services</span>
        </p>
      </div>
    </form>
  );
};

export default Form;
