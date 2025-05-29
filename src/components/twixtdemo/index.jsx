export default function Twixtdemo({ data = [] }) {
  return (
    <div className="bg-black min-h-screen text-white px-4 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((media) => (
          <div key={media.id} className="border border-white rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">{media.title}</h2>
            {media.thumbnail && (
              <img
                src={media.thumbnail}
                alt={media.title}
                className="w-full h-auto rounded mb-3 border border-white"
              />
            )}
            <p className="mb-3">{media.description}</p>
            <a
              href={media.file_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-1 border border-white rounded hover:bg-white hover:text-black transition"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
