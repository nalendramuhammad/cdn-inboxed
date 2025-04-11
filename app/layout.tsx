import "../styles/globals.scss";

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
          type="image/svg+xml" // Changed to svg format since the file is SVG
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
      <body>{children}</body>
    </html>
  );
}
