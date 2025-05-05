"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Jika token tidak ada, arahkan ke halaman login
      router.push("/login");
    } else {
      // Jika token ada, ambil data pengguna dari token
      const decodedUser = JSON.parse(atob(token.split(".")[1])); // Decode token JWT
      setUser(decodedUser);
    }
  }, [router]);

  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard, {user ? user.username : "Loading..."}</h1>
      {/* Display additional dashboard content here */}
    </div>
  );
}
