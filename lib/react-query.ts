import { QueryClient } from "@tanstack/react-query";

let queryClient: QueryClient;

export function getQueryClient() {
    // Check if the queryClient instance already exists
    // If it does, return the existing instance
    // If it doesn't, create a new instance
    // and assign it to the variable

  if (!queryClient) {
    console.log("Creating a new QueryClient instance");
    queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60 * 10, // 10 minutes
                refetchOnWindowFocus: false,
                refetchOnMount: false,
                refetchOnReconnect: true,
            },
        },
    });
  }
  return queryClient;
}