import React, { useState, memo } from "react";
import Card from "@/shared/molecules/Card";
import Button from "@/shared/atoms/Button";
import { Form, FormField } from "@/shared/molecules/Form";
import { Input } from "@/shared/atoms/Input";
import { Alert } from "@/shared/molecules/Alert";
import { triggerAlert } from "@/utils/alertBus";
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
