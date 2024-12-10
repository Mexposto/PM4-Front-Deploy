"use client";

import { ChangeEvent, useState, FormEvent } from "react";
import { FormTouched, FormData } from "@/interfaces/IForms";
import { userRegister } from "@/services/userService";
import { useRouter } from "next/navigation";
import { isValid } from "@/helpers/validation";

export const RegisterComponent = () => {
  const INITIAL_DATA: FormData = {
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
  };
  const INITIAL_TOUCHED: FormTouched = {
    email: false,
    password: false,
    name: false,
    address: false,
    phone: false,
  };

  const [data, setData] = useState(INITIAL_DATA);
  const [touched, setTouched] = useState(INITIAL_TOUCHED);
  const router = useRouter();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    field: keyof FormData
  ) => {
    setData({ ...data, [field]: event.target.value });
  };

  const handleBlur = (field: keyof FormTouched) => {
    setTouched({ ...touched, [field]: true });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await userRegister(data);

    if (!res.message) {
      alert("Registered successfully!");
      router.push("/login");
    } else {
      alert(res.message);
    }
  };

  return (
    <form
      className="w-full max-w-md mx-auto flex flex-col gap-6 p-4 bg-white rounded shadow-lg"
      onSubmit={handleSubmit}
    >
      {Object.entries(data).map(([field, value], index) => (
        <div key={index} className="flex flex-col">
          <label
            htmlFor={field}
            className="text-primary text-sm font-medium mb-1"
          >
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input
            id={field}
            type={field === "password" ? "password" : "text"}
            value={value}
            onChange={(event) => handleChange(event, field as keyof FormData)}
            onBlur={() => handleBlur(field as keyof FormTouched)}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200 text-primary bg-white"
          />
          {touched[field as keyof FormTouched] && !isValid(field, value) && (
            <p className="text-red-500 text-sm mt-1">{`Invalid ${field}.`}</p>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="w-full py-2 bg-accent text-white rounded hover:bg-accent-dark transition"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterComponent;
