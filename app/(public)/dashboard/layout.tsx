import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="dashboard-layout">
      <div className="dashboard-container">
        <p>iouasjdiuefoieroiiofdje</p>
        <main className="dashboard-content">{children}</main>
      </div>
    </div>
  );
}
