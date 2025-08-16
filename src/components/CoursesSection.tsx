import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Clock, Users, Play, ChevronLeft, ChevronRight } from "lucide-react";

const courseCategories = ["All Courses", "NEET", "IIT-JEE", "Foundation", "Board Exam"];

const courses = [
  {
    id: 1,
    title: "Complete NEET 2024 Course",
    instructor: "Dr. Rajesh Kumar",
    category: "NEET",
    price: "₹15,999",
    originalPrice: "₹25,999",
    rating: 4.9,
    students: "5,240",
    duration: "240 hours",
    image: "/api/placeholder/300/200",
    level: "Advanced",
    subjects: ["Physics", "Chemistry", "Biology"]
  },
  {
    id: 2,
    title: "JEE Main + Advanced Complete",
    instructor: "Prof. Ankit Sharma",
    category: "IIT-JEE",
    price: "₹18,999",
    originalPrice: "₹29,999",
    rating: 4.8,
    students: "3,890",
    duration: "300 hours",
    image: "/api/placeholder/300/200",
    level: "Advanced",
    subjects: ["Physics", "Chemistry", "Maths"]
  },
  {
    id: 3,
    title: "Class 11th Physics Foundation",
    instructor: "Dr. Priya Singh",
    category: "Foundation",
    price: "₹7,999",
    originalPrice: "₹12,999",
    rating: 4.7,
    students: "2,150",
    duration: "120 hours",
    image: "/api/placeholder/300/200",
    level: "Beginner",
    subjects: ["Physics"]
  },
  {
    id: 4,
    title: "CBSE Class 12 Board Prep",
    instructor: "Mrs. Sunita Verma",
    category: "Board Exam",
    price: "₹9,999",
    originalPrice: "₹15,999",
    rating: 4.6,
    students: "4,200",
    duration: "180 hours",
    image: "/api/placeholder/300/200",
    level: "Intermediate",
    subjects: ["All Subjects"]
  }
];

const CoursesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  
  const filteredCourses = selectedCategory === "All Courses" 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Courses</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master any subject with our expertly crafted courses designed by top educators
          </p>
        </div>

        {/* Category Filter */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
          <TabsList className="grid w-full grid-cols-5 lg:w-fit lg:mx-auto">
            {courseCategories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="px-6 py-3"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {filteredCourses.map((course, index) => (
            <Card 
              key={course.id} 
              className="course-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Course Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                <div className="aspect-video flex items-center justify-center">
                  <Play className="w-16 h-16 text-primary/70" />
                </div>
                <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                  {course.level}
                </Badge>
                <div className="absolute top-3 right-3 bg-black/20 backdrop-blur-sm rounded-full p-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-xs text-white ml-1">{course.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Course Info */}
                <div className="mb-4">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    by {course.instructor}
                  </p>
                  
                  {/* Subjects */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {course.subjects.map((subject, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Course Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-lg text-primary">{course.price}</span>
                    <span className="text-sm text-muted-foreground line-through ml-2">
                      {course.originalPrice}
                    </span>
                  </div>
                  <Button size="sm" className="group">
                    Enroll
                    <Play className="w-3 h-3 ml-1 group-hover:scale-110 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="icon">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;