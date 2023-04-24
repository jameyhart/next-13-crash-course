import { v4 as uuid4 } from 'uuid';
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

    const newCourse = {
        id: uuid4(),
        title,
        description,
        level,
        link
    };

    courses.push(newCourse);

    return NextResponse.json(courses);
};
