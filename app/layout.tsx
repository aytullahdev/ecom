import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { resolver, theme } from "@/styles/index";
import { Notifications } from "@mantine/notifications";
import Provider from "@/libs/provider";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantine/code-highlight/styles.css";
import "../styles/globals.css";

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
          <Provider>{children}</Provider>
        </MantineProvider>
      </body>
    </html>
  );
}
