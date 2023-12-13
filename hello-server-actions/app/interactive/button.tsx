"use client";

import { useFormStatus } from "react-dom";

function Button() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-teal-400 p-2 outline-teal-800"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

export default Button;
