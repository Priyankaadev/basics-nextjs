"use client";
import React from "react";

const LoginForm = () => {
  return (
    <form className="space-x-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          placeholder="Enter your Email"
          type="email"
          name="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring:blue-500 sm:text-sm p-2"
        />
      </div>
      <div className="mt-3">
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          placeholder="Enter your Password"
          type="password"
          name="password"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring:blue-500 sm:text-sm p-2"
        />
      </div>
      <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 mt-6 ">
Login
      </button>
    </form>
  );
};

export default LoginForm;
