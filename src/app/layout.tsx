import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ReactQueryProvider from "@/components/Providers";
import GSAPConfig from "@/components/GSAPConfig";
import "./globals.css";

// export const metadata: Metadata = {
//   title: "Chokmarh Technologies",
//   description: "Chokmarh Technologies is a leading provider of innovative technology solutions to businesses of all sizes.",
// };

export const metadata: Metadata = {
  // metadataBase: new URL(getServerSideURL()),
  title: {
    default: 'Chokmarh Technologies',
    template: '%s | Chokmarh Technologies',
  },
  description: 'Chokmarh Technologies is a leading provider of innovative technology solutions to businesses of all sizes.',
  // openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@chokmarhtech',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="/icon.png" rel="icon" sizes="32x32" />
      </head>
      <body className="antialiased">
        <ReactQueryProvider>
          <TooltipProvider>
            <GSAPConfig />
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
