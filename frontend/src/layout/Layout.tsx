import { SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar"
import { useState } from "react"
import { AppSidebar } from "./AppSidebar"
import { Header } from "@/layout/Header"
import { Footer } from "@/layout/Footer"


export function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (

    <SidebarProvider className="flex flex-col items-center justify-start min-h-screen" open={isSidebarOpen} 
                    onOpenChange={(open) => {setIsSidebarOpen(open)}}>
                      
        <Header>
          <SidebarTrigger className=""/>
        </Header>

        <div className="flex flex-row items-start justify-start w-full min-h-screen">
          {isSidebarOpen && <aside className={`w-64 min-h-screen`}/>}
          <div className={`flex-1 transition-all duration-400 min-h-screen bg-[white] mt-16`}>{children}</div>
        </div>

        <Footer />
      <AppSidebar/>
    </SidebarProvider>

  )
}