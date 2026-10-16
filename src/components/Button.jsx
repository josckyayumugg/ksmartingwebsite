export default function Button({ onClick, content }) {
  return (
    <button
      onClick={onClick}
      className="rounded-2xl text-white px-2 h-12 text-sm border border-sm border-yellow-500"
    >
      {content}
    </button>
  );
}
