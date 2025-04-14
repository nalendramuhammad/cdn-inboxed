import "../styles/globals.scss";
import { I18nProvider } from "./i18n-provider";
import TransitionWrapper from "../components/TransitionWrapper";
import TawkToWidget from "../components/ui/TawkToWidget";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/logo/inboxed2.svg"
          type="image/svg+xml"
        />
        <title>Inboxed - Your Trusted Partner</title>
        <meta
          name="description"
          content="Inboxed offers innovative digital solutions."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </head>
      <body>
        <I18nProvider>
          <TawkToWidget />
          <TransitionWrapper>{children}</TransitionWrapper>
        </I18nProvider>
      </body>
    </html>
  );
}
