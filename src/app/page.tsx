'use client';
import React, { useState, useEffect } from "react";

import CourseSearch from "./components/CourseSearch";
import Courses from "./components/Courses";
import LoadingPage from "./loading";

const HomePage = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch('/api/courses');
            const courses = await response.json();

            setCourses(courses);
            setLoading(false);
        };

        fetchCourses();
    }, []);

    if (loading) {
        return <LoadingPage />
    };

    return (
        <>
            <h1>Welcome to Traversy Media</h1>
            {/* @ts-ignore */}
            <CourseSearch getSearchResults={(results) => setCourses(results)} />
            <Courses courses={courses} />
        </>
    );
};

export default HomePage;
