export function SearchForm() {
  return (
    <form className="flex gap-2">
      <input
        type="text"
        placeholder="Search freelancers..."
        className="border rounded px-3 py-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  );
}