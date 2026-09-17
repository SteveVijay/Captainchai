import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Shield, Radio, Eye, AlertTriangle, Zap, CheckCircle2 } from 'lucide-react';
import { playGlassClink, playSteamWhoosh, playEmergencyDistressPulse } from '../utils/audio';

const SECTOR_DATA = [
  {
    id: 'stall',
    name: 'Roadside Tea Stall (HQ)',
    sector: 'Sector 4 — Central Junction',
    type: 'Sanctuary / Watchpost',
    status: 'ACTIVE SAFE ZONE',
    color: '#F59E0B',
    coords: { x: 50, y: 48 },
    description:
      'The humble roadside tea stall where Kannan brews his father’s recipe at 5 AM. Features the hanging brass bell.',
    recentIncident: 'Quiet. Steam rising steadily from the brass samovar.',
  },
  {
    id: 'canal',
    name: 'North Canal Bridge',
    sector: 'Sector 1 — Waterway Corridor',
    type: 'High-Speed Transit Line',
    status: 'PATROLLED (12m ago)',
    color: '#3B82F6',
    coords: { x: 32, y: 22 },
    description:
      'Dark water corridor connecting North Panamukku to industrial wetlands. Poorly lit footbridge.',
    recentIncident: 'Suspicious vehicle intercepted and rerouted at 01:14 AM.',
  },
  {
    id: 'market',
    name: 'Old Market & Fish Wharf',
    sector: 'Sector 2 — Commercial Lanes',
    type: 'Dense Alley Network',
    status: 'SURVEILLED',
    color: '#10B981',
    coords: { x: 74, y: 35 },
    description:
      'Narrow alleyways between spice warehouses and cold storages. High foot traffic during early dawn.',
    recentIncident: 'Break-in attempt neutralized before padlocks were damaged.',
  },
  {
    id: 'bypass',
    name: 'Railway Bypass & Warehouses',
    sector: 'Sector 3 — Industrial Grid',
    type: 'High Threat Corridor',
    status: 'WATCH ACTIVE',
    color: '#EF4444',
    coords: { x: 25, y: 78 },
    description:
      'Site of heavy freight tracks and forgotten godowns. Area where the abduction took place.',
    recentIncident: 'Thermal and kinetic sweeps conducted twice nightly.',
  },
  {
    id: 'west',
    name: 'West Residential Lanes',
    sector: 'Sector 5 — Housing Sector',
    type: 'Civic Protection Zone',
    status: 'CALM',
    color: '#8B5CF6',
    coords: { x: 80, y: 80 },
    description:
      'Quiet neighborhoods and school corridors. Children and workers walking late shifts.',
    recentIncident: 'Lost elder safely guided back home under streetlamp light.',
  },
];

