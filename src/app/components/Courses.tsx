import React from 'react';
import Link from 'next/link';

const fetchCourses = async () => {
    const response = await fetch('http://localhost:3000/api/courses');
    const courses = await response.json();

    return courses;
};

type courseObject = {
    id: string;
    title: string;
    description: string;
    link: string;
    level: 'Beginner' | 'Intermediate' | 'All Levels';
};

const Courses = async () => {
    const courses = await fetchCourses();

    return (
        <div className='courses'>
            {courses.map((course: courseObject) => (
                <div key={course.id} className='card'>
                    <h2>{course.title}</h2>
                    <small>Level: {course.level}</small>
                    <p>{course.description}</p>
                    <Link href={course.link} target='_blank' className='btn'>
                        Link to course<sup>↗</sup>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Courses;
