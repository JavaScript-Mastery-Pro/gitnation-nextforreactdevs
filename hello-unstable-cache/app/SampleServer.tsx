import {
  getDataWithCache,
  getDataWithUnstableCache,
  getDataWithoutCache,
} from "./utils";

async function SampleServer() {
  const withCacheResult = await getDataWithCache();
  const withoutCacheResult = await getDataWithoutCache();
  const withUnstableCache = await getDataWithUnstableCache();

  return (
    <div>
      <h1>Random Number inside Component</h1>

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
  );
}

export default SampleServer;
