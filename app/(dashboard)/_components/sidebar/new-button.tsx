"use client"

import React from 'react'
import { CreateOrganization } from '@clerk/nextjs'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Plus } from 'lucide-react'
import { Hint } from '@/components/hint'

export const NewButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className='aspect-square'>
                    <Hint label="Create organization" side='right' align='start' sideOffset={18}>
                        <button className='bg-white/25 h-full '>
                            <Plus className='text-white' />
                        </button>
                    </Hint>
                </div>
            </DialogTrigger>
            <DialogContent className=''>
                <CreateOrganization />
            </DialogContent>
        </Dialog>
    )
}
