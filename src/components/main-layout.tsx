import { ReactNode } from "react"
import { Navbar } from "./navbar"

const MainLayout = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <div className={className}>
            <div>
                <Navbar />
            </div>
            <div className="p-16">
                {children}
            </div>
        </div>
    )
}

export default MainLayout