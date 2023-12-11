import Client from "./client";

export default function Home() {
  console.log("Hello from RSC 👋");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Git Nation &quot;Next.js for React.js Developers&quot; Workshopt</h1>

      <p>This is a Server component</p>

      <Client />
    </main>
  );
}
