import React from "react";

async function SampleSuspense() {
  const response = await fetch("https://pokeapi.co/api/v2/berry");
  const data = await response.json();

  return (
    <div>
      <h4>Sample Suspsense Component</h4>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default SampleSuspense;
