import { Suspense } from "react";
import SampleSuspense from "./SampleSuspense";

export default function Home() {
  console.log("Hello from RSC 👋");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 max-w-6xl mx-auto">
      <div>
        <h1>
          Welcome to Git Nation &quot;Next.js for React.js Developers&quot;
          Workshopt
        </h1>

        <p>This is a Server component</p>
      </div>
     
      <Suspense fallback={<p>Loading...</p>}>
        <SampleSuspense />
      </Suspense>

      <div>
        <p>This is just to show that app will keep doing the next task rather than waiting for the <code>SampleSuspense</code> to finish doing its work.</p>
      </div>
    </main>
  );
}
