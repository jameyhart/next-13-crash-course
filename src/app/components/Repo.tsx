// @ts-nocheck
import React from 'react';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

const fetchRepo = async (name: string) => {
    const response = await fetch(`https://api.github.com/repos/jameyhart/${name}`, {
        next: {
            revalidate: 60 * 60 // Once an hour
        }
    });
    const repo = await response.json();

    return repo;
};

const Repo = async ({ name }) => {
    const repo = await fetchRepo(name);

    return (
        <>
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            <div className='card-stats'>
                {/* Starred */}
                <div className='card-stat'>
                    <FaStar />
                    <span>{repo.stargazers_count}</span>
                </div>

                {/* Forked */}
                <div className='card-stat'>
                    <FaCodeBranch />
                    <span>{repo.forks_count}</span>
                </div>

                {/* Watching */}
                <div className='card-stat'>
                    <FaEye />
                    <span>{repo.watchers_count}</span>
                </div>
            </div>
        </>
    );
};

export default Repo;
