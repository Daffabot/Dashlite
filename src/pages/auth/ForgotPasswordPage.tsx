import React, { memo } from "react";
import ForgotPassCardWrapper from "@/modules/auth/components/forgotpass/organisms/ForgotPassCardWrapper";

/**
 * Flow to request a password reset link via email.
 */
const ForgotPasswordPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-lightblue-dashlite/80 h-screen w-screen px-6">
      <ForgotPassCardWrapper />
    </div>
  );
};

export default memo(ForgotPasswordPage);
