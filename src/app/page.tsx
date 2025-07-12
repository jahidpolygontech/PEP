import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { LoginForm } from "./(center-layout)/login/components/LoginForm";

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
