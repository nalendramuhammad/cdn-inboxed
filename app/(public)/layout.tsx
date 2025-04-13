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
      <Footer />
    </>
  );
}
