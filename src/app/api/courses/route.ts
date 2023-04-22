import { NextResponse } from 'next/server';

import courses from './data.json';

export const GET = async () => {
    return NextResponse.json(courses);
};
