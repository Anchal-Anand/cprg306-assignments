import ItemList from './item-list';

export default function Page() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-start p-8">
      <div className="w-full max-w-2xl">
        <h1 className="text-5xl font-extrabold text-white mb-6 text-center">
          Shopping List
        </h1>
        <ItemList />
      </div>
    </main>
  );
}
