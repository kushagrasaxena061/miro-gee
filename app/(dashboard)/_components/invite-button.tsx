import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { OrganizationProfile } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import React from 'react'

export const InviteButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <Plus className='h-4 w-4 mr-2' />
                    Invite Member
                </Button>
            </DialogTrigger>
            <DialogContent >
                <OrganizationProfile />
            </DialogContent>
        </Dialog>
    )
}
