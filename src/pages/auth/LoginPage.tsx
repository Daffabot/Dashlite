import React, { memo } from "react";
import Button from "@/shared/atoms/Button";
import { Alert } from "@/shared/molecules/Alert";
import LoginCardWrapper from "@/modules/auth/components/login/organisms/LoginCardWrapper";

/**
 * User login page with email and password fields.
 */
const LoginPage: React.FC = () => {
  return (
    <div className="p-6 space-y-6 w-screen h-screen bg-lightblue-dashlite/80 flex flex-col items-center justify-center">
      <Alert
        type="success"
        title="Success"
        message="Account login successfully!"
        className="absolute top-10 transition-all duration-500"
      />

      <h1 className="font-bold text-white text-6xl -mt-10 align-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        DashLite
      </h1>

      <LoginCardWrapper />
    </div>
  );
};

export default memo(LoginPage);
