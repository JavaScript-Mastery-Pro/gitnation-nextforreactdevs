function Home() {
  async function handleSubmit(formData: FormData) {
    "use server";

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
    };

    // do any db operations here
    console.log(data);
  }

  return (
    <main className="max-w-5xl p-24 flex flex-col mx-auto gap-10">
      <h1 className="font-bold text-2xl">Server Form</h1>
      {/* The action prop in a form component can accept either a URL or a function. */}
      {/* If a URL is provided, the form behaves similarly to the HTML form component, with data being sent to the specified URL upon submission */}
      {/* If a function is provided, that function will handle the form submission. The function can be asynchronous, and it will receive a single argument containing the form data of the submitted form. */}
      {/* When a function is used for action or formAction, the HTTP method used will be POST, irrespective of the value set for the method prop. This is an important consideration when dealing with form submissions and choosing the appropriate HTTP method. */}
      <form action={handleSubmit} className="flex flex-col gap-5">
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
        <button type="submit" className="bg-teal-400 p-2 outline-teal-800">
          Submit
        </button>
      </form>
    </main>
  );
}

export default Home;
