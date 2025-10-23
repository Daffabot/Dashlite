import React, { memo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import type { LineChartProps } from "@/types";

/**
 * Wrapper around recharts `LineChart` for multiple series rendering.
 */
const LineChartComponent: React.FC<LineChartProps> = ({
  data,
  dataKeys,
  colors = ["#1F4B99", "#EA2F0B", "#ea2f0b"],
  className = "",
}) => {
  return (
    <div className={`w-full h-100 ${className}`}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="name" stroke="#374151" />
          <YAxis stroke="#374151" />
          <Tooltip />
          <Legend className="!mt-3" />
          {dataKeys.map((key, idx) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={colors[idx % colors.length]}
              strokeWidth={2}
              dot={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default memo(LineChartComponent);
