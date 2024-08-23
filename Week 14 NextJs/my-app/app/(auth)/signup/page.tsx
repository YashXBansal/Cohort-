"use client"
import { FC } from "react";
import { useState } from "react";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
const SignUp: FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-700 via-teal-600 to-green-600">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white text-center">Create an Account</h2>
        <p className="text-gray-400 text-center mb-8">Join us today! Please fill in the details to create your account.</p>
        
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <div
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            >
              {passwordVisible ? (
                <FaEyeSlash className="text-gray-500" />
              ) : (
                <FaEye className="text-gray-500" />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center justify-between mt-6">
          <hr className="w-full border-gray-700" />
          <span className="text-gray-400 px-2">or</span>
          <hr className="w-full border-gray-700" />
        </div>

        <div className="space-y-4 mt-4">
          <button className="flex items-center justify-center w-full p-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
            <FaGoogle className="mr-2" />
            Sign up with Google
          </button>
          <button className="flex items-center justify-center w-full p-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors">
            <FaGithub className="mr-2" />
            Sign up with GitHub
          </button>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400">
            Already have an account?{" "}
            <Link href="/signin" className="text-teal-500 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
