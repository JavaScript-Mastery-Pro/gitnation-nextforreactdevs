import React from "react";

async function About() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const data = await response.json();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>About page</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default About;
