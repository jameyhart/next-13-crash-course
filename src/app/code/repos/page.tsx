// @ts-nocheck
import React from 'react';
import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

const fetchRepos = async () => {
    const res = await fetch('https://api.github.com/users/jameyhart/repos', {
        next: {
            revalidate: 60 * 60 // Once an hour
        }
    });
    const repos = await res.json();

    return repos;
};

const ReposPage = async () => {
    const repos = await fetchRepos();

    return (
        <div className='repos-container'>
            <h2>Repos</h2>
                <ul className='repo-list'>
                    {repos.map((repo) => (
                        <li key={repo.id}>
                            <Link href={`/code/repos/${repo.name}`}>
                                <h3>
                                    {repo.name}
                                </h3>
                                <p>
                                    {repo.description}
                                </p>
                                <div className='repo-details'>
                                    <span>
                                        <FaStar /> {repo.stargazers_count}
                                    </span>
                                    <span>
                                        <FaCodeBranch /> {repo.forks_count}
                                    </span>
                                    <span>
                                        <FaEye /> {repo.watchers_count}
                                    </span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
        </div>
    )
};

export default ReposPage;
