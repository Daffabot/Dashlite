import React, { useState, lazy, memo, useCallback } from "react";
import Layout from "../shared/templates/DashboardLayout";
import Card from "../shared/ui/Card";
import Table from "../shared/ui/Table";
import Button from "../shared/ui/Button";
import Modal from "../shared/ui/Modal";
import Dropdown from "../shared/ui/Dropdown";
import { Input } from "../shared/ui/Input";
import { Form, FormField } from "../shared/ui/Form";
import Spinner from "../shared/ui/Spinner";
const LineChartComponent = lazy(
  () => import("../shared/molecules/Charts/LineChartComponent"),
);
const BarChartComponent = lazy(
  () => import("../shared/molecules/Charts/BarChartComponent"),
);
const PieChartComponent = lazy(
  () => import("../shared/molecules/Charts/PieChartComponent"),
);
import { Toast } from "../shared/molecules/Toast";
import { Alert } from "../shared/molecules/Alert";

const Template: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [toasts, setToasts] = useState<
    { id: number; message: string; type: "success" | "error" | "info" }[]
  >([]);

  const addToast = useCallback(
    (msg: string, type: "success" | "error" | "info" = "info") => {
      const id = Date.now();
      setToasts((prev) => [...prev, { id, message: msg, type }]);
    },
    [],
  );

  const handleModalOpen = useCallback(() => {
    setOpenModal(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setOpenModal(false);
  }, []);

  const handleFormSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      addToast("Form submitted!", "success");
    },
    [addToast],
  );

  const handleToastClose = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <Layout>
      <div className="p-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Alert
            type="success"
            title="Sukses"
            message="Data berhasil disimpan."
          />
          <Alert
            type="error"
            title="Error"
            message="Terjadi kesalahan server."
          />
          <Alert
            type="warning"
            title="Warning"
            message="Pastikan data sudah benar."
          />
          <Alert type="info" title="Info" message="Update sistem tersedia." />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Line Chart">
            <LineChartComponent
              data={[
                { name: "Jan", valueA: 40, valueB: 24 },
                { name: "Feb", valueA: 30, valueB: 13 },
                { name: "Mar", valueA: 20, valueB: 98 },
              ]}
              dataKeys={["valueA", "valueB"]}
            />
          </Card>

          <Card title="Bar Chart">
            <BarChartComponent
              data={[
                { name: "A", value: 12 },
                { name: "B", value: 19 },
                { name: "C", value: 3 },
              ]}
              dataKeys={["value"]}
            />
          </Card>

          <Card title="Pie Chart">
            <PieChartComponent
              data={[
                { name: "Chrome", value: 63 },
                { name: "Safari", value: 19 },
                { name: "Firefox", value: 12 },
                { name: "Edge", value: 6 },
              ]}
              colors={["#2563eb", "#16a34a", "#f59e0b", "#ef4444"]}
            />
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card title="Table">
            <Table
              headers={["Nama", "Email", "Role"]}
              rows={[
                ["Daffa", "daffa@example.com", "Admin"],
                ["Budi", "budi@example.com", "User"],
                ["Siti", "siti@example.com", "Editor"],
              ]}
            />
          </Card>

          <Card title="Form & Input">
            <Form onSubmit={handleFormSubmit}>
              <FormField label="Nama">
                <Input type="text" placeholder="Masukkan nama" />
              </FormField>
              <FormField label="Email">
                <Input type="email" placeholder="Masukkan email" />
              </FormField>
              <Button type="submit">Submit</Button>
            </Form>
          </Card>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Button onClick={handleModalOpen}>Open Modal</Button>
          <Button
            variant="secondary"
            onClick={() => addToast("Hello!", "info")}
          >
            Show Toast
          </Button>

          <Dropdown trigger="Actions">
            <div className="flex flex-col space-y-2">
              <Button className="w-full text-left">Edit</Button>
              <Button className="w-full text-left">Delete</Button>
              <Button className="w-full text-left">Share</Button>
            </div>
          </Dropdown>

          <Spinner />
        </div>

        <Modal
          isOpen={openModal}
          onClose={handleModalClose}
          title="Modal Title"
        >
          <p className="mb-4">Ini adalah konten modal.</p>
          <Button onClick={handleModalClose}>Tutup</Button>
        </Modal>

        <div className="fixed top-24 right-4 flex flex-col gap-2 z-50">
          {toasts.map((t) => (
            <Toast
              key={t.id}
              message={t.message}
              type={t.type}
              onClose={() => handleToastClose(t.id)}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default memo(Template);
