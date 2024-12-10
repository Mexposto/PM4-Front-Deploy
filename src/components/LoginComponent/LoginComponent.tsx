"use client";

import { ChangeEvent, useState, FormEvent, useContext } from "react";
import { FormTouched } from "@/interfaces/IForms";
import { FormData } from "@/interfaces/IForms";
import { UserContext } from "@/contexts/userContext";
import { userLogin } from "@/services/userService";
import { useRouter } from "next/navigation";
import { isValid } from "@/helpers/validation";
import Link from "next/link";

const LoginComponent = () => {
  const { setUser } = useContext(UserContext);
  const INITIAL_DATA: FormData = { email: "", password: "" };
  const INITIAL_TOUCHED: FormTouched = { email: false, password: false };
  const [data, setData] = useState(INITIAL_DATA);
  const [touched, setTouched] = useState(INITIAL_TOUCHED);
  const router = useRouter();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const newValue = event.target.value;
    setData((prevData) => ({ ...prevData, [field]: newValue }));
  };

  const handleBlur = (field: string) => {
    setTouched((prevTouched) => ({ ...prevTouched, [field]: true }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await userLogin(data);
    if (!res.message) {
      alert("Logged in!");
      setUser(res);
      router.push("/");
    } else {
      alert(res.message);
    }
  };

  const isTouched = (field: string) => touched[field];

  return (
    <form
      className="w-full max-w-md flex flex-col gap-6 p-4 bg-secondary rounded-lg shadow-lg"
      onSubmit={handleSubmit}
    >
      {Object.keys(data).map((input, index) => (
        <div key={index} className="flex flex-col gap-2">
          <label className="text-primary text-sm font-medium capitalize">
            {input}
          </label>
          <input
            type={input === "password" ? "password" : "text"}
            value={data[input]}
            onChange={(event) => handleChange(event, input)}
            onBlur={() => handleBlur(input)}
            className="border border-gray-300 rounded px-2 py-1 text-primary bg-white"
            required
          />
          {isTouched(input) && !isValid(input, data[input]) && (
            <p className="text-red-500 text-xs">Invalid {input}.</p>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="bg-accent text-secondary py-2 rounded-lg hover:bg-accent-dark transition"
      >
        Login
      </button>
      <div className="text-center mt-4">
        <p className="text-sm text-primary">Don&apos;t have an account?</p>
        <Link href="/register">
          <p className="text-accent hover:underline">Sign up here</p>
        </Link>
      </div>
    </form>
  );
};

export default LoginComponent;
