import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CustomCalendarProps {
  onSelect: (date: Date) => void;
  onClose: () => void;
}

export const CustomCalendar = ({ onSelect, onClose }: CustomCalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();
  
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const days = [];
  const totalDays = daysInMonth(year, month);
  const startDay = firstDayOfMonth(year, month);
  
  // Empty slots for previous month days
  for (let i = 0; i < startDay; i++) {
    days.push(<div key={`empty-${i}`} className="h-10 w-10" />);
  }
  
  // Real days
  for (let d = 1; d <= totalDays; d++) {
    days.push(
      <button
        key={d}
        onClick={() => {
          onSelect(new Date(year, month, d));
          onClose();
        }}
        className="h-10 w-10 flex items-center justify-center font-serif-display text-sm hover:bg-gold hover:text-ink transition-colors rounded-full"
      >
        {d}
      </button>
    );
  }

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="bg-ink-deep border border-gold/30 p-6 shadow-2xl w-[320px] animate-in fade-in zoom-in duration-300">
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={() => setCurrentDate(new Date(year, month - 1))}
          className="text-gold/60 hover:text-gold transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <h3 className="font-serif-display text-lg text-soft uppercase tracking-widest">
          {monthNames[month]} {year}
        </h3>
        <button 
          onClick={() => setCurrentDate(new Date(year, month + 1))}
          className="text-gold/60 hover:text-gold transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {["SU", "MO", "TU", "WE", "TH", "FR", "SA"].map(d => (
          <div key={d} className="h-8 w-10 flex items-center justify-center text-[0.6rem] text-gold/40 font-bold tracking-tighter">
            {d}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {days}
      </div>
      
      <button 
        onClick={onClose}
        className="mt-6 w-full py-2 border-t border-gold/10 text-[0.6rem] small-caps text-soft/40 hover:text-gold transition-colors"
      >
        Close Calendar
      </button>
    </div>
  );
};
