import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, UsersRound, Building2, CalendarDays, ArrowRight } from "lucide-react"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 bg-white">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-6 pt-0 bg-white">
          <Tabs defaultValue="quick" className="w-full">
            <TabsList className="grid w-full max-w-2xl grid-cols-4 bg-muted/40">
              <TabsTrigger value="quick">Quick Actions</TabsTrigger>
              <TabsTrigger value="jobs">Featured Jobs</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>

            <TabsContent value="quick" className="space-y-4">
              <Card className="border-muted bg-gradient-to-r from-white to-muted/30">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Welcome back, Guest User!</CardTitle>
                    <CardDescription>Discover new opportunities and connect with the creative community.</CardDescription>
                  </div>
                  <Button variant="default" className="gap-2">
                    Explore now <ArrowRight className="size-4" />
                  </Button>
                </CardHeader>
              </Card>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {/* Search Jobs */}
                <div className="group relative rounded-xl p-[1px] bg-gradient-to-br from-blue-400/50 via-blue-300/40 to-cyan-300/40">
                  <Card className="bg-white transition-all duration-200 group-hover:shadow-xl group-hover:-translate-y-0.5">
                    <CardHeader className="space-y-2">
                      <div className="inline-flex size-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                        <Search className="size-5" />
                      </div>
                      <CardTitle>Search Jobs</CardTitle>
                      <CardDescription>Find the latest roles</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-3 flex gap-2 text-xs text-muted-foreground">
                        <span className="rounded-full bg-blue-50 px-2 py-1">Remote</span>
                        <span className="rounded-full bg-blue-50 px-2 py-1">Full-time</span>
                      </div>
                      <Button variant="secondary" className="w-full">Browse Jobs</Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Find Artist */}
                <div className="group relative rounded-xl p-[1px] bg-gradient-to-br from-emerald-400/50 via-emerald-300/40 to-teal-300/40">
                  <Card className="bg-white transition-all duration-200 group-hover:shadow-xl group-hover:-translate-y-0.5">
                    <CardHeader className="space-y-2">
                      <div className="inline-flex size-11 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                        <UsersRound className="size-5" />
                      </div>
                      <CardTitle>Find Artist</CardTitle>
                      <CardDescription>Discover talent</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-3 flex gap-2 text-xs text-muted-foreground">
                        <span className="rounded-full bg-emerald-50 px-2 py-1">Illustration</span>
                        <span className="rounded-full bg-emerald-50 px-2 py-1">3D</span>
                      </div>
                      <Button variant="secondary" className="w-full">Discover Artists</Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Find Business */}
                <div className="group relative rounded-xl p-[1px] bg-gradient-to-br from-violet-400/50 via-violet-300/40 to-fuchsia-300/40">
                  <Card className="bg-white transition-all duration-200 group-hover:shadow-xl group-hover:-translate-y-0.5">
                    <CardHeader className="space-y-2">
                      <div className="inline-flex size-11 items-center justify-center rounded-lg bg-violet-50 text-violet-700 ring-1 ring-violet-100">
                        <Building2 className="size-5" />
                      </div>
                      <CardTitle>Find Business</CardTitle>
                      <CardDescription>Connect with teams</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-3 flex gap-2 text-xs text-muted-foreground">
                        <span className="rounded-full bg-violet-50 px-2 py-1">Agencies</span>
                        <span className="rounded-full bg-violet-50 px-2 py-1">Studios</span>
                      </div>
                      <Button variant="secondary" className="w-full">Explore Businesses</Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Events */}
                <div className="group relative rounded-xl p-[1px] bg-gradient-to-br from-orange-400/50 via-orange-300/40 to-amber-300/40">
                  <Card className="bg-white transition-all duration-200 group-hover:shadow-xl group-hover:-translate-y-0.5">
                    <CardHeader className="space-y-2">
                      <div className="inline-flex size-11 items-center justify-center rounded-lg bg-orange-50 text-orange-700 ring-1 ring-orange-100">
                        <CalendarDays className="size-5" />
                      </div>
                      <CardTitle>Events</CardTitle>
                      <CardDescription>Workshops and more</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-3 flex gap-2 text-xs text-muted-foreground">
                        <span className="rounded-full bg-orange-50 px-2 py-1">Online</span>
                        <span className="rounded-full bg-orange-50 px-2 py-1">Nearby</span>
                      </div>
                      <Button variant="secondary" className="w-full">View Events</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="jobs" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                {[1,2,3].map((i) => (
                  <Card key={i} className="bg-white transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <CardTitle>Featured Job {i}</CardTitle>
                      <CardDescription>High-visibility opportunity</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-24 rounded-md bg-muted/50" />
                      <div className="mt-4 flex items-center justify-between">
                        <Button size="sm" variant="secondary">Details</Button>
                        <Button size="sm">Apply</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events">
              <Card className="bg-white transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Stay updated with the latest happenings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-32 rounded-md bg-muted/50" />
                  <div className="mt-4 text-right">
                    <Button variant="secondary">See all events</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="support" className="space-y-4">
              <Card className="bg-white transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Help & Support</CardTitle>
                  <CardDescription>Find answers, policies, and contact options.</CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
