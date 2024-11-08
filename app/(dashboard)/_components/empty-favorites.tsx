import React from 'react'
import Image from "next/image"

export const EmptyFavorites = () => {
    return (
        <div className=''>
            {/* //change upper emoji */}
            <Image src="/logo.svg" alt="empty favorites logo" height={140} width={140} />
            <h2 className='text-2xl font-semibold mt-6'>No Favorites found</h2>
            <p className=''>Try searching for something else</p>
        </div>
    )
}
