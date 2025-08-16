import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, Bell } from "lucide-react";

const updates = [
  {
    id: 1,
    title: "New NEET 2024 Crash Course Available",
    description: "Complete your NEET preparation in 60 days with our intensive crash course program",
    date: "2024-01-15",
    category: "Course Launch",
    urgent: true
  },
  {
    id: 2,
    title: "IIT-JEE Mock Test Series",
    description: "Practice with 50+ mock tests designed by IIT alumni and top educators",
    date: "2024-01-12",
    category: "Test Series",
    urgent: false
  },
  {
    id: 3,
    title: "Free Scholarship Test",
    description: "Win up to 100% scholarship on all courses. Test starts February 1st",
    date: "2024-01-10",
    category: "Scholarship",
    urgent: true
  }
];

const FeaturedUpdates = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Bell className="w-6 h-6 text-primary" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Latest Updates
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest announcements, course launches, and opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {updates.map((update, index) => (
            <Card 
              key={update.id} 
              className="card-elevated group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge 
                    variant={update.urgent ? "destructive" : "secondary"}
                    className="mb-2"
                  >
                    {update.category}
                  </Badge>
                  {update.urgent && (
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {update.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {update.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {new Date(update.date).toLocaleDateString()}
                  </div>
                  
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedUpdates;