
import { Loader } from 'lucide-react'
import React from 'react'
import { InfoSkeleton } from './Info'
import { ParticipantsSkeleton } from './participants'
import { ToolbarSkeleton } from './toolbar'

export const Loading = () => {
    return (
        <main>
            <Loader className='h-6 w-6 text-muted-foreground animate-spin' />
            <InfoSkeleton />
            <ParticipantsSkeleton />
            <ToolbarSkeleton />
        </main>
    )
}
