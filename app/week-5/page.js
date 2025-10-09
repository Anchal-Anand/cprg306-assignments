import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 p-5">
      <h1 className="text-3xl font-bold text-center mb-10">
        Week 5: Add a New Item
      </h1>
      <NewItem />
    </main>
  );
}
