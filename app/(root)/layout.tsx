
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main  className="bg-gradient">
        {children}
    </main>
  );
}
