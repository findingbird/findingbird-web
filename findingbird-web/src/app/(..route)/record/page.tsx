'use client';

import { useState } from "react";
import TextToggleButton from "@/app/ui/atom/toggle/text-toggle-button";
import Encyclopedia from "@/app/ui/components/record/encyclopedia";
import CalendarClient from "@/app/ui/molecule/calendar/calendar-client";
import Collection from "@/app/ui/components/record/collection";

export default function RecordPage() {
  const [showEncyclopedia, setShowEncyclopedia] = useState(false);

  return (
    <main>
      <div className="flex-1 overflow-y-auto flex flex-col justify-center">
        <div className="flex-1 overflow-y-auto p-5">
          <div className="flex justify-center mb-6">
            <TextToggleButton text="기록/도감" onToggle={(active) => setShowEncyclopedia(active)} />
          </div>
          {!showEncyclopedia ? <CalendarClient /> : <Collection />}
        </div>
      </div>
    </main>
  );
}
