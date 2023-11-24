"use client";
import { FormEvent, useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:3000/api/register", {
        phoneNumber: phoneNumber,
        firstName: firstName,
        lastName: lastName,
        password: password,
      });

      console.log(data);
      setPhoneNumber("");
      setFirstName("");
      setLastName("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-900 h-screen">
      <div className="bg-gray-600 text-white text-xxxl p-2">
        <div className="flex items-center justify-between mx-3">
          <div className="text-2xl">WhatsApp</div>
        </div>
      </div>
      <div>
        <div className="p-5 text-center mx-10">
          <div className="bg-teal-600 font-semibold text-xl text-white">
            Create new account
          </div>
          <div onClick={handleSubmit}>TEST</div>
        </div>
        <div className="flex items-center justify-center py-20">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
            </div>
            <br></br>
            <div>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>
            <br></br>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>
            <br></br>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <br></br>
            <br></br>
            <button
              type="submit"
              className="inline-flex text-white bg-teal-600 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
