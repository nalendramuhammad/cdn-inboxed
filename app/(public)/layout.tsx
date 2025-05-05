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

      {/* Add async or defer to load the scripts asynchronously */}
      <Script
        src="https://cdn.botpress.cloud/webchat/v2.4/inject.js"
        strategy="afterInteractive" // Load script after interactive
      />
      <Script
        src="https://files.bpcontent.cloud/2025/04/15/06/20250415064935-3P4HDT8Z.js"
        strategy="afterInteractive" // Load script after interactive
      />

      <Footer />
    </>
  );
}
