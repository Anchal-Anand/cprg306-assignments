import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-6 bg-black min-h-screen flex justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-white mb-6">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
}
