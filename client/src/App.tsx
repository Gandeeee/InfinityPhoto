import { Router, Switch, Route } from "wouter";
import { TooltipProvider } from "@/components/ui/tooltip";
import ClickSpark from "@/components/ui/ClickSpark";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

// 2. Kita tentukan base path kita (harus sama dengan di vite.config.ts)
const appBase = typeof window !== "undefined" && window.location.pathname.startsWith("/InfinityPhoto-main")
  ? "/InfinityPhoto-main"
  : "";

function App() {
  return (
    <TooltipProvider>
      <ClickSpark sparkColor="#C5A059" sparkSize={12} sparkRadius={22} sparkCount={8} duration={400}>
        <Router base={appBase}>
          <Switch>
            <Route path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </ClickSpark>
    </TooltipProvider>
  );
}

export default App;

