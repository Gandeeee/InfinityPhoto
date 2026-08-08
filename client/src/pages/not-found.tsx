import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col items-center justify-center bg-background px-6 text-center">
      <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-primary mb-6">
        Error 404
      </span>
      
      <h1 className="font-serif text-6xl md:text-8xl font-extralight tracking-wider text-foreground mb-6">
        Lost in Light
      </h1>
      
      <p className="text-sm md:text-base text-muted-foreground font-light max-w-md mb-12 leading-relaxed text-balance">
        The frame or perspective you are trying to view does not exist. Let's guide you back to our curated gallery.
      </p>

      {/* Premium Pill button back home */}
      <Link href="/">
        <Button
          className="group rounded-full pl-6 pr-2 py-6 h-auto transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] cursor-pointer focus-visible:ring-2 focus-visible:ring-primary/70"
        >
          <span className="text-xs uppercase tracking-[0.12em] font-semibold text-primary-foreground mr-2">Return Home</span>
          <div className="w-8 h-8 rounded-full bg-primary-foreground/15 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
            <ArrowUpRight className="w-4 h-4 text-primary-foreground" strokeWidth={1.5} />
          </div>
        </Button>
      </Link>
    </div>
  );
}
