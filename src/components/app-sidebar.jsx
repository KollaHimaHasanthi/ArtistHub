"use client"

import * as React from "react"
import { useRouter } from "next/router"
import {
  Command,
  UserRound,
  LayoutDashboard,
  Briefcase,
  CalendarDays,
  Images,
  HeartHandshake,
  UsersRound,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Eva Murphy",
    email: "Web Developer",
    avatar: "/avatars/shadcn.jpg",
  },
  sections: [
    {
      label: "Main Menu",
      items: [
        { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard, isActive: true },
        { title: "Posts", url: "/posts", icon: Images },
        { title: "Jobs", url: "/jobs", icon: Briefcase },
        { title: "Events", url: "/events", icon: CalendarDays },
        { title: "Collabs", url: "/collaborations", icon: HeartHandshake },
        { title: "Groups", url: "/groups", icon: UsersRound },
        { title: "Artists", url: "/networking", icon: UsersRound },
      ],
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  const router = useRouter()
  const pathname = router?.pathname || "/"
  return (
    <Sidebar variant="inset" className="bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 text-white shadow-2xl" {...props}>
      <SidebarHeader className="bg-transparent border-b border-white/10 pb-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="hover:bg-white/10 transition-all duration-300">
              <a href="#" className="group">
                <div className="bg-white/20 text-white flex aspect-square size-9 items-center justify-center rounded-lg backdrop-blur-sm shadow-md group-hover:bg-white/25 group-hover:scale-105 transition-all duration-300">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left leading-tight">
                  <span className="truncate font-bold text-base group-hover:text-white/90 transition-colors duration-300">CodingLab</span>
                  <span className="text-xs text-white/70 font-medium">Developer Hub</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
        <SidebarContent className="gap-4 bg-transparent hide-scrollbar  mt-2 overflow-y-auto px-2">
        {data.sections?.map((section) => (
          <div key={section.label} className="space-y-1">
            <div className="px-3 pb-1 text-xs font-semibold text-white/80 uppercase tracking-wider">{section.label}</div>
            <SidebarMenu className="space-y-0.5">
              {section.items.map((item, index) => {
                const isActive = pathname === item.url
                return (
                  <SidebarMenuItem key={item.title} className="relative group ">
                    {isActive ? (
                      <span className="absolute left-0 top-1 bottom-1 w-1 rounded-full bg-white shadow-md" />
                    ) : null}
                    <SidebarMenuButton 
                      asChild 
                      className={`group relative rounded-lg transition-all duration-300 ${
                        isActive 
                          ? 'bg-white text-slate-900 shadow-md' 
                          : 'hover:bg-white/10 hover:shadow-sm'
                      }`}
                    >
                      <a href={item.url} className="flex items-center gap-3 px-3 py-2.5">
                        <item.icon 
                          className={`size-4 transition-all duration-300 ${
                            isActive 
                              ? 'text-slate-900' 
                              : 'text-white group-hover:scale-105 group-hover:text-white/90'
                          }`} 
                        />
                        <span className={`font-medium text-sm transition-all duration-300 ${
                          isActive 
                            ? 'text-slate-900' 
                            : 'text-white group-hover:text-white/90'
                        }`}>
                          {item.title}
                        </span>
                        {isActive && (
                          <div className="ml-auto w-1.5 h-1.5 bg-slate-900 rounded-full animate-pulse" />
                        )}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </div>
        ))}
      </SidebarContent>
      <SidebarFooter className="bg-transparent border-t border-white/10 pt-3">
        <div className="mx-2 mb-2 flex items-center gap-3 rounded-xl bg-white/15 p-2 text-white backdrop-blur-sm shadow-md hover:bg-white/20 transition-all duration-300 group">
          <div className="relative">
            <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-white/30 to-white/15 text-white font-bold text-base shadow-md group-hover:scale-105 transition-transform duration-300">
              E
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full bg-green-400 border-2 border-white shadow-sm"></div>
          </div>
          <div className="flex-1 leading-tight">
            <div className="text-sm font-bold group-hover:text-white/90 transition-colors duration-300 leading-tight">
              Eva Murphy
            </div>
            <div className="text-xs text-white/80 font-medium mt-1">Web Developer</div>
            <div className="text-xs text-white/60 mt-1">Online</div>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse"></div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}