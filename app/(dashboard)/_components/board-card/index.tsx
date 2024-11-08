"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Overlay } from './overlay'
import { formatDistanceToNow } from 'date-fns'
import { useAuth } from '@clerk/nextjs'
import { Footer } from './Footer'
import { Skeleton } from '@/components/ui/skeleton'
import Actions from '@/components/actions'
import { MoreHorizontal } from 'lucide-react'
import { useApiMutation } from '@/hooks/use-api-mutation'
import { api } from '@/convex/_generated/api'
import { toast } from 'sonner'

interface BoardCardProps {
    id: string
    title: string
    imageUrl: string
    authorId: string
    authorName: string
    createdAt: number
    orgId: string
    isFavorite: boolean
}

export const BoardCard = ({ id, title, imageUrl, authorId, authorName, createdAt, orgId, isFavorite }: BoardCardProps) => {
    const { userId } = useAuth()
    const authorLabel = userId === authorId ? "You" : authorName
    const createdAtLabel = formatDistanceToNow(createdAt, { addSuffix: true })

    const { mutate: onFavorite, pending: pendingFavorite } = useApiMutation(api.board.favorite)
    const { mutate: onUnfavorite, pending: pendingUnfavorite } = useApiMutation(api.board.unfavorite)

    const toggleFavorite = () => {
        if (isFavorite) {
            onUnfavorite({ id }).catch(() => toast.error("Failed to UNFAV"))
        } else {
            onFavorite({ id, orgId }).catch(() => toast.error("Failed to FAV"))
        }
    }

    return (
        <Link href={`/board/${id}`}>
            <div className='group aspect-[100/127] overflow-hidden'>
                <div className='relative flex-1 bg-amber-50 '>
                    <Image src={imageUrl} alt={title} fill className='object-fit' />
                    <Overlay />
                    <Actions id={id} title={title} side="right" >
                        <button >
                            <MoreHorizontal className='text-white opacity-75 hover:opacity-100 transition-opacity' />
                        </button>
                    </Actions>
                </div>
                <Footer isFavorite={isFavorite} title={title} authorLabel={authorLabel} createdAtLabel={createdAtLabel} onClick={toggleFavorite} disabled={pendingFavorite || pendingUnfavorite} />
            </div>
        </Link>
    )
}

BoardCard.Skeleton = function BoardCardSkeleton() {
    return (
        <div className='aspect-[100/127]  overflow-hidden'>
            <Skeleton className=' ' />
        </div>
    )
}