import { lazy, memo } from "react";
import Card from "@/shared/molecules/Card";
import ChartLoader from "../molecules/ChartLoader";

const PieChartComponent = lazy(
  () => import("@/shared/molecules/Charts/PieChartComponent"),
);

const DashboardDeviceChart = memo(() => (
  <ChartLoader>
    <Card title="Device Usage">
      <PieChartComponent
        data={[
          { name: "Desktop", value: 60 },
          { name: "Mobile", value: 30 },
          { name: "Tablet", value: 10 },
        ]}
        colors={["#2563eb", "#16a34a", "#f59e0b"]}
      />
    </Card>
  </ChartLoader>
));

export default DashboardDeviceChart;
