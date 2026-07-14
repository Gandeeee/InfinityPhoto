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
      <div className="p-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 group flex">
        <Link href="/">
          <Button
            className="rounded-full pl-6 pr-2 py-6 bg-primary text-white hover:bg-primary/95 transition-premium"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-medium mr-2">Return Home</span>
            <div className="w-8 h-8 rounded-full bg-white/25 flex items-center justify-center transition-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
}
