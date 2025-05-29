import prisma from '../../../../lib/prisma';
import { NextResponse } from 'next/server';

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

export async function GET() {
  if (!process.env.DATABASE_URL) {
    // Return mock data if DATABASE_URL is not set
    return NextResponse.json(mockMediaData);
  }
  try {
    const data = await prisma.media.findMany();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching media:', error);
    return NextResponse.json({ error: 'Failed to fetch media' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!process.env.DATABASE_URL) {
    // Return error or mock success response when no DB
    return NextResponse.json(
      { error: 'Database not configured. Cannot create media.' },
      { status: 500 }
    );
  }
  try {
    const body = await request.json();
    const { title, description, file_link, thumbnail } = body;

    if (!title || !file_link) {
      return NextResponse.json(
        { error: 'Title and file_link are required' },
        { status: 400 }
      );
    }

    const newMedia = await prisma.media.create({
      data: {
        title,
        description,
        file_link,
        thumbnail,
      },
    });

    return NextResponse.json(newMedia, { status: 201 });
  } catch (error) {
    console.error('Error creating media:', error);
    return NextResponse.json({ error: 'Failed to create media' }, { status: 500 });
  }
}
