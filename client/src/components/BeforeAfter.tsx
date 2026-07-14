import { useState, useRef } from "react";
import aboutImage from "@assets/generated_images/Photographer_at_work_BTS_71536412.png";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) { // Left mouse button dragged
      handleMove(e.clientX);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <span className="text-[9px] uppercase tracking-[0.25em] font-semibold text-primary block text-center">
        Drag to compare: RAW vs Finished Edit
      </span>
      <div 
        ref={containerRef}
        className="relative w-full aspect-[16/10] rounded-[2rem] overflow-hidden select-none cursor-ew-resize border border-foreground/[0.06] shadow-sm"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={(e) => handleMove(e.clientX)}
      >
        {/* Before Image (RAW Edit simulation via CSS filter) */}
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutImage} 
            alt="RAW Camera Capture" 
            className="w-full h-full object-cover saturate-[0.25] contrast-[0.8] brightness-[0.85]"
          />
          <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-[9px] text-foreground uppercase tracking-widest font-medium">
            RAW Capture
          </div>
        </div>

        {/* After Image (Cinematic Edit) */}
        <div 
          className="absolute inset-0 z-10 overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img 
            src={aboutImage} 
            alt="Final Color Grade" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full text-[9px] text-primary-foreground uppercase tracking-widest font-semibold">
            Final Edit
          </div>
        </div>

        {/* Slider Line Divider */}
        <div 
          className="absolute top-0 bottom-0 z-20 w-[1.5px] bg-primary/60 cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Drag Handle button */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border border-primary/30 shadow-lg flex items-center justify-center transition-transform active:scale-90">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M21 12H3"/><path d="m15 6 6 6-6 6"/><path d="m9 6-6 6 6 6"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
