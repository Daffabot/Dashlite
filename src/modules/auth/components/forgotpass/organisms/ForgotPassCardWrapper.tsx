import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import Card from "@/shared/molecules/Card";
import { Form, FormField } from "@/shared/molecules/Form";
import { Input } from "@/shared/atoms/Input";
import Button from "@/shared/atoms/Button";

/**
 * Account settings page allowing users to update their profile information.
 */
const ForgotPassCardWrapper: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <Card className="max-w-md w-full space-y-6 text-center">
      <h1 className="text-2xl font-bold">Forgot Password</h1>
      <p className="text-sm text-gray-600">
        Enter your account email address and we'll send you a password reset
        link.
      </p>

      {submitted && (
        <Alert
          type="success"
          title="Email sent!"
          message="Please check your email inbox for password reset instructions."
          className="text-left mb-0"
          display={true}
        />
      )}

      {!submitted && (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
            triggerAlert();
          }}
        >
          <FormField label="Email" className="text-left">
            <Input type="email" placeholder="Masukkan email kamu" />
          </FormField>
          <Button type="submit" className="w-full">
            Send Reset Link
          </Button>
        </Form>
      )}

      <Link
        key="login"
        to="/login"
        className="text-blue-500 font-bold text-sm hover:underline transition"
      >
        ← Back to login
      </Link>
    </Card>
  );
};

export default memo(ForgotPassCardWrapper);
