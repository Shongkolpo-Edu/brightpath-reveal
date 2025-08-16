import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Palette, TrendingUp, Globe, Camera, Music } from "lucide-react";

const skillCategories = [
  {
    id: 1,
    title: "Web Development",
    description: "Master HTML, CSS, JavaScript and modern frameworks",
    icon: <Code className="w-8 h-8" />,
    courses: 45,
    students: "12.5K",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50"
  },
  {
    id: 2,
    title: "Graphic Design",
    description: "Learn Photoshop, Illustrator and design principles",
    icon: <Palette className="w-8 h-8" />,
    courses: 32,
    students: "8.2K",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50"
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "SEO, Social Media Marketing and Analytics",
    icon: <TrendingUp className="w-8 h-8" />,
    courses: 28,
    students: "15.7K",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50"
  },
  {
    id: 4,
    title: "Language Learning",
    description: "English, Spanish, French and more languages",
    icon: <Globe className="w-8 h-8" />,
    courses: 67,
    students: "22.1K",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50"
  },
  {
    id: 5,
    title: "Photography",
    description: "Camera basics, composition and photo editing",
    icon: <Camera className="w-8 h-8" />,
    courses: 23,
    students: "6.8K",
    color: "from-yellow-500 to-orange-600",
    bgColor: "bg-yellow-50"
  },
  {
    id: 6,
    title: "Music Production",
    description: "Beat making, mixing and audio engineering",
    icon: <Music className="w-8 h-8" />,
    courses: 19,
    students: "4.9K",
    color: "from-teal-500 to-cyan-600",
    bgColor: "bg-teal-50"
  }
];

const SkillCoursesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Develop Your <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expand your horizons with our diverse range of skill-based courses designed for the modern world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.id}
              className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-32 ${category.bgColor} relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                <div className="absolute top-4 right-4 opacity-20">
                  <div className="text-6xl transform rotate-12 group-hover:rotate-6 transition-transform">
                    {category.icon}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span>{category.courses} courses</span>
                    <span>{category.students} students</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Explore Courses
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Skill Courses</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">50K+</div>
              <div className="text-muted-foreground">Skill Students</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-muted-foreground">Completion Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">4.8★</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillCoursesSection;