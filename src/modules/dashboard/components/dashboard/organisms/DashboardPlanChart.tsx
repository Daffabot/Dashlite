import { lazy, memo } from "react";
import Card from "@/shared/molecules/Card";
import ChartLoader from "../molecules/ChartLoader";

const BarChartComponent = lazy(
  () => import("@/shared/molecules/Charts/BarChartComponent"),
);

const DashboardPlanChart = memo(() => (
  <ChartLoader>
    <Card title="Plan Distribution">
      <BarChartComponent
        data={[
          { name: "Free", value: 50 },
          { name: "Pro", value: 30 },
          { name: "Enterprise", value: 20 },
        ]}
        dataKeys={["value"]}
      />
    </Card>
  </ChartLoader>
));

export default DashboardPlanChart;
