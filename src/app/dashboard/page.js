export const metadata = {
  title: "Dashboard | MerlinFlow Technologies",
  description: "Access your MerlinFlow dashboard.",
  robots: {
    index: false,
    follow: false,
  }
};

export default function DashboardPage() {
  return (
    <main style={{ paddingTop: '120px', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-color)' }}>Dashboard</h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>Welcome to MerlinFlow! The dashboard portal is currently under construction.</p>
    </main>
  );
}
