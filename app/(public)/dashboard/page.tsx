"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type User = {
  username: string;
};

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    } else {
      const decodedUser = JSON.parse(atob(token.split(".")[1]));
      setUser(decodedUser);
    }
  }, [router]);

  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard, {user ? user.username : "Loading..."}</h1>
    </div>
  );
}
