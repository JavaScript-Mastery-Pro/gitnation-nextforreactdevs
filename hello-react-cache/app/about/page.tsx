import SampleServer from "../SampleServer";
import { getDataWithCache, getDataWithoutCache } from "../utils";

async function About() {
  const withCacheResult = await getDataWithCache();
  const withoutCacheResult = await getDataWithoutCache();

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <div>
        <h1>Random Number on `/about` page</h1>

        <p>
          With cache: <code>{withCacheResult}</code>
        </p>
        <p>
          Without cache: <code>{withoutCacheResult}</code>
        </p>
      </div>

      <SampleServer />
    </main>
  );
}

export default About;
