"use client"
import { useState } from "react";
import {DynamicIsland,IslandStates,  type IslandState} from "~/components/DynamicIsland";

export default function Home() {
  const [state, setState] = useState<IslandState>("idle")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="font-semibold">Dynamic Island</p>
      <DynamicIsland state={state}/>
      <div className="flex space-x-3">
        {IslandStates.map((state)=>(
          <button key={state} className="lowercase px-2 py-1 rounded-md ring-1 ring-neutral-500" onClick={()=> setState(state)}>
            {state.replace("_", " ")}
          </button>
        ))}
      </div>
    </main>
  );
}
