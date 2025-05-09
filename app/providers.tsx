"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/react-query";

const queryClient = getQueryClient();

// This component wraps the application with the QueryClientProvider
//    and provides the query client to all components in the application
//    and it will be used for all providers in the application for keeping the layout clean

export function Providers({ children }: { children: React.ReactNode }) {

  return (
    <QueryClientProvider client={queryClient}>
            {children}
    </QueryClientProvider>
  );
}