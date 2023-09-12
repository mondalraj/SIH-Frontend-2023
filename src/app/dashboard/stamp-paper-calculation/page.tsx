"use client";

import { useState } from "react";

const StampPaperCalculation = () => {
  const state = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  const Gender = ["Male", "Female"];

  function calculateStampDuty(
    state: string,
    propertyValue: number,
    gender: string
  ) {
    // Define stamp duty rates and registration charges for each state
    const stateRates: Record<
      string,
      { stampDutyRate: number; registrationCharge: number }
    > = {
      "Andhra Pradesh": { stampDutyRate: 5, registrationCharge: 0.5 },
      Delhi: {
        stampDutyRate: gender === "Male" ? 6 : 4,
        registrationCharge: 1,
      },
      "Arunachal Pradesh": { stampDutyRate: 6, registrationCharge: 1 },
      Assam: { stampDutyRate: 8.25, registrationCharge: 0 },
      Bihar: {
        stampDutyRate: gender === "Male" ? 5.7 : gender === "Female" ? 6.3 : 6,
        registrationCharge: 2,
      },
      Chhattisgarh: { stampDutyRate: 5, registrationCharge: 4 },
      Goa: {
        stampDutyRate:
          propertyValue <= 500000
            ? 3.5
            : propertyValue <= 750000
            ? 4
            : propertyValue <= 10000000
            ? 4.5
            : 5,
        registrationCharge: 3,
      },
      Gujarat: {
        stampDutyRate: 4.9,
        registrationCharge: gender === "Female" ? 0 : 1,
      },
      Haryana: {
        stampDutyRate: gender === "Male" ? 7 : 5,
        registrationCharge: propertyValue <= 50000 ? 0 : 1,
      },
      "Himachal Pradesh": { stampDutyRate: 5, registrationCharge: 2 },
      "Jammu and Kashmir": { stampDutyRate: 5, registrationCharge: 0 },
      Jharkhand: { stampDutyRate: 4, registrationCharge: 3 },
      Karnataka: {
        stampDutyRate:
          propertyValue > 4500000 ? 5 : propertyValue > 2100000 ? 3 : 2,
        registrationCharge: 1,
      },
      Kerala: { stampDutyRate: 8, registrationCharge: 2 },
      "Madhya Pradesh": { stampDutyRate: 7.5, registrationCharge: 3 },
      Maharashtra: {
        stampDutyRate: gender === "Male" ? 6 : 5,
        registrationCharge: 1,
      },
      Manipur: { stampDutyRate: 7, registrationCharge: 3 },
      Meghalaya: { stampDutyRate: 9.9, registrationCharge: 0 },
      Mizoram: { stampDutyRate: 9, registrationCharge: 0 },
      Nagaland: { stampDutyRate: 8.25, registrationCharge: 0 },
      Odisha: {
        stampDutyRate: gender === "Male" ? 5 : 4,
        registrationCharge: 2,
      },
      Punjab: {
        stampDutyRate: gender === "Male" ? 7 : 5,
        registrationCharge: 1,
      },
      Rajasthan: {
        stampDutyRate: gender === "Male" ? 5 : 4,
        registrationCharge: 1,
      },
      Sikkim: {
        stampDutyRate: state === "Sikkim" ? 5 : 9,
        registrationCharge: state === "Sikkim" ? 1 : 0,
      },
      "Tamil Nadu": { stampDutyRate: 7, registrationCharge: 4 },
      Telangana: { stampDutyRate: 5, registrationCharge: 0.5 },
      Tripura: { stampDutyRate: 5, registrationCharge: 0 },
      "Uttar Pradesh": {
        stampDutyRate: gender === "Male" ? 7 : 7,
        registrationCharge: propertyValue <= 10000 ? 0 : 1,
      },
      Uttarakhand: {
        stampDutyRate: gender === "Male" ? 5 : 3.75,
        registrationCharge: 2,
      },
      "West Bengal": {
        stampDutyRate: propertyValue <= 10000000 ? 6 : 7,
        registrationCharge: 1,
      },
    };

    // Check if the state is valid
    if (stateRates[state]) {
      const { stampDutyRate, registrationCharge } = stateRates[state];

      // Calculate stamp duty charges
      const stampDutyCharges = (propertyValue * stampDutyRate) / 100;

      // Calculate total charges (stamp duty + registration)
      const totalCharges = stampDutyCharges + registrationCharge;

      setFinalCharges(totalCharges);
      setFinalRates(stampDutyRate + registrationCharge);
    } else {
      return "Invalid state";
    }
  }

  const [stateValue, setState] = useState<string>("");
  const [propertyValue, setProperty] = useState<number>(0);
  const [gender, setGender] = useState<string>("");
  const [stateShow, setStateShow] = useState<boolean>(true);
  const [GenderShow, setGenderShow] = useState<boolean>(true);
  const [FinalCharges, setFinalCharges] = useState<any>();
  const [FinalRate, setFinalRates] = useState<any>();

  return (
    <div>
      <h2 className="text-3xl font-semibold text-white tracking-wider">
        Stamp Duty Calculator
      </h2>
      <div className="flex flex-col gap-y-7 mt-10">
        <div className="w-full md:w-1/3">
          <label className="text-white font-semibold text-lg tracking-widest">
            STATE
          </label>
          <input
            className="flex mt-1 h-10 w-full text-white font-semibold rounded-md border border-white bg-transparent px-3 py-2 text-sm placeholder:text-gray-700 focus:outline-none"
            type="text"
            placeholder="State"
            onClick={() => setStateShow(!stateShow)}
            defaultValue={stateValue}
          ></input>
          <div
            hidden={stateShow}
            className="absolute w-1/4 remove-scroll overflow-y-scroll h-1/5 p-2 mt-1 rounded-lg bg-[#0c0c0c]"
          >
            {state.map((item, idx) => (
              <div
                key={idx + 1}
                onClick={() => {
                  setState(item);
                  setStateShow(true);
                }}
                className="text-white p-1 cursor-pointer rounded-md font-semibold hover:bg-[#1976D2]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <label className="text-white font-semibold text-lg tracking-widest">
            GENDER
          </label>
          <input
            className="flex h-10 w-full mt-1 text-white font-semibold rounded-md border border-white bg-transparent px-3 py-2 text-sm placeholder:text-gray-700 focus:outline-none"
            type="text"
            onClick={() => setGenderShow(!GenderShow)}
            defaultValue={gender}
            placeholder="Gender"
          ></input>
          <div
            hidden={GenderShow}
            className="absolute w-1/4 remove-scroll overflow-y-scroll h-max p-2 mt-1 rounded-lg bg-[#0c0c0c]"
          >
            {Gender.map((item, idx) => (
              <div
                key={idx + 1}
                onClick={() => {
                  setGender(item);
                  setGenderShow(true);
                }}
                className="text-white p-1 cursor-pointer rounded-md font-semibold hover:bg-[#1976D2]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <label className="text-white font-semibold text-lg tracking-widest">
            PROPERTY VALUE
          </label>
          <input
            className="flex h-10 mt-1 w-full text-white font-semibold rounded-md border border-white bg-transparent px-3 py-2 text-sm placeholder:text-gray-700 focus:outline-none"
            type="number"
            onChange={(e) => setProperty(parseInt(e.target.value))}
            placeholder="Property Value"
          ></input>
        </div>
      </div>
      <button
        type="button"
        onClick={() => calculateStampDuty(stateValue, propertyValue, gender)}
        className="rounded-md mt-5 bg-white px-3 py-2 lg:px-[2.8rem] text-sm font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        View Profile
      </button>

      {FinalCharges && FinalRate && (
        <div className="mt-14 border-white text-white flex p-4 justify-center gap-y-3 items-center flex-col border-2 rounded-md">
          <h2 className="text-2xl">Stamp Duty of your property is</h2>
          <div className="text-4xl text-[#1976D2] font-semibold">
            ₹ {FinalCharges}
          </div>
          <div className="py-3">
            <svg
              width="606"
              height="2"
              viewBox="0 0 606 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.78125 0.939575L605.217 0.939522"
                stroke="url(#paint0_linear_144_493)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_144_493"
                  x1="0.78125"
                  y1="0.939575"
                  x2="599.386"
                  y2="0.939523"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E0E1E2" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#E0E1E2" />
                  <stop offset="1" stopColor="#E0E1E2" stopOpacity="0.15625" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="text-lg">
            Rate in your state is{" "}
            <span className="font-semibold text-green-500">{FinalRate}%</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default StampPaperCalculation;
