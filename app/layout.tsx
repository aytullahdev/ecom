"use client";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { resolver, theme } from "@/styles/index";
import { Notifications } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantine/code-highlight/styles.css";
import "../styles/globals.css";

const queryClient = new QueryClient();
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className="w-screen h-screen">
        <MantineProvider theme={{ ...theme }} cssVariablesResolver={resolver}>
          <Notifications position="top-center" />
          <QueryClientProvider client={queryClient}></QueryClientProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
