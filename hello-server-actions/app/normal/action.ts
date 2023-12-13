"use server";

export async function submitForm(data: {
  name: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
}) {
  // wait for few milliseconds to simulate a slow server
  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log(data);
}
