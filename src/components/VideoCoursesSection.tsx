import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Users, BookOpen, Star } from "lucide-react";

const freeVideos = [
  {
    id: 1,
    title: "Introduction to Organic Chemistry",
    instructor: "Dr. Amit Gupta",
    subject: "Chemistry",
    duration: "45 min",
    views: "125K",
    rating: 4.8,
    thumbnail: "bg-gradient-to-br from-green-400 to-blue-500"
  },
  {
    id: 2,
    title: "Newton's Laws of Motion",
    instructor: "Prof. Rahul Sharma",
    subject: "Physics",
    duration: "38 min",
    views: "89K",
    rating: 4.9,
    thumbnail: "bg-gradient-to-br from-purple-400 to-pink-500"
  },
  {
    id: 3,
    title: "Algebra Fundamentals",
    instructor: "Mrs. Priya Singh",
    subject: "Mathematics",
    duration: "52 min",
    views: "156K",
    rating: 4.7,
    thumbnail: "bg-gradient-to-br from-yellow-400 to-orange-500"
  },
  {
    id: 4,
    title: "Cell Biology Basics",
    instructor: "Dr. Neha Verma",
    subject: "Biology",
    duration: "41 min",
    views: "78K",
    rating: 4.6,
    thumbnail: "bg-gradient-to-br from-teal-400 to-cyan-500"
  }
];

const VideoCoursesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Play className="w-8 h-8 text-primary" />
            <h2 className="text-3xl lg:text-4xl font-bold">
              Free Video <span className="text-gradient">Courses</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with our collection of free video courses taught by expert educators
          </p>
        </div>

        {/* Featured Video Player */}
        <div className="mb-16">
          <Card className="max-w-4xl mx-auto overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-indigo-900 to-purple-900 relative group cursor-pointer">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 group">
                  <Play className="w-8 h-8 mr-3 group-hover:scale-110 transition-transform" />
                  Watch Introduction Video
                </Button>
              </div>
              
              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Welcome to EduTech Platform</h3>
                    <p className="text-white/80">Learn how to get started with our courses</p>
                  </div>
                  <Badge className="bg-red-500 text-white">
                    🔴 LIVE
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Free Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {freeVideos.map((video, index) => (
            <Card 
              key={video.id} 
              className="course-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Video Thumbnail */}
              <div className={`aspect-video ${video.thumbnail} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white fill-current" />
                  </div>
                </div>
                
                {/* Duration Badge */}
                <Badge className="absolute top-3 left-3 bg-black/50 text-white border-0">
                  <Clock className="w-3 h-3 mr-1" />
                  {video.duration}
                </Badge>
                
                {/* Rating Badge */}
                <Badge className="absolute top-3 right-3 bg-yellow-500 text-white border-0">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  {video.rating}
                </Badge>
              </div>

              <CardContent className="p-4">
                {/* Subject Badge */}
                <Badge variant="secondary" className="mb-3">
                  {video.subject}
                </Badge>
                
                {/* Video Info */}
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {video.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-3">
                  by {video.instructor}
                </p>
                
                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {video.views} views
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    Free
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="px-8">
            View All Free Videos
            <Play className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoCoursesSection;