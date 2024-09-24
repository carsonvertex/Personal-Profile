export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="h-screen mt-20 py-5 container text-center justify-center">
        {children}
      </div>
    </section>
  );
}
