import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface LuxuryDatePickerProps {
  date?: Date;
  setDate: (date?: Date) => void;
  label?: string;
  placeholder?: string;
}

export function LuxuryDatePicker({ date, setDate, label, placeholder = "Select date" }: LuxuryDatePickerProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="space-y-3 w-full">
      {label && <label className="small-caps text-[0.65rem] text-gold tracking-widest ml-1">{label}</label>}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-light bg-ink/40 border-gold/20 hover:border-gold/40 hover:bg-ink/60 transition-all py-7 px-4",
              !date && "text-soft-dim/40"
            )}
          >
            <CalendarIcon className="mr-3 h-4 w-4 text-gold/60" />
            {date ? format(date, "PPP") : <span>{placeholder}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-ink-deep border-gold/20 shadow-2xl" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(d) => {
              setDate(d);
              setOpen(false);
            }}
            initialFocus
            className="bg-ink-deep text-soft"
            classNames={{
                day_selected: "bg-gold text-ink hover:bg-gold hover:text-ink focus:bg-gold focus:text-ink",
                day_today: "bg-gold/10 text-gold font-bold",
                day: "h-8 w-8 p-0 font-light hover:bg-gold/20 hover:text-soft transition-colors text-[0.7rem]",
                nav_button: "border-gold/20 text-gold hover:bg-gold/10 h-7 w-7",
                caption_label: "font-serif-display text-gold tracking-widest uppercase text-xs"
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
