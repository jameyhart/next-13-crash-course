import React from 'react';
import Link from 'next/link';

import Repo from '@/app/components/Repo';

const RepoPage = ({
        // @ts-expect-error
        params: { name }
    }) => {
    return (
        <div className='card'>
            <Link href='/code/repos' className='btn btn-back flex gap-2'>
                &lt;&nbsp;Back
            </Link>

            {/* @ts-expect-error */}
            <Repo name={name} />
        </div>
    );
};

export default RepoPage;
