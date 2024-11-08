import React from 'react'
import { Sidebar } from './_components/sidebar'
import { OrgSidebar } from './_components/org-sidebar'
import { Navbar } from './_components/navbar'

interface DashboardLayoutProps {
    children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <main >
            <Sidebar />
            <div>
                <div >
                    <OrgSidebar />
                    <div >
                        <Navbar />
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default DashboardLayout