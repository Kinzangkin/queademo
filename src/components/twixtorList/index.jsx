import Link from 'next/link';

export default function TwixtorList({ data = [] }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Media List</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map(media => (
          <li key={media.id} className="border p-4 rounded shadow hover:shadow-lg transition cursor-pointer">
            <Link href={`/twixtdetail/${media.id}`}>
                <img 
                  src={media.thumbnail || '/default-thumbnail.jpg'} 
                  alt={media.title} 
                  className="w-full h-48 object-cover mb-2 rounded" 
                />
                <h2 className="text-lg font-semibold">{media.title}</h2>
                <p className="text-gray-600 line-clamp-3">{media.description || 'No description available.'}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
