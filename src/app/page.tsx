import React from "react";
import { LoginForm } from "./(auth)/login/components/LoginForm";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <LoginForm />
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default page;
