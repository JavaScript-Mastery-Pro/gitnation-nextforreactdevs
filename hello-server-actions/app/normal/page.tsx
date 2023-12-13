"use client";

import { useState } from "react";
import { submitForm } from "./action";

function Page() {
  // create a form with two input fields and a submit button
  // when the form is submitted, the handleSubmit function will be called

  // we can use states or use formdata to get the form values
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      setLoading(true);
      setError(null);

      const formData = new FormData(event.currentTarget);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
      };

      await submitForm(data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-5xl p-24 flex flex-col mx-auto gap-10">
      <h1 className="font-bold text-2xl">Normal Form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          name="name"
          className="p-2 text-zinc-800"
          placeholder="Your name"
        />
        <input
          type="email"
          name="email"
          className="p-2 text-zinc-800"
          placeholder="Your email"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-teal-400 p-2 outline-teal-800"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {error && (
        <div className="bg-red-500 text-white p-2 rounded-md">
          {error.message}
        </div>
      )}
    </main>
  );
}

export default Page;
