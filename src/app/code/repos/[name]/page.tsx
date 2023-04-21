// @ts-nocheck
import React from 'react';
import Link from 'next/link';

import RepoDirs from '@/app/components/RepoDirs';
import Repo from '@/app/components/Repo';

const RepoPage = ({
        params: { name }
    }) => {
    return (
        <div className='card'>
            <Link href='/code/repos' className='btn btn-back flex gap-2'>
                &lt;&nbsp;Back
            </Link>

            <Repo name={name} />
            <RepoDirs name={name} />
        </div>
    );
};

export default RepoPage;
