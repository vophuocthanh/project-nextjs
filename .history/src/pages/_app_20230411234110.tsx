import "@/styles/globals.scss";
import { QueryClient } from "@tanstack/react-query";
import type { AppProps } from "next/app";
// Create a client
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>

  <Component {...pageProps} />);
    </QueryClientProvider>
}
