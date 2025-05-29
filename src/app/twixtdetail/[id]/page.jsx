import prisma from '@/lib/prisma';

const mockMediaData = [
  {
    id: 1,
    title: 'Mock Media 1',
    description: 'This is a mock media description.',
    file_link: 'https://example.com/file1.mp4',
    thumbnail: 'https://example.com/thumb1.jpg',
  },
  {
    id: 2,
    title: 'Mock Media 2',
    description: 'This is another mock media description.',
    file_link: 'https://example.com/file2.mp4',
    thumbnail: 'https://example.com/thumb2.jpg',
  },
];

export async function generateStaticParams() {
  if (!process.env.DATABASE_URL) {
    return mockMediaData.map((media) => ({ id: media.id.toString() }));
  }
  const medias = await prisma.media.findMany({ select: { id: true } });
  return medias.map((media) => ({ id: media.id.toString() }));
}

export default async function TwixtDetailPage({ params }) {
  // ✅ Perbaikan: await params karena bisa berupa Promise di Next.js App Router terbaru
  const { id } = await params;

  // Validasi ID (opsional tapi direkomendasikan)
  const numericId = Number(id);
  if (isNaN(numericId)) {
    return <p className="text-white text-center mt-10">Invalid media ID</p>;
  }

  let media;
  if (!process.env.DATABASE_URL) {
    media = mockMediaData.find((m) => m.id === numericId);
  } else {
    media = await prisma.media.findUnique({
      where: { id: numericId },
    });
  }

  if (!media) {
    return <p className="text-white text-center mt-10">Media not found</p>;
  }

  return (
    <div className="bg-black min-h-screen text-white px-4 py-8">
      <div className="max-w-3xl mx-auto border border-white rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4 border-b border-white pb-2">
          {media.title}
        </h1>

        {media.thumbnail && (
          <img
            src={media.thumbnail}
            alt={media.title}
            className="w-full h-auto rounded mb-6 border border-white"
          />
        )}

        <p className="mb-4">{media.description || 'No description available.'}</p>

        <a
          href={media.file_link}
          className="inline-block px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download File
        </a>
      </div>
    </div>
  );
}
