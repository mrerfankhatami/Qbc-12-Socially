import React from "react";
import { Eye, EyeOff } from "lucide-react";

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  isRequired?: boolean;
};

function TextField({
  type = "text",
  label,
  name,
  value,
  dir = "rtl",
  onChange,
  isRequired,
  className,
  ...rest
}: TextFieldProps) {
  return (
    <div className="textField">
      {label && (
        <label htmlFor={name} className="text-secondary-600 text-sm">
          {label}
          {isRequired && <span className="text-error">*</span>}
        </label>
      )}

      <input
        type={type}
        name={name}
        id={name}
        dir={dir}
        className={`w-full py-3 px-4 rounded-lg text-secondary-900 border border-secondary-200 bg-secondary-100 hover:border-primary-500 focus:border-primary-500 focus:bg-secondary-0 transition-all duration-300 ease-out focus:shadow-lg focus:shadow-primary-200 dark:focus:shadow-secondary-200 ${
          dir === "ltr" ? "text-left" : "text-right"
        } ${className ?? ""}`}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
}

export default TextField;
