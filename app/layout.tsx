import "../styles/globals.scss";
import { I18nProvider } from "./i18n-provider";
import TransitionWrapper from "../components/TransitionWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
          href="/logo/box.png"
          type="image/svg+xml"
        />
        <title>Inboxed - Your Trusted Partner</title>
        <meta
          name="description"
          content="Inboxed offers innovative digital solutions to help businesses grow and succeed in the digital world."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        {/* Meta Tag Open Graph */}
        <meta
          property="og:title"
          content="Inboxed - Your Trusted Partner"
        />
        <meta
          property="og:description"
          content="Inboxed offers innovative digital solutions to help businesses grow and succeed in the digital world."
        />
        <meta
          property="og:image"
          content="/logo/box.png"
        />
        <meta
          property="og:url"
          content="https://www.inboxed.com"
        />
        <meta
          property="og:type"
          content="website"
        />

        {/* Meta Tag Twitter Card */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="Inboxed - Your Trusted Partner"
        />
        <meta
          name="twitter:description"
          content="Inboxed offers innovative digital solutions to help businesses grow and succeed in the digital world."
        />
        <meta
          name="twitter:image"
          content="/logo/box.png"
        />

        {/* Rel Canonical */}
        <link
          rel="canonical"
          href="https://www.inboxed.com"
        />

        {/* Meta Tag Robots */}
        <meta
          name="robots"
          content="index, follow"
        />
      </head>
      <body>
        <I18nProvider>
          {/* <TawkToWidget /> */}
          <TransitionWrapper>{children}</TransitionWrapper>
          <SpeedInsights />
        </I18nProvider>
      </body>
    </html>
  );
}
