// Salin dan Timpa semua kode di client/src/App.tsx dengan kode ini:

// 1. Kita tambahkan 'Router' dari wouter
import { Router, Switch, Route } from "wouter";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

// 2. Kita tentukan base path kita (harus sama dengan di vite.config.ts)
// Ambil dari GITHUB_PAGES_REPO_NAME di vite.config.ts
const appBase = "/InfinityPhoto-main";

function App() {
  return (
    <TooltipProvider>
      {/* 3. Kita bungkus <Switch> dengan <Router> 
           dan berikan prop 'base={appBase}'
      */}
      <Router base={appBase}>
        <Switch>
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </TooltipProvider>
  );
}

export default App;

