import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleToggleShowPassword = () => setShowPassword((prev) => !prev);

    return (
      <div className="flex flex-row gap-1 items-center w-full">
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {type === "password" && (
          <Button
            variant="default"
            size="icon"
            type="button"
            onClick={handleToggleShowPassword}
          >
            {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
          </Button>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
