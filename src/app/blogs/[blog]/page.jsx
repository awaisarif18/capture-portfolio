export default function BlogPage({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {params.blog}
    </main>
  );
}
