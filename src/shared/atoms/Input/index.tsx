import React, { memo } from "react";
import type { InputProps } from "@/types";

const baseClass =
  "block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-200 focus:ring-opacity-50";

/**
 * Unified, memoized input component supporting multiple variants
 * (text/password/email/number/date, textarea, select, checkbox, radio, range).
 *
 * @param {InputProps} props - Input props depending on the chosen type
 * @returns {JSX.Element|null} The appropriate form control or null
 */
export const Input: React.FC<InputProps> = memo(
  (props) => {
    const { label, name, className = "", wrapperClass = "" } = props;

    return (
      <div className={`flex flex-col gap-1 ${wrapperClass}`}>
        {label && (
          <label htmlFor={name} className="text-sm font-medium text-gray-700">
            {label}
          </label>
        )}

        {props.type === "text" ||
        props.type === "password" ||
        props.type === "email" ||
        props.type === "number" ||
        props.type === "date" ? (
          <input
            id={name}
            name={name}
            type={props.type}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
            required={props.required}
            className={`${baseClass} ${className}`}
          />
        ) : props.type === "textarea" ? (
          <textarea
            id={name}
            name={name}
            value={props.value}
            placeholder={props.placeholder}
            rows={props.rows || 3}
            onChange={props.onChange}
            required={props.required}
            className={`${baseClass} ${className}`}
          />
        ) : props.type === "select" ? (
          <select
            id={name}
            name={name}
            value={props.value}
            onChange={props.onChange}
            required={props.required}
            className={`${baseClass} ${className}`}
          >
            {props.options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : props.type === "checkbox" ? (
          <input
            id={name}
            name={name}
            type="checkbox"
            checked={props.checked}
            onChange={props.onChange}
            required={props.required}
            className={`h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500 ${className}`}
          />
        ) : props.type === "radio" ? (
          <input
            id={name}
            name={name}
            type="radio"
            checked={props.checked}
            value={props.value}
            onChange={props.onChange}
            required={props.required}
            className={`h-4 w-4 border-gray-300 text-gray-600 focus:ring-gray-500 ${className}`}
          />
        ) : props.type === "range" ? (
          <input
            id={name}
            name={name}
            type="range"
            min={props.min}
            max={props.max}
            step={props.step}
            value={props.value}
            onChange={props.onChange}
            className={`w-full cursor-pointer accent-gray-600 ${className}`}
          />
        ) : null}
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Shallow compare common keys to avoid unnecessary re-renders
    const keys = [
      "type",
      "value",
      "checked",
      "placeholder",
      "className",
      "wrapperClass",
      "label",
      "name",
      "required",
      "onChange",
    ];

    if (
      keys.some((key) => (prevProps as any)[key] !== (nextProps as any)[key])
    ) {
      return false;
    }

    if (prevProps.type === "select" && nextProps.type === "select") {
      if (prevProps.options.length !== nextProps.options.length) return false;
      return prevProps.options.every(
        (opt, index) =>
          opt.value === nextProps.options[index]?.value &&
          opt.label === nextProps.options[index]?.label,
      );
    }

    return true;
  },
);
