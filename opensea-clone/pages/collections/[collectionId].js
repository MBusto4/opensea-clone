import React from 'react';
import { useRouter } from 'next/router'

const Collection = () => {
    const router = useRouter()
    return (
        <h2>{router.query.collectionId}</h2>
    )
};

export default Collection;
