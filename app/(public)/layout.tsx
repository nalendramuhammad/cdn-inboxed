import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactButton from "../../components/ui/ContactButton";
import Script from "next/script";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ContactButton />

      <Script
        src="https://cdn.botpress.cloud/webchat/v2.4/inject.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://files.bpcontent.cloud/2025/05/05/13/20250505135014-JKAVRT4B.js"
        strategy="afterInteractive"
      />

      <Footer />
    </>
  );
}
