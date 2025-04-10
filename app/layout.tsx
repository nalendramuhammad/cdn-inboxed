import "../styles/globals.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Menambahkan favicon di head */}
        <link
          rel="icon"
          href="logo/inboxed2.svg"
          type="image/png"
        />
        <title>Inboxed - Digital Solutions</title>
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
