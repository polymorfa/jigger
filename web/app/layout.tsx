import type { Metadata } from "next";
import "./globals.css";
import { AppHeader } from "@/components/app-header";
import { AppNav } from "@/components/app-nav";
import { LangProvider } from "@/components/lang-context";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: { default: "jigger", template: "%s · jigger" },
  description:
    "A browser over reverse-engineered WhatsApp Web protocol data: A/B properties, WAM analytics, IQ operations, protobuf messages, and per-library coverage.",
};

// Set the theme before first paint to avoid a flash.
const bootScript = `(function(){try{var t=localStorage.getItem('jigger.theme');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t;}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <TooltipProvider>
        <LangProvider>
          <div className="app-shell flex flex-col">
            <AppHeader />
            <AppNav />
            <main className="min-h-0 flex-1 overflow-hidden">{children}</main>
          </div>
        </LangProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
