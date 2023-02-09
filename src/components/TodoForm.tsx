function TodoForm() {
  return (
    <form className="flex w-full flex-row items-center justify-between overflow-hidden rounded-md bg-gray-700 shadow">
      <input
        className="w-full bg-transparent p-3 text-white outline-none"
        type="text"
        placeholder="Buy Milk.."
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
