export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="dashboard-layout">
      <h1>Dashboard</h1>
      {children}
    </section>
  );
}
