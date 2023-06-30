import React from "react";
import crmImg from "../../assets/images/crm.webp";
const Login = () => {
  return (
    <div className="bg-teal-500 h-screen w-screen flex items-center justify-center">
      <div className="bg-white p-2 rounded-lg flex w-1/2">
        <div className="p-5 w-1/2">
          <hgroup className="mb-2 p-2">
            <h1 className="text-3xl">Login to CRM</h1>
            <span className="text-sm text-slate-500">
              Login to crm to access everything you are authorized to.
            </span>
          </hgroup>
          <form className="">
            <div className="mb-4">
              <label
                htmlFor="user name"
                className="text-sm block font-semibold"
              >
                User name
              </label>
              <input
                type="text"
                name="user_name"
                className="mt-1 w-full border-2 p-2 rounded-md  border-slate-400 focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="text-sm block font-semibold">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="mt-1 w-full border-2 p-2 rounded-md  border-slate-400 focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
            <button className="w-full px-4 py-2 text-white bg-teal-500 rounded-md hover:bg-teal-900  focus:outline-none focus:bg-teal-500">
              Submit
            </button>
          </form>
        </div>
        <div className="flex w-1/2 bg-red-500">
          <img src={crmImg} alt="crm image" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Login;
