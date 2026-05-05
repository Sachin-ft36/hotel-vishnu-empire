import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Users } from "lucide-react";

interface LuxurySelectProps {
  value: string;
  onValueChange: (value: string) => void;
  options: { label: string; value: string }[];
  label?: string;
  placeholder?: string;
  icon?: React.ReactNode;
}

export function LuxurySelect({ 
  value, 
  onValueChange, 
  options, 
  label, 
  placeholder = "Select option",
  icon = <Users className="mr-3 h-4 w-4 text-gold/60" />
}: LuxurySelectProps) {
  return (
    <div className="space-y-3 w-full">
      {label && <label className="small-caps text-[0.65rem] text-gold tracking-widest ml-1">{label}</label>}
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-full bg-ink/40 border-gold/20 hover:border-gold/40 hover:bg-ink/60 text-soft font-light py-7 px-4 focus:ring-0 focus:ring-offset-0 transition-all">
          <div className="flex items-center">
            {icon}
            <SelectValue placeholder={placeholder} />
          </div>
        </SelectTrigger>
        <SelectContent className="bg-ink-deep border-gold/20 text-soft shadow-2xl">
          {options.map((opt) => (
            <SelectItem 
              key={opt.value} 
              value={opt.value}
              className="focus:bg-gold focus:text-ink hover:bg-gold/10 transition-colors py-3 cursor-pointer font-light text-xs"
            >
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
