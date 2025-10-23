import { lazy, memo } from "react";
import Card from "@/shared/molecules/Card";
import ChartLoader from "../molecules/ChartLoader";

const LineChartComponent = lazy(
  () => import("@/shared/molecules/Charts/LineChartComponent"),
);

const DashboardUserGrowthChart = memo(() => (
  <ChartLoader>
    <Card title="User Growth (Weekly)">
      <LineChartComponent
        data={[
          { name: "Week 1", newUsers: 120, activeUsers: 300 },
          { name: "Week 2", newUsers: 150, activeUsers: 350 },
          { name: "Week 3", newUsers: 180, activeUsers: 400 },
          { name: "Week 4", newUsers: 200, activeUsers: 450 },
        ]}
        dataKeys={["newUsers", "activeUsers"]}
      />
    </Card>
  </ChartLoader>
));

export default DashboardUserGrowthChart;
