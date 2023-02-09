import { useRef } from "react";

function TodoForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!inputRef.current) return;

    inputRef.current.value = e.target.value;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      console.log(inputRef.current.value);
    }
  };

  return (
    <form
      className="flex w-full flex-row items-center justify-between overflow-hidden rounded-md bg-gray-700 shadow"
      onSubmit={handleSubmit}
    >
      <input
        className="w-full bg-transparent p-3 text-white outline-none"
        type="text"
        placeholder="Buy Milk.."
        onChange={handleChange}
        ref={inputRef}
      />
      <button
        className="self-stretch bg-gray-600 px-3 text-white hover:bg-gray-500"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
