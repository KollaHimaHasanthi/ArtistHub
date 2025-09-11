import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  Image, 
  Video, 
  Plus,
  Filter,
  Heart,
  MessageCircle,
  Share2,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Calendar,
  User,
  MapPin,
  Star,
  Bookmark,
  Download,
  Upload
} from "lucide-react"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between bg-white border-b border-slate-200 shadow-sm">
          <div className="flex items-center gap-4 px-6">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <div>
              <h1 className="text-xl font-semibold text-slate-900">Posts</h1>
              <p className="text-sm text-slate-500">Share your creative work and discover others</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input 
                type="text" 
                placeholder="Search posts..." 
                className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              />
            </div>
            <Button variant="outline" size="sm" className="border-slate-200">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Create Post
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-8 p-8 bg-slate-50">
          {/* Create Post Section */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Plus className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">Create New Post</h2>
                  <p className="text-sm text-slate-600">Share your creative work with the community</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">What's on your mind?</label>
                  <textarea 
                    placeholder="Share your thoughts, ideas, or describe your creative work..."
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent resize-none"
                    rows={4}
                  />
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Category</label>
                    <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent">
                      <option>Select Category</option>
                      <option>Design</option>
                      <option>Photography</option>
                      <option>Illustration</option>
                      <option>Digital Art</option>
                      <option>UI/UX</option>
                      <option>Branding</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Tags</label>
                    <Input placeholder="e.g. #design #creative #portfolio" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Media Upload</label>
                  <div className="border-2 border-dashed border-slate-200 rounded-lg p-8 text-center hover:border-slate-300 transition-colors">
                    <div className="space-y-4">
                      <div className="flex justify-center space-x-4">
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <Image className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="p-3 bg-purple-50 rounded-lg">
                          <Video className="h-6 w-6 text-purple-600" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-slate-600 mb-2">Upload images or videos</p>
                        <p className="text-xs text-slate-500">Supports JPG, PNG, MP4 up to 5MB each</p>
                      </div>
                      <Button variant="outline" className="border-slate-200">
                        <Upload className="h-4 w-4 mr-2" />
                        Choose Files
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-6">
                <div className="flex gap-2">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    Publish Post
                  </Button>
                  <Button variant="outline" className="border-slate-200">
                    Save Draft
                  </Button>
                </div>
                <div className="text-sm text-slate-600">
                  <span className="font-medium">12</span> posts this month
                </div>
              </div>
            </div>
          </div>

          {/* Posts Feed */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">Community Feed</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-slate-200">
                  <Calendar className="h-4 w-4 mr-2" />
                  Recent
                </Button>
                <Button variant="outline" size="sm" className="border-slate-200">
                  <Star className="h-4 w-4 mr-2" />
                  Popular
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              {/* Post 1 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Sarah Chen</h3>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <MapPin className="h-4 w-4" />
                          <span>Mumbai, India</span>
                          <span>•</span>
                          <span>2 hours ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-blue-100 text-blue-700">Design</Badge>
                      <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-600">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 mb-4">
                    Just finished working on this brand identity project for a local startup. The logo represents growth and innovation, with a modern color palette that reflects their tech-forward approach. What do you think? #branding #logo #design
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                        <Image className="h-8 w-8 text-slate-400" />
                      </div>
                    </div>
                    <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                        <Image className="h-8 w-8 text-slate-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="text-slate-600 hover:text-red-500">
                        <Heart className="h-4 w-4 mr-1" />
                        <span>24</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-slate-600 hover:text-blue-500">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span>8</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-slate-600 hover:text-green-500">
                        <Share2 className="h-4 w-4 mr-1" />
                        <span>Share</span>
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post 2 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Alex Rodriguez</h3>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <MapPin className="h-4 w-4" />
                          <span>Delhi, India</span>
                          <span>•</span>
                          <span>5 hours ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-purple-100 text-purple-700">Photography</Badge>
                      <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-600">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 mb-4">
                    Captured this stunning sunset during my recent trip to Goa. The colors were absolutely breathtaking! Sometimes the best shots happen when you least expect them. #photography #sunset #goa #travel
                  </p>
                  
                  <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden mb-4">
                    <div className="w-full h-full bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center">
                      <Video className="h-12 w-12 text-slate-400" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="text-slate-600 hover:text-red-500">
                        <Heart className="h-4 w-4 mr-1" />
                        <span>47</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-slate-600 hover:text-blue-500">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span>12</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-slate-600 hover:text-green-500">
                        <Share2 className="h-4 w-4 mr-1" />
                        <span>Share</span>
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post 3 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Priya Sharma</h3>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <MapPin className="h-4 w-4" />
                          <span>Bangalore, India</span>
                          <span>•</span>
                          <span>1 day ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-emerald-100 text-emerald-700">UI/UX</Badge>
                      <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-600">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 mb-4">
                    Working on a mobile app redesign for a fintech startup. The challenge was to make complex financial data accessible and user-friendly. Here's a sneak peek at the wireframes! #uiux #mobile #fintech #wireframes
                  </p>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                        <Image className="h-6 w-6 text-slate-400" />
                      </div>
                    </div>
                    <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                        <Image className="h-6 w-6 text-slate-400" />
                      </div>
                    </div>
                    <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                        <Image className="h-6 w-6 text-slate-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="text-slate-600 hover:text-red-500">
                        <Heart className="h-4 w-4 mr-1" />
                        <span>31</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-slate-600 hover:text-blue-500">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span>6</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-slate-600 hover:text-green-500">
                        <Share2 className="h-4 w-4 mr-1" />
                        <span>Share</span>
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Load More Button */}
            <div className="text-center pt-6">
              <Button variant="outline" className="border-slate-200 px-8">
                Load More Posts
              </Button>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
