function Todos() {
  return (
    <div className="flex flex-col gap-4">
      <article className="flex flex-col justify-center rounded-md bg-gray-700 p-4">
        <header className="flex flex-row items-center justify-between">
          <h2 className="font-semibold text-white">
            Clean Warehouse by tomorrow
          </h2>
          <div className="flex flex-row items-center gap-2">
            <button className="rounded-md bg-gray-600 px-3 py-1 text-white hover:bg-gray-800">
              Edit
            </button>
            <button className="rounded-md bg-gray-600 px-3 py-1 text-white hover:bg-gray-800">
              Complete
            </button>
          </div>
        </header>
        <div className="mt-2 flex flex-row items-center justify-between">
          <button className="rounded-md bg-gray-600 px-3 py-1 text-white hover:bg-gray-800">
            Update
          </button>
        </div>
      </article>
      <article className="flex flex-col justify-center rounded-md bg-gray-700 p-4">
        <header className="flex flex-row items-center justify-between">
          <h2 className="font-semibold text-white">
            Clean Warehouse by tomorrow
          </h2>
          <div className="flex flex-row items-center gap-2">
            <button className="rounded-md bg-gray-600 px-3 py-1 text-white hover:bg-gray-800">
              Edit
            </button>
            <button className="rounded-md bg-gray-600 px-3 py-1 text-white hover:bg-gray-800">
              Complete
            </button>
          </div>
        </header>
        <div className="mt-2 flex flex-row items-center justify-between">
          <button className="rounded-md bg-gray-600 px-3 py-1 text-white hover:bg-gray-800">
            Update
          </button>
        </div>
      </article>
    </div>
  );
}

export default Todos;
