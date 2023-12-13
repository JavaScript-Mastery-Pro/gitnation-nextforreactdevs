import React from "react";

async function fetchPokemon(id: string) {
  const respone = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await respone.json();

  return data;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = await fetchPokemon(id);

  const title = data.name;
  const description = `Welcome to ${title}'s page.`;

  return {
    title: title.charAt(0).toUpperCase() + title.slice(1),
    description,
  };
}

async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = await fetchPokemon(id);

  return (
    <main>
      <h1>{data.name}</h1>
      <p>Welcome to {data.name}&apos;s page.</p>

      <h2>Abilities</h2>
      <ul>
        {data.abilities.map(
          ({
            ability,
          }: {
            ability: {
              name: string;
            };
          }) => (
            <li key={ability.name}>{ability.name}</li>
          )
        )}
      </ul>
    </main>
  );
}

export default Page;
