import React from 'react';
import { indiaData } from './india-data.js';

export default function BharatStack() {
  return (
    <div className="bg-slate-950 text-white min-h-screen p-6 md:p-20 font-sans selection:bg-orange-500 selection:text-white">
      {/* 🟢 NAVIGATION */}
      <nav className="flex justify-between items-center border-b border-slate-800 pb-6 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-3xl font-black tracking-tighter italic">
          BHARAT<span className="text-orange-500">STACK</span>
        </h1>
        <div className="flex items-center gap-4">
          <span className="hidden md:block text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 rounded">
            v1.0.0_BETA
          </span>
          <div className="text-xs font-bold border border-orange-500/50 bg-orange-500/10 text-orange-500 px-3 py-1.5 rounded-full">
            Ctrl + K
          </div>
        </div>
      </nav>

      {/* 🟠 HERO SECTION */}
      <section className="mt-24 text-center">
        <h2 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-6 bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
          India's Aura Registry
        </h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          The ultimate knowledge graph for the world's fastest-growing digital economy.
        </p>
        
        {/* MAP SKELETON */}
        <div className="mt-16 mx-auto w-full max-w-4xl aspect-video bg-slate-900/50 rounded-[2rem] border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="animate-pulse flex flex-col items-center">
             <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
             <span className="text-slate-600 font-mono tracking-widest text-xs">INIT_BHARAT_ATLAS...</span>
          </div>
        </div>
      </section>

      {/* 🔵 DATA GRID (From your Registry) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
        {indiaData.map((state) => (
          <div key={state.name} className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800 hover:border-orange-500/50 transition-all duration-300 group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500">{state.name}</h3>
            <p className="text-slate-400 text-sm mb-4">{state.detail}</p>
            <div className="flex justify-between items-center">
               <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Aura Score</span>
               <span className="text-orange-500 font-black">{state.aura}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}