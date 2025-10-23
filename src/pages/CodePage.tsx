import React, { memo } from "react";
import Card from "@/shared/molecules/Card";
import Button from "@/shared/atoms/Button";
import type { CodePageProps } from "@/types";

/**
 * Fallback page displayed for unknown routes (404).
 */
const CodePage: React.FC<CodePageProps> = ({ codeProps }) => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-lightblue-dashlite/80 px-6">
      <Card className="text-center space-y-6 max-w-md w-full">
        <div>
          <h1 className="text-9xl font-bold text-blue-600">{codeProps.code}</h1>
          <p className="text-xl font-semibold mt-2">{codeProps.title}</p>
          <p className="text-base text-gray-500 font-bold mt-1">
            {codeProps.desc}
          </p>
        </div>

        <Button
          onClick={() => (window.location.href = "/dashboard")}
          className="w-full"
        >
          Back to Dashboard
        </Button>
      </Card>
    </div>
  );
};

export default memo(CodePage);
