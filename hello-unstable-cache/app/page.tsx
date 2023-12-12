import SampleServer from "./SampleServer";
import {
  getDataWithCache,
  getDataWithUnstableCache,
  getDataWithoutCache,
} from "./utils";

async function Home() {
  const withCacheResult = await getDataWithCache();
  const withoutCacheResult = await getDataWithoutCache();
  const withUnstableCache = await getDataWithUnstableCache();

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <div>
        <h1>Random Number on `/home` page</h1>

        <p>
          With cache: <code>{withCacheResult}</code>
        </p>
        <p>
          With unstable cache: <code>{withUnstableCache}</code>
        </p>
        <p>
          Without cache: <code>{withoutCacheResult}</code>
        </p>
      </div>

      <SampleServer />
    </main>
  );
}

export default Home;
