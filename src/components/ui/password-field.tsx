"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type PasswordFieldProps = {
  name: string;
  placeholder: string;
  autoComplete: string;
  required?: boolean;
};

export default function PasswordField({
  name,
  placeholder,
  autoComplete,
  required,
}: PasswordFieldProps) {
    
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        name={name}
        className="input pr-11"
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
      />
      <button
        type="button"
        className="absolute top-1/2 right-3 -translate-y-1/2 text-muted transition-colors hover:text-ink"
        onClick={() => setShowPassword((visible) => !visible)}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? (
          <EyeOff className="size-4" aria-hidden />
        ) : (
          <Eye className="size-4" aria-hidden />
        )}
      </button>
    </div>
  );
}
