import React, { useState } from 'react';
import { indiaData } from './india-data.js';

export default function BharatStack() {
  const [selectedState, setSelectedState] = useState(indiaData[0]);

  return (
    <div className="bg-slate-950 text-white min-h-screen p-6 md:p-16 font-sans selection:bg-orange-500">
      {/* 🧭 PREMIUM NAV */}
      <nav className="flex justify-between items-center border-b border-slate-800 pb-6">
        <h1 className="text-2xl font-black italic tracking-tighter">
          BHARAT<span className="text-orange-500">STACK</span>
        </h1>
        <div className="flex gap-4 items-center">
          <div className="hidden sm:block text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            Registry v1.4
          </div>
          <button className="bg-orange-500 text-black px-4 py-1.5 rounded-full text-xs font-bold hover:scale-105 transition-transform">
            Ctrl + K
          </button>
        </div>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
        {/* 🗺️ INTERACTIVE MAP SECTION */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold tracking-tight">Geospatial <span className="text-slate-500 text-2xl">Atlas</span></h2>
          <div className="aspect-square bg-slate-900/50 rounded-[3rem] border border-slate-800 flex items-center justify-center relative group overflow-hidden">
             {/* Mocking the map interaction with clickable state nodes */}
             <div className="flex flex-wrap justify-center gap-4 p-8">
               {indiaData.map((state) => (
                 <button 
                    key={state.name}
                    onClick={() => setSelectedState(state)}
                    className={`px-6 py-3 rounded-xl border transition-all ${
                      selectedState.name === state.name 
                      ? "border-orange-500 bg-orange-500/10 text-orange-500 scale-110 shadow-[0_0_20px_rgba(249,115,22,0.2)]" 
                      : "border-slate-800 bg-slate-900/80 text-slate-500 hover:border-slate-600"
                    }`}
                 >
                   {state.name}
                 </button>
               ))}
             </div>
             <div className="absolute bottom-6 text-[10px] text-slate-600 font-mono tracking-[0.3em] uppercase">
                Interactive_Node_System_v1
             </div>
          </div>
        </section>

        {/* 📊 KNOWLEDGE PANEL */}
        <section className="space-y-8 flex flex-col justify-center">
          <div className="space-y-2">
            <span className="text-orange-500 font-mono text-xs uppercase tracking-widest">Knowledge Node Selected</span>
            <h3 className="text-7xl font-black tracking-tighter">{selectedState.name}</h3>
          </div>
          
          <div className="p-8 bg-slate-900/30 border border-slate-800 rounded-3xl space-y-6">
            <p className="text-slate-400 text-xl leading-relaxed">{selectedState.detail}</p>
            <div className="flex justify-between items-end pt-6 border-t border-slate-800">
               <div>
                 <p className="text-slate-600 text-[10px] uppercase font-mono mb-1">State Authority</p>
                 <p className="font-bold">Verified</p>
               </div>
               <div className="text-right">
                 <p className="text-slate-600 text-[10px] uppercase font-mono mb-1">Aura Level</p>
                 <p className="text-5xl font-black text-orange-500 tracking-tighter">{selectedState.aura}</p>
               </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}