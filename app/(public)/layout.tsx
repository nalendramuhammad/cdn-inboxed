import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactButton from "../../components/ui/ContactButton";

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

      <script src="https://cdn.botpress.cloud/webchat/v2.4/inject.js"></script>
      <script src="https://files.bpcontent.cloud/2025/04/15/06/20250415064935-3P4HDT8Z.js"></script>

      <Footer />
    </>
  );
}