export const PanamukkuRadarMap = ({ onOpenSOS }) => {
  const [activeSector, setActiveSector] = useState(SECTOR_DATA[0]);
  const [sweepTriggered, setSweepTriggered] = useState(false);

  const handleSelectSector = (sector) => {
    playGlassClink();
    setActiveSector(sector);
    setSweepTriggered(false);
  };

  const handleRequestSweep = () => {
    playSteamWhoosh();
    setSweepTriggered(true);
  };

  return (
    <section id="map" className="relative py-28 px-6 sm:px-12 bg-[#090706] border-t border-amber-950/40 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-film-grain pointer-events-none opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#160E0A] border border-amber-950 text-amber-400 text-[10px] font-mono tracking-[0.25em] uppercase mb-6">
            <Radio size={13} className="text-amber-400 animate-pulse" />
            <span>TACTICAL TELEMETRY // NIGHT PATROL GRID</span>
          </div>

          <h2 className="font-wordmark text-4xl sm:text-6xl text-[#F3ECE4] tracking-[0.1em] uppercase mb-4">
            PANAMUKKU LIVE PATROL RADAR
          </h2>

          <p className="font-editorial text-xl sm:text-2xl text-stone-300 italic max-w-2xl mx-auto leading-relaxed">
            “He doesn't wait for sirens. He watches the town’s acoustic pulse from the shadows.”
          </p>
        </div>

        {/* Tactical Map Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Radar Canvas */}
          <div className="lg:col-span-7 stall-card p-4 sm:p-6 rounded flex flex-col justify-between relative overflow-hidden">
            {/* Tactical Grid Top Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-amber-950/80 mb-4 text-[10px] font-mono text-stone-400">
              <span className="flex items-center space-x-1.5 text-amber-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>GRID FREQUENCY: 142.80 MHz</span>
              </span>
              <span>PATROL RANGE: 3.5 KM</span>
            </div>

            {/* Interactive Vector Map Surface */}
            <div className="relative w-full aspect-[4/3] rounded bg-[#060404] border border-amber-950/60 overflow-hidden">
              {/* Radar Grid Lines */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.08)_0%,transparent_75%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(40,25,18,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(40,25,18,0.3)_1px,transparent_1px)] bg-[size:40px_40px]" />
              
              {/* Pulsing Radar Rings from Tea Stall (Center Anchor) */}
              <div className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-amber-500/20 animate-ping" style={{ animationDuration: '4s' }} />
              <div className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-amber-500/10 pointer-events-none" />

              {/* Roadway Corridors SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                {/* Highway Bypass */}
                <path d="M 0 320 Q 200 240, 600 280" stroke="#78350F" strokeWidth="3" fill="none" strokeDasharray="6 4" />
                {/* Canal Line */}
                <path d="M 120 0 Q 180 180, 240 400" stroke="#1E3A8A" strokeWidth="4" fill="none" />
                {/* Main Junction Roads */}
                <line x1="200" y1="180" x2="450" y2="120" stroke="#52321E" strokeWidth="2" />
                <line x1="200" y1="180" x2="100" y2="350" stroke="#52321E" strokeWidth="2" />
                <line x1="200" y1="180" x2="480" y2="360" stroke="#52321E" strokeWidth="2" />
              </svg>

              {/* Sector Markers */}
              {SECTOR_DATA.map((sec) => {
                const isSelected = activeSector.id === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => handleSelectSector(sec)}
                    style={{ left: `${sec.coords.x}%`, top: `${sec.coords.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer focus:outline-none"
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Ping Ring */}
                      {isSelected && (
                        <span
                          className="absolute w-8 h-8 rounded-full animate-ping opacity-75"
                          style={{ backgroundColor: sec.color }}
                        />
                      )}
                      
                      {/* Marker Icon */}
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs transition-transform duration-300 shadow-md ${
                          isSelected ? 'scale-125 border-2 border-white' : 'group-hover:scale-110'
                        }`}
                        style={{ backgroundColor: sec.color, color: '#000' }}
                      >
                        {sec.id === 'stall' ? '☕' : <MapPin size={12} className="text-black" />}
                      </div>

                      {/* Tooltip Tag */}
                      <span className="absolute top-7 px-2 py-0.5 rounded bg-black/90 text-stone-200 font-mono text-[9px] whitespace-nowrap border border-stone-800 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                        {sec.name}
                      </span>
                    </div>
                  </button>
                );
              })}

              {/* Sweep Scan Line Animation */}
              {sweepTriggered && (
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ duration: 1.2, ease: 'linear' }}
                  className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent pointer-events-none"
                />
              )}
            </div>

            {/* Bottom Sector Strip */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-amber-950/60 text-[10px] font-mono text-stone-400">
              <span className="text-amber-400/90 font-bold">CLICK SECTOR TO INSPECT</span>
              <span>TAP SOS FOR IMMEDIATE RESPONSE</span>
            </div>
          </div>

          {/* Right Column: Selected Sector Dossier */}
          <div className="lg:col-span-5 stall-card stall-border-asymmetric p-6 sm:p-8 rounded flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-amber-950 mb-6">
                <div>
                  <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest block">
                    {activeSector.sector}
                  </span>
                  <h3 className="font-wordmark text-2xl text-[#F3ECE4] uppercase tracking-wide">
                    {activeSector.name}
                  </h3>
                </div>
                <span
                  className="px-2 py-1 rounded text-[10px] font-mono font-bold uppercase"
                  style={{
                    backgroundColor: `${activeSector.color}20`,
                    color: activeSector.color,
                    border: `1px solid ${activeSector.color}50`,
                  }}
                >
                  {activeSector.status}
                </span>
              </div>

              <p className="text-stone-300 font-sans text-xs sm:text-sm leading-relaxed font-light mb-6">
                {activeSector.description}
              </p>

              <div className="p-4 rounded bg-[#070504] border border-amber-950 mb-6">
                <span className="text-[10px] font-mono text-amber-500 uppercase tracking-wider block mb-1">
                  Recent Activity Log:
                </span>
                <p className="font-sans text-xs text-stone-300 font-light italic">
                  “{activeSector.recentIncident}”
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-amber-950/60">
              {/* Trigger Patrol Sweep Button */}
              <button
                onClick={handleRequestSweep}
                className="w-full py-2.5 rounded bg-stone-900 hover:bg-stone-800 border border-amber-900/40 text-amber-300 text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Eye size={14} />
                <span>{sweepTriggered ? 'Kinetic Sweep in Progress...' : 'Request Area Patrol Sweep'}</span>
              </button>

              {/* Direct Urgent SOS Button for this sector */}
              <button
                onClick={onOpenSOS}
                className="w-full py-3 rounded bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-wordmark text-lg uppercase tracking-wider transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-[0_0_20px_rgba(239,68,68,0.4)]"
              >
                <Zap size={18} />
                <span>Trigger Instant SOS in this Sector</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PanamukkuRadarMap;
