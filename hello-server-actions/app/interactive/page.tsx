import Button from "./button";

// a demo to show how to do loading and error handling with server actions in a form
function Interactive() {
  async function handleSubmit(formData: FormData) {
    "use server";

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
    };

    // wait for few milliseconds to simulate a slow server
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(data);
  }

  return (
    <main className="max-w-5xl p-24 flex flex-col mx-auto gap-10">
      <h1 className="font-bold text-2xl">Interactive Server Form</h1>
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
        <Button />
      </form>
    </main>
  );
}

export default Interactive;
