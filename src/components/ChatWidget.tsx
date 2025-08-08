export default function ChatWidget() {
  return (
    <button
      aria-label="Chat"
      className="fixed bottom-6 right-6 rounded-full w-12 h-12 shadow-lg bg-blue-600 text-white grid place-items-center"
      onClick={() => alert("Chat em breve")}
    >
      💬
    </button>
  );
}
