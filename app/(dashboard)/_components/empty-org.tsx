import React from 'react'
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { CreateOrganization } from '@clerk/nextjs'

export const EmptyOrg = () => {
  return (
    <div className=''>
      <Image src="/logo.svg" alt="elements empty" height={200} width={200} />
      {/* //change upper emoji */}
      <h2 className='text-2xl font-semibold mt-6'>Welcome onboard </h2>
      <p className='text-muted-foreground text-sm mt-2'>Create an organization to get started</p>
      <div className='mt-6'>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">
              Create organization
            </Button>
          </DialogTrigger>
          <DialogContent className='bg-transparent'>
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
