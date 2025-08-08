export default function Loading() {
  return (
    <main className="bg-white pt-28 pb-24 text-gray-800 font-sans">
      <article className="max-w-[760px] mx-auto px-6 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-2/3 mb-6" />
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-8" />
        <div className="h-64 bg-gray-200 rounded-xl mb-10" />

        <div className="space-y-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded w-full" />
          ))}
          <div className="h-4 bg-gray-200 rounded w-5/6" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
        </div>

        <div className="mt-16 space-y-3">
          <div className="h-5 bg-gray-300 rounded w-1/4" />
          <div className="h-3 bg-gray-200 rounded w-3/4" />
          <div className="h-3 bg-gray-200 rounded w-2/3" />
        </div>
      </article>
    </main>
  );
}
