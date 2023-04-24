// @ts-nocheck
import { NextResponse } from 'next/server';

import courses from '../data.json';

export const GET = async (request: Request) => {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');
    
    const filteredCourses = courses.filter((course) => {
            // Make both lowercase
            const lowerCaseCourseTitle = course.title.toLowerCase();
            const lowerCaseQuery = query?.toLowerCase();
            
            return lowerCaseCourseTitle.includes(lowerCaseQuery);
        });

    return NextResponse.json(filteredCourses);
};
