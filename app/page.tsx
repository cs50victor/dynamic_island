"use client"
import { useState } from "react";
import {DynamicIsland,IslandStates,  type IslandState} from "~/components/DynamicIsland";
import { tw } from "~/utils/tw";

export default function Home() {
  const [state, setState] = useState<IslandState>(IslandStates[0])
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 tracking-tight">
      <div className="min-h-[300px] h-full">
        <DynamicIsland state={state}/>
      </div>
      <div className="flex space-x-3">
        {IslandStates.map((curr_state)=>(
          <button
              key={curr_state}
              className={tw("lowercase border ring-offset-1 px-3 py-2 rounded-3xl ring-1 ring-neutral-400",
                curr_state===state && "bg-black text-white"
              )}
              onClick={()=> setState(curr_state)}
          >
            {curr_state.replace("_", " ")}
          </button>
        ))}
      </div>
    </main>
  );
}
