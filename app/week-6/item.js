export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-[#1e293b] text-white p-4 mb-4 rounded shadow">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-sm text-gray-300">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
