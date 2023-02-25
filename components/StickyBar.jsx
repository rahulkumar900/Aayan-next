import React, { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { registerLocale } from "react-datepicker";
import US from "date-fns/locale/en-US";
registerLocale("US", US);
export default function StickyBar() {
  const [startDate, setStartDate] = useState(new Date());
  const [guest, setGuest] = useState(1);

  return (
    <div className="sticky hidden sm:block bottom-0 left-0 z-40 overflow-hidden bg-white border-t border-text shadow-md">
      
      
      <div className=" sm:gap-8  overflow-hidden items-center  w-full flex-1 flex justify-center  sm:max-w-7xl mx-auto gap-1 p-3 ">
        <div className="text-sm hidden md:block tracking-tighter  text-purple">
          Book Your Stay 
        </div>

        <div className="  items-center flex rounded-md divide-x divide-purple border border-text overflow-hidden relative ">
          <div className="p-2 text-sm  text-purple ">Guest</div>
          <input
            className="flex-1 p-2 w-10 sm:w-32"
            min="1"
            type="number"
            value={guest}
            onChange={(e) => setGuest(e.target.value)}
          />
        </div>

        <div className=" inline-flex divide-x divide-purple items-center rounded-md border border-text overflow-hidden text-purple relative ">
          <div className="text-purple px-2 text-sm">Arrival</div>
          <DatePicker
            className="p-2 outline-none "
            locale={US}
            dateFormat="dd/MM/yyyy"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            withPortal
          />
        </div>
        <div className=" inline-flex divide-x divide-purple items-center rounded-md border border-text overflow-hidden text-purple relative ">
          <div className="text-purple px-2 text-sm">Departure</div>
          <DatePicker
            className="p-2 outline-none "
            locale={US}
            dateFormat="dd/MM/yyyy"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            withPortal
          />
        </div>

        <button className="text-xs p-2 border-text border text-purple rounded-md">
          Check Availability
        </button>
      </div>

    </div>
  );
}
