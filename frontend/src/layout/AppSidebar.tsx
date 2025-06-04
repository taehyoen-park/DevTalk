import {  Home, MessageCircleMore, Search, Settings,MessageSquare, } from "lucide-react"
 
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarFooter,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
 
// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Posts",
    url: "/app/posts",
    icon: MessageSquare,
  },
  {
    title: "Chat",
    url: "#",
    icon: MessageCircleMore,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },

]

export function AppSidebar() {
  return (
    <Sidebar className="w-64 h-screen bg-white p-4 shadow-lg">
      <SidebarHeader className="flex flex-row items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">DevTalk</h2>
          <SidebarTrigger className="bg-white-200 p-2 rounded hover:bg-gray-300"/>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className="">
          <SidebarGroupLabel className="font-bold">DevTalk</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="bg-black"/>
    </Sidebar>
  )
}