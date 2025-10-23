import React, { memo } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";
import type { PieChartProps } from "@/types";

/**
 * Wrapper around recharts `PieChart` for a single pie with custom colors.
 */
const PieChartComponent: React.FC<PieChartProps> = ({
  data,
  colors = ["#1f2937", "#6b7280", "#ea2f0b", "#d1d5db"],
  className = "",
}) => {
  return (
    <div className={`w-full h-100 ${className}`}>
      <ResponsiveContainer>
        <PieChart>
          <Tooltip />
          <Legend className="!mt-3" />
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            fill="#8884d8"
            label
          >
            {data.map((_, idx) => (
              <Cell key={idx} fill={colors[idx % colors.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default memo(PieChartComponent);
