import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/home"); // arahkan langsung ke /home (atau halaman utama kamu)
}
