// @ts-nocheck
import React, { Suspense } from 'react';
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

            {/* Repository */}
            <Suspense fallback={
                <div>
                    Loading repository...
                </div>
            }>
                <Repo name={name} />
            </Suspense>

            {/* Directories */}
            <Suspense fallback={
                <div>
                    Loading directories...
                </div>
            }>
                <RepoDirs name={name} />
            </Suspense>
        </div>
    );
};

export default RepoPage;
