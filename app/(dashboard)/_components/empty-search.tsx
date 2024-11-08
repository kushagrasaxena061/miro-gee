import React from 'react'
import Image from "next/image"

export const EmptySearch = () => {
    return (
        <div >
            {/* //change upper emoji */}
            <Image src="/logo.svg" alt="empty search logo" height={140} width={140} />
            <h2 >No results found</h2>
            <p >Try searching for something else</p>
        </div>
    )
}
