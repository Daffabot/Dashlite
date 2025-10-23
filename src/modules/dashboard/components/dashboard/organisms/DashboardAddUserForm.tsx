import { memo } from "react";
import Card from "@/shared/molecules/Card";
import { Form, FormField } from "@/shared/molecules/Form";
import { Input } from "@/shared/atoms/Input";
import Button from "@/shared/atoms/Button";
import { triggerAlert } from "@/utils/alertBus";

const DashboardAddUserForm = memo(() => (
  <Card title="Add New User">
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        document
          .getElementById("main-content")
          ?.scrollTo({ top: 0, behavior: "smooth" });
        triggerAlert();
      }}
    >
      <FormField label="Name">
        <Input type="text" placeholder="Enter name" />
      </FormField>
      <FormField label="Email">
        <Input type="email" placeholder="Enter email" />
      </FormField>
      <FormField label="Plan">
        <Input
          type="select"
          options={[
            { value: "free", label: "Free" },
            { value: "pro", label: "Pro" },
            { value: "enterprise", label: "Enterprise" },
          ]}
        />
      </FormField>
      <Button type="submit">Submit</Button>
    </Form>
  </Card>
));

export default DashboardAddUserForm;
