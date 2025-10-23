import React, { useState, memo, useCallback } from "react";
import Card from "@/shared/molecules/Card";
import { Form, FormField } from "@/shared/molecules/Form";
import { Input } from "@/shared/atoms/Input";
import Button from "@/shared/atoms/Button";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { triggerAlert } from "@/utils/alertBus";

/**
 * Account settings page allowing users to update their profile information.
 */
const AccountCardWrapper: React.FC = () => {
  const { user } = useAuth();
  if (!user) throw new Error("User must be logged in");
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    triggerAlert();
  }, []);
  return (
    <Card title="Account Settings">
      <Form onSubmit={handleSubmit}>
        <FormField label="Username">
          <Input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormField>
        <FormField label="Email">
          <Input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormField>

        <div className="flex justify-end gap-3">
          <Button type="button" variant="secondary">
            Forgot Password
          </Button>
          <Button type="submit">Save Changes</Button>
        </div>
      </Form>
    </Card>
  );
};

export default memo(AccountCardWrapper);
