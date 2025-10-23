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
const SignUpCardWrapper: React.FC = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Pastikan password cocok sebelum lanjut
    if (password !== passwordRepeat) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setIsLoading(true);
      setError("");

      const res = await register(username, email, password);

      if (!res.success) {
        setError(res.message);
        return;
      }

      triggerAlert();
      navigate("/login");
    } catch (err: any) {
      console.error("Unexpected error during registration:", err);
      setError(`Unexpected error during registration: ${err}`);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Card title="Sign Up" className="lg:w-1/3">
      {error && (
        <p className="text-sm text-red-500 bg-red-100/70 p-2">{error}</p>
      )}
      <Form onSubmit={handleSubmit}>
        <FormField label="Username">
          <Input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </FormField>
        <FormField label="Email">
          <Input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormField>
        <FormField label="Password">
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormField>
        <FormField label="Repeat Password">
          <Input
            type="password"
            placeholder="Re-enter password"
            value={passwordRepeat}
            onChange={(e) => setPasswordRepeat(e.target.value)}
            required
          />
        </FormField>
        <div className="flex justify-center items-center flex-col gap-3">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Registering..." : "Sign Up"}
          </Button>
          <p className="text-sm">
            Already have an account?{" "}
            <Link key="login" to="/login" className="text-sm text-blue-500">
              Log in
            </Link>
          </p>
        </div>
      </Form>
    </Card>
  );
};

export default memo(SignUpCardWrapper);
