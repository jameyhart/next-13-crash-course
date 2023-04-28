import React from 'react';
import Link from 'next/link';

type course = {
    id: string;
    title: string;
    description: string;
    link: string;
    level: 'Beginner' | 'Intermediate' | 'All Levels';
}

type Props = {
    courses: course[]
};

const Courses: React.FC<Props> = ({ courses }) => {
    return (
        <div className='courses'>
            {courses.map((course) => (
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
