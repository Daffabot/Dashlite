import type { FC } from "react";
import clsx from "clsx";
import { memo } from "react";
import type { TableProps } from "@/types";

/**
 * Table component for rendering data in rows and columns. Responsive for mobile and desktop
 */

const Table: FC<TableProps> = ({ headers, rows, className }) => {
  return (
    <div className={clsx("relative", className)}>
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-sm text-left border border-neutral-200">
          <thead className="bg-neutral-100 text-neutral-700">
            <tr>
              {headers.map((h, i) => (
                <th key={i} className="px-4 py-2 border-b border-neutral-200">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rIdx) => (
              <tr key={rIdx} className="hover:bg-neutral-50">
                {row.map((cell, cIdx) => (
                  <td
                    key={cIdx}
                    className="px-4 py-2 border-b border-neutral-200"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="sm:hidden space-y-2">
        {rows.map((row, rIdx) => (
          <div
            key={rIdx}
            className="bg-white border border-neutral-200 rounded-lg p-3 shadow-sm"
          >
            <div className="grid grid-cols-1 gap-2">
              {row.map((cell, cIdx) => (
                <div key={cIdx} className="flex justify-between items-center">
                  <span className="text-xs font-medium text-neutral-600 min-w-0 flex-shrink-0">
                    {headers[cIdx]}:
                  </span>
                  <span className="text-sm text-neutral-900 text-right truncate ml-2">
                    {cell}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Table);
