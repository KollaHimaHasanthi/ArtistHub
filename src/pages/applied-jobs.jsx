import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  DollarSign, 
  Eye, 
  CheckCircle, 
  Clock, 
  XCircle, 
  Mail, 
  MessageCircle,
  FileText,
  Building2
} from "lucide-react"
import { useState } from "react"

export default function AppliedJobsPage() {
  const [applications] = useState([
    {
      id: "APP001",
      jobTitle: "Senior Digital Artist",
      company: "Creative Studio Inc.",
      location: "New York, NY",
      salary: "$70,000 - $90,000",
      appliedDate: "2024-01-20",
      status: "processing",
      statusDetails: {
        resumeViewed: true,
        resumeShortlisted: false,
        resumeRejected: false,
        lastUpdated: "2024-01-22"
      }
    },
    {
      id: "APP002",
      jobTitle: "UI/UX Designer",
      company: "Tech Solutions LLC",
      location: "San Francisco, CA",
      salary: "$60,000 - $80,000",
      appliedDate: "2024-01-18",
      status: "processing",
      statusDetails: {
        resumeViewed: true,
        resumeShortlisted: true,
        resumeRejected: false,
        lastUpdated: "2024-01-21"
      }
    },
    {
      id: "APP003",
      jobTitle: "Graphic Designer",
      company: "Marketing Agency Co.",
      location: "Chicago, IL",
      salary: "$45,000 - $60,000",
      appliedDate: "2024-01-15",
      status: "processing",
      statusDetails: {
        resumeViewed: true,
        resumeShortlisted: false,
        resumeRejected: true,
        lastUpdated: "2024-01-19"
      }
    }
  ]);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'processing':
        return <Badge className="bg-blue-100 text-blue-700"><Clock className="h-3 w-3 mr-1" />Processing</Badge>;
      case 'shortlisted':
        return <Badge className="bg-green-100 text-green-700"><CheckCircle className="h-3 w-3 mr-1" />Shortlisted</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-700"><XCircle className="h-3 w-3 mr-1" />Rejected</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getStatusIcon = (statusDetails) => {
    if (statusDetails.resumeRejected) {
      return <XCircle className="h-4 w-4 text-red-500" />;
    } else if (statusDetails.resumeShortlisted) {
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    } else if (statusDetails.resumeViewed) {
      return <Eye className="h-4 w-4 text-blue-500" />;
    } else {
      return <Clock className="h-4 w-4 text-slate-400" />;
    }
  };

  const getStatusText = (statusDetails) => {
    if (statusDetails.resumeRejected) {
      return "Resume Rejected";
    } else if (statusDetails.resumeShortlisted) {
      return "Resume Shortlisted";
    } else if (statusDetails.resumeViewed) {
      return "Resume Viewed";
    } else {
      return "Application Submitted";
    }
  };

  const sendStatusUpdate = (application) => {
    console.log('Sending status update for:', application.id);
    alert(`Status update sent via email and message for ${application.jobTitle} at ${application.company}`);
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 bg-white border-b border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <h1 className="text-lg font-semibold">Applied Jobs</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-6 pt-0 bg-slate-50 min-h-screen">
          <Tabs defaultValue="all" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All Applications</TabsTrigger>
              <TabsTrigger value="processing">Processing</TabsTrigger>
              <TabsTrigger value="shortlisted">Shortlisted</TabsTrigger>
              <TabsTrigger value="rejected">Rejected</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {applications.map((application) => (
                <Card key={application.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-lg font-semibold">{application.jobTitle}</h3>
                          {getStatusBadge(application.status)}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Building2 className="h-4 w-4" />
                              <span>{application.company}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <MapPin className="h-4 w-4" />
                              <span>{application.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <DollarSign className="h-4 w-4" />
                              <span>{application.salary}</span>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Calendar className="h-4 w-4" />
                              <span>Applied: {new Date(application.appliedDate).toISOString().split('T')[0]}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Clock className="h-4 w-4" />
                              <span>Updated: {new Date(application.statusDetails.lastUpdated).toISOString().split('T')[0]}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 mb-4 p-3 bg-slate-50 rounded-lg">
                          {getStatusIcon(application.statusDetails)}
                          <div>
                            <p className="font-medium text-sm">{getStatusText(application.statusDetails)}</p>
                            <p className="text-xs text-slate-500">Last updated: {new Date(application.statusDetails.lastUpdated).toISOString().split('T')[0]}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <Button variant="outline" onClick={() => sendStatusUpdate(application)}>
                            <Mail className="h-4 w-4 mr-2" />
                            Request Update
                          </Button>
                          <Button variant="outline">
                            <FileText className="h-4 w-4 mr-2" />
                            View Job Details
                          </Button>
                          <Button variant="outline">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Contact HR
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="processing" className="space-y-4">
              {applications.filter(app => app.status === 'processing').map((application) => (
                <Card key={application.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-lg font-semibold">{application.jobTitle}</h3>
                          {getStatusBadge(application.status)}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Building2 className="h-4 w-4" />
                              <span>{application.company}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <MapPin className="h-4 w-4" />
                              <span>{application.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <DollarSign className="h-4 w-4" />
                              <span>{application.salary}</span>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Calendar className="h-4 w-4" />
                              <span>Applied: {new Date(application.appliedDate).toISOString().split('T')[0]}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Clock className="h-4 w-4" />
                              <span>Updated: {new Date(application.statusDetails.lastUpdated).toISOString().split('T')[0]}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 mb-4 p-3 bg-blue-50 rounded-lg">
                          {getStatusIcon(application.statusDetails)}
                          <div>
                            <p className="font-medium text-sm text-blue-800">{getStatusText(application.statusDetails)}</p>
                            <p className="text-xs text-blue-600">Your application is being reviewed</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <Button variant="outline" onClick={() => sendStatusUpdate(application)}>
                            <Mail className="h-4 w-4 mr-2" />
                            Request Update
                          </Button>
                          <Button variant="outline">
                            <FileText className="h-4 w-4 mr-2" />
                            View Job Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="shortlisted" className="space-y-4">
              {applications.filter(app => app.statusDetails.resumeShortlisted).map((application) => (
                <Card key={application.id} className="hover:shadow-lg transition-shadow border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-lg font-semibold">{application.jobTitle}</h3>
                          <Badge className="bg-green-100 text-green-700">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Shortlisted
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Building2 className="h-4 w-4" />
                              <span>{application.company}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <MapPin className="h-4 w-4" />
                              <span>{application.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <DollarSign className="h-4 w-4" />
                              <span>{application.salary}</span>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Calendar className="h-4 w-4" />
                              <span>Applied: {new Date(application.appliedDate).toISOString().split('T')[0]}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Clock className="h-4 w-4" />
                              <span>Updated: {new Date(application.statusDetails.lastUpdated).toISOString().split('T')[0]}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 mb-4 p-3 bg-green-50 rounded-lg">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <div>
                            <p className="font-medium text-sm text-green-800">Congratulations! You've been shortlisted</p>
                            <p className="text-xs text-green-600">The company is interested in your profile</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <Button onClick={() => sendStatusUpdate(application)}>
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Contact HR
                          </Button>
                          <Button variant="outline">
                            <FileText className="h-4 w-4 mr-2" />
                            View Job Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="rejected" className="space-y-4">
              {applications.filter(app => app.statusDetails.resumeRejected).map((application) => (
                <Card key={application.id} className="hover:shadow-lg transition-shadow border-red-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-lg font-semibold">{application.jobTitle}</h3>
                          <Badge className="bg-red-100 text-red-700">
                            <XCircle className="h-3 w-3 mr-1" />
                            Rejected
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Building2 className="h-4 w-4" />
                              <span>{application.company}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <MapPin className="h-4 w-4" />
                              <span>{application.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <DollarSign className="h-4 w-4" />
                              <span>{application.salary}</span>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Calendar className="h-4 w-4" />
                              <span>Applied: {new Date(application.appliedDate).toISOString().split('T')[0]}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Clock className="h-4 w-4" />
                              <span>Updated: {new Date(application.statusDetails.lastUpdated).toISOString().split('T')[0]}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 mb-4 p-3 bg-red-50 rounded-lg">
                          <XCircle className="h-4 w-4 text-red-500" />
                          <div>
                            <p className="font-medium text-sm text-red-800">Application not selected</p>
                            <p className="text-xs text-red-600">Keep applying to other opportunities</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <Button variant="outline">
                            <FileText className="h-4 w-4 mr-2" />
                            View Job Details
                          </Button>
                          <Button variant="outline">
                            <Briefcase className="h-4 w-4 mr-2" />
                            Find Similar Jobs
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
