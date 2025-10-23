import React, { memo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import type { BarChartProps } from "@/types";

/**
 * Wrapper around recharts `BarChart` supporting multiple bars via `dataKeys`.
 */
const BarChartComponent: React.FC<BarChartProps> = ({
  data,
  dataKeys,
  colors = ["#1F4B99", "#EA2F0B", "#ea2f0b"],
  className = "",
}) => {
  return (
    <div className={`w-full h-100 ${className}`}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="name" stroke="#374151" />
          <YAxis stroke="#374151" />
          <Tooltip />
          <Legend className="!mt-3" />
          {dataKeys.map((key, idx) => (
            <Bar
              key={key}
              dataKey={key}
              fill={colors[idx % colors.length]}
              radius={[4, 4, 0, 0]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default memo(BarChartComponent);
