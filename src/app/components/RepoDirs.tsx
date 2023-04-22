// @ts-nocheck
import React from 'react';
import Link from 'next/link';

const fetchRepoContents = async (name: string) => {
    const response = await fetch(`https://api.github.com/repos/jameyhart/${name}/contents`, {
        next: {
            revalidate: 60 * 60 // Once an hour
        }
    });
    const contents = await response.json();

    return contents;
};

const RepoDirs = async ({ name }) => {
    const contents = await fetchRepoContents(name);
    const dirs = contents.filter((content) => content.type === 'dir');

    return (
        <>
            <h3>Directories</h3>
            <ul>
                {dirs.map((dir) => (
                    <li key={dir.path}>
                        <Link href={
                            `https://github.com/jameyhart/${name}/tree/master/${dir.path}`
                        }>
                            {dir.path}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default RepoDirs;
