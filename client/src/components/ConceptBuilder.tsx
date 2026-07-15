import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Check } from "lucide-react";

type SessionType = "wedding" | "event" | "lifestyle";
type DurationType = "2h" | "4h" | "fullday";
type DeliverableType = "digital" | "album" | "exclusive";

const sessionOptions = {
  wedding: "Wedding Photography",
  event: "Event Coverage",
  lifestyle: "Lifestyle Portrait",
};

const durationOptions = {
  "2h": "2 Hours",
  "4h": "4 Hours",
  fullday: "Full Day Session",
};

const deliverableOptions = {
  digital: "Digital Gallery Only",
  album: "Premium Hardcover Album",
  exclusive: "Hardcover Album & Custom USB Package",
};

export default function ConceptBuilder() {
  const [session, setSession] = useState<SessionType>("wedding");
  const [duration, setDuration] = useState<DurationType>("4h");
  const [deliverable, setDeliverable] = useState<DeliverableType>("digital");

  const handleSendInquiry = () => {
    const textMessage = `Hello Infinity Photo, I am planning a photo session with the following details:
- Type: ${sessionOptions[session]}
- Duration: ${durationOptions[duration]}
- Deliverable: ${deliverableOptions[deliverable]}

Are there available schedules for this concept? Thank you.`;

    const encoded = encodeURIComponent(textMessage);
    window.open(`https://wa.me/6282146802311?text=${encoded}`, "_blank");
  };

  return (
    <div className="glass w-full rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between h-full">
      <div>
        <h3 className="font-serif text-2xl font-light mb-2 text-foreground tracking-wide text-center">
          Plan Your Shoot Concept
        </h3>
        <p className="text-muted-foreground text-xs leading-relaxed text-center mb-8 font-light">
          Select your desired shoot parameters below to configure a custom photography session package.
        </p>

        {/* 1. SESSION SELECTION */}
        <div className="mb-6">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-foreground/80 mb-2 block">
            1. Select Session Type
          </span>
          <div className="grid grid-cols-3 gap-2">
            {(Object.keys(sessionOptions) as SessionType[]).map((key) => (
              <button
                key={key}
                onClick={() => setSession(key)}
                className={`text-[11px] uppercase tracking-wider py-3 px-2 rounded-xl border transition-all duration-300 font-semibold ${
                  session === key
                    ? "bg-primary/10 border-primary text-primary"
                    : "bg-background/20 border-foreground/[0.06] text-muted-foreground hover:bg-background/40 hover:text-foreground"
                }`}
              >
                {key === "wedding" ? "Wedding" : key === "event" ? "Event" : "Portrait"}
              </button>
            ))}
          </div>
        </div>

        {/* 2. DURATION SELECTION */}
        <div className="mb-6">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-foreground/80 mb-2 block">
            2. Coverage Duration
          </span>
          <div className="grid grid-cols-3 gap-2">
            {(Object.keys(durationOptions) as DurationType[]).map((key) => (
              <button
                key={key}
                onClick={() => setDuration(key)}
                className={`text-[11px] uppercase tracking-wider py-3 px-2 rounded-xl border transition-all duration-300 font-semibold ${
                  duration === key
                    ? "bg-primary/10 border-primary text-primary"
                    : "bg-background/20 border-foreground/[0.06] text-muted-foreground hover:bg-background/40 hover:text-foreground"
                }`}
              >
                {durationOptions[key]}
              </button>
            ))}
          </div>
        </div>

        {/* 3. DELIVERABLES SELECTION */}
        <div className="mb-8">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-foreground/80 mb-2 block">
            3. Deliverables Package
          </span>
          <div className="flex flex-col gap-2">
            {(Object.keys(deliverableOptions) as DeliverableType[]).map((key) => (
              <button
                key={key}
                onClick={() => setDeliverable(key)}
                className={`text-left text-xs py-3.5 px-4 rounded-xl border transition-all duration-300 font-light flex items-center justify-between ${
                  deliverable === key
                    ? "bg-primary/10 border-primary text-primary font-medium"
                    : "bg-background/20 border-foreground/[0.06] text-muted-foreground hover:bg-background/40 hover:text-foreground"
                }`}
              >
                <span>{deliverableOptions[key]}</span>
                {deliverable === key && <Check className="w-4 h-4 text-primary" />}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* INQUIRY PANEL */}
      <div className="border-t border-foreground/[0.05] pt-6 flex flex-col items-center">
        <div className="w-full p-0.5 rounded-full border border-foreground/[0.08] bg-foreground/[0.02] group flex">
          <Button
            className="w-full rounded-full pl-6 pr-2 py-5 bg-primary text-primary-foreground hover:bg-primary/95 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] flex justify-between items-center"
            onClick={handleSendInquiry}
          >
            <span className="text-[11px] uppercase tracking-[0.1em] font-semibold text-left">Send Concept to WhatsApp</span>
            <div className="w-7 h-7 rounded-full bg-primary-foreground/15 flex items-center justify-center transition-all duration-500 group-hover:scale-105">
              <Phone className="h-3.5 w-3.5 text-primary-foreground" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
