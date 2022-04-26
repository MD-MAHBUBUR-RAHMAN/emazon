import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  // call seNavigate Hook from router to redirect user:
  // const navigate = useNavigate();

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };
  const handleAddressdBlur = (event) => {
    setAddress(event.target.value);
  };
  const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
  };

  //   if user get then navigate user to home;
  // if (user) {
  //   navigate("/shop");
  // }
  //  handle for submmit form by creating new user.
  const handleUser = (event) => {
    event.preventDefault();
    const shippingInfo = { name, email, address, phone };
    console.log(shippingInfo);
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Shipping information</h2>
        <form onSubmit={handleUser}>
          <div className="input-group">
            <label htmlFor="text">Your Name</label>
            <input onBlur={handleNameBlur} type="text" name="" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">email</label>
            <input
              value={user?.email}
              readOnly
              type="email"
              name=""
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="text">Address</label>
            <input
              onBlur={handleAddressdBlur}
              type="text"
              name=""
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              onBlur={handlePhoneBlur}
              type="text"
              name="phone"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input className="form-submit" type="submit" value="Add Shipping" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
