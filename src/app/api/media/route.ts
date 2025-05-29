import prisma from '../../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const data = await prisma.media.findMany();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching media:', error);
    return NextResponse.json({ error: 'Failed to fetch media' }, { status: 500 });
  }
}

export async function POST(request: Request) {
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
