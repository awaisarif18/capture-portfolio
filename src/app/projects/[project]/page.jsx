export default function ProjectPage({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {params.project}
    </main>
  );
}
