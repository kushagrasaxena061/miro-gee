import React from 'react'
import { NewButton } from './new-button'
import { List } from './List'

export const Sidebar = () => {
    return (
        <aside className='left-0 bg-blue-950 h-full w-[60px] gap-y-4 text-white'>
            <List />
            <NewButton />
        </aside>
    )
}
