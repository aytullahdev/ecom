import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { resolver, theme } from "@/styles/index";
import { Notifications } from "@mantine/notifications";
import Provider from "@/libs/provider";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantine/code-highlight/styles.css";
import "../styles/globals.css";
import Layout from "@/component/Layout";
import React from "react";

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
      <body>
        <MantineProvider theme={{ ...theme }} cssVariablesResolver={resolver}>
          <Notifications position="top-center" />
          <Provider>
            <Layout>{children}</Layout>
          </Provider>
        </MantineProvider>
      </body>
    </html>
  );
}
