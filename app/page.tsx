"use client"
import { useState } from "react";
import {DynamicIsland} from "~/components/DynamicIsland";

export default function Home() {
  const [isOpen, setOpen] = useState(false)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="font-semibold">Dynamic Island</p>
      <DynamicIsland isOpen={isOpen}/>
      <div className="flex space-x-3">
        <button className="px-2 py-1 rounded-md ring-1 ring-neutral-500" onClick={()=> setOpen(true)}>
          Open
        </button>
        <button className="px-2 py-1 rounded-md ring-1 ring-neutral-500" onClick={()=> setOpen(false)}>
          Closed
        </button>
      </div>
    </main>
  );
}
