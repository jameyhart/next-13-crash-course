import React from 'react';

import Repo from '@/app/components/Repo';

const RepoPage = ({
        // @ts-expect-error
        params: { name }
    }) => {
    return (
        <div className='card'>
            {/* @ts-expect-error */}
            <Repo name={name} />
        </div>
    );
};

export default RepoPage;
