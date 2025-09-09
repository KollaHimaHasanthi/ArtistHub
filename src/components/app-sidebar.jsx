"use client"

import * as React from "react"
import {
  Command,
  UserRound,
  Pencil,
  CalendarDays,
  Search,
  BadgeDollarSign,
  UsersRound,
  Building2,
  Briefcase,
  Shield,
  Image as ImageIcon,
  HeartHandshake,
  Coins,
  Images,
  HelpCircle,
  FileText,
  MessageCircleQuestion,
  Share2,
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
    name: "Guest User",
    email: "guest@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "User Options",
      url: "#",
      icon: UserRound,
      isActive: true,
      items: [
        { title: "View Profile", url: "#", icon: UserRound },
        { title: "Edit Profile", url: "#", icon: Pencil },
        { title: "Bookings", url: "#", icon: CalendarDays },
        { title: "Search Jobs", url: "#", icon: Search },
        { title: "Subscriptions & Packages", url: "#", icon: BadgeDollarSign },
        { title: "Events", url: "#", icon: CalendarDays },
        { title: "Find Artist", url: "#", icon: UsersRound },
        { title: "Find Business", url: "#", icon: Building2 },
        { title: "Hire Artist Groups", url: "#", icon: Briefcase },
        { title: "Privacy Policy", url: "#", icon: Shield },
        { title: "Post Content", url: "#", icon: ImageIcon },
        { title: "Followers & Connections", url: "#", icon: HeartHandshake },
        { title: "Hub Coins", url: "#", icon: Coins },
        { title: "Post Images & Videos", url: "#", icon: Images },
      ],
    },
  ],
  navSecondary: [
    { title: "Help & Support", url: "#", icon: HelpCircle },
    { title: "Terms & Policies", url: "#", icon: FileText },
  ],
  projects: [
    { name: "FAQ", url: "#", icon: MessageCircleQuestion },
    { name: "Refer & Earn up to 10000", url: "#", icon: Share2 },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div
                  className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">ArtistHub</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
