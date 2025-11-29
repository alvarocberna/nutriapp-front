"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Providers() {
  return <ToastContainer 
    position="top-right"
    autoClose={1500}
    hideProgressBar={true}
    closeOnClick
    pauseOnHover
    theme="colored"
  />;
}
