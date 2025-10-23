import React, { useState, memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "@/shared/molecules/Card";
import { Form, FormField } from "@/shared/molecules/Form";
import { Input } from "@/shared/atoms/Input";
import Button from "@/shared/atoms/Button";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { triggerAlert } from "@/utils/alertBus";

/**
 * Account settings page allowing users to update their profile information.
 */
const LoginCardWrapper: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      setError("");

      const res = await login(email, password);

      if (res.success) {
        triggerAlert();
        navigate("/dashboard");
      } else {
        setError(res.message);
      }
    } catch (err: any) {
      console.error("Unexpected error during login:", err);
      setError(`Unexpected error during login: ${err}`);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Card title="Login" className="lg:w-1/3">
      {error && (
        <p className="text-sm text-red-500 bg-red-100/70 p-2">{error}</p>
      )}
      <Form onSubmit={handleSubmit} className="mt-4">
        <FormField label="Email">
          <Input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormField>
        <FormField label="Password">
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormField>
        <Link
          key="forgot"
          to="/forgot-password"
          className="text-sm text-blue-500"
        >
          Forgot password?
        </Link>
        <div className="flex justify-center items-center flex-col gap-3 mt-3">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Log In"}
          </Button>
          <p className="text-sm">
            Don't have an account yet?{" "}
            <Link key="signup" to="/signup" className="text-sm text-blue-500">
              Sign up now
            </Link>
          </p>
        </div>
      </Form>
    </Card>
  );
};

export default memo(LoginCardWrapper);
