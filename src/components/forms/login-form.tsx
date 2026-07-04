"use client";

import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function LoginForm() {
    
    const [showPassword, setShowPassword] = useState(false)

    return (
        <form className="flex flex-col gap-3.5 text-left">
            <input
            type="email"
            name="email"
            className="input text-faint"
            placeholder="Email"
            />

            <div className="relative">
                <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input pr-11"
                    placeholder="Password"
                    required
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

            <div className="text-right text-[13px]">
                <Link
                    href="/"
                    className="text-accent hover:underline"
                >
                    Forgot password?
                </Link>
            </div>

            <button type="submit" className="btn-primary w-full">Log in</button>
        </form>
    )
}