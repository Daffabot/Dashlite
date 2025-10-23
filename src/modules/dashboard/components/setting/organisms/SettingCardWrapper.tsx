import { memo, useState, useCallback } from "react";
import Card from "@/shared/molecules/Card";
import { Form, FormField } from "@/shared/molecules/Form";
import { Input } from "@/shared/atoms/Input";
import Button from "@/shared/atoms/Button";
import { useTheme } from "@/modules/dashboard/hooks/useTheme";
import { triggerAlert } from "@/utils/alertBus";

const SettingCardWrapper = memo(() => {
  const [user, setUser] = useState<number>(100);
  const [font, setFont] = useState<number>(16);
  const [api, setApi] = useState<string>("MyApi");
  const { theme, setTheme } = useTheme();
  const [maintenance, setMaintenance] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    user: user,
    font: font,
    api: api,
    theme: theme,
    maintenance: maintenance,
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value, type, checked } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    },
    [],
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      // Update state utama ketika submit
      setUser(Number(formData.user));
      setFont(Number(formData.font));
      setApi(formData.api);
      setTheme(formData.theme);
      setMaintenance(formData.maintenance);

      triggerAlert();
    },
    [formData, setTheme],
  );

  return (
    <Card title="Dashboard Settings">
      <Form onSubmit={handleSubmit}>
        <FormField label="Theme">
          <select
            name="theme"
            className="w-full px-3 py-2 border rounded-md text-sm"
            value={formData.theme}
            onChange={handleChange}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </FormField>

        <FormField label="API Name">
          <Input
            type="text"
            name="api"
            placeholder="Enter API name"
            value={formData.api}
            onChange={handleChange}
          />
        </FormField>

        <FormField label="Font Size">
          <Input
            type="number"
            name="font"
            placeholder="Example: 16"
            value={formData.font}
            onChange={handleChange}
          />
        </FormField>

        <FormField label="Max User">
          <Input
            type="number"
            name="user"
            placeholder="Enter user limits"
            value={formData.user}
            onChange={handleChange}
          />
        </FormField>

        <FormField label="Maintenance Mode">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="maintenance"
              checked={formData.maintenance}
              onChange={handleChange}
            />
            <span>{formData.maintenance ? "Active" : "Nonactive"}</span>
          </div>
        </FormField>

        <div className="flex justify-end">
          <Button type="submit">Save Settings</Button>
        </div>
      </Form>
    </Card>
  );
});

export default SettingCardWrapper;
