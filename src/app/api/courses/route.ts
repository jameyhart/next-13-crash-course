import { NextResponse } from 'next/server';

import courses from './data.json';

export const GET = async () => {
    return NextResponse.json(courses);
};

export const POST = async (request: Request) => {
    const {
        title,
        description,
        level,
        link
    } = await request.json();

    console.log(title, description, level, link);

    return NextResponse.json({ message: 'Course created.' });
};
