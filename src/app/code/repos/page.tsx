import React from 'react';

const fetchRepos = async () => {
    const res = await fetch('https://api.github.com/users/jameyhart/repos');
    const repos = await res.json();
    return repos;
};

const ReposPage = async () => {
    const repos = await fetchRepos();

    return (
        <div>
            {repos[0].name}
        </div>
    )
};

export default ReposPage;
