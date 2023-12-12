import AnotherFetch from "./AnotherFetch";

async function Home() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const data = await response.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}

export default Home;
