import React, { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { PhoneCall } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, ...props }, ref) => {
    return (
      <div className="flex items-center w-full col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-xl bg-white">
        {icon && <span className="text-current/30 px-3">{icon}</span>}
        <input ref={ref} {...props} className="flex-1 py-3 outline-none" />
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;

export const PhoneInput = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    return (
      <div className="flex items-center min-h-14 gap-3 w-full col-span-12 md:col-span-4 lg:col-span-3 overflow-hidden rounded-xl bg-white">
        <span className="text-current/30 pl-3">
          <PhoneCall size={20} />
        </span>
        <Select>
          <SelectTrigger className="!w-[60px]">
            <SelectValue placeholder="Code" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Countries</SelectLabel>
              <SelectItem value="us">US United States</SelectItem>
              <SelectItem value="ca">CA Canada</SelectItem>
              <SelectItem value="bd">BD Bangladesh</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <input
          type="text"
          maxLength={11}
          ref={ref}
          {...props}
          className="flex-1 py-1 mr-3 rounded-md px-3 outline-none border border-black/20"
        />
      </div>
    );
  }
);
PhoneInput.displayName = "PhoneInput";
