import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Clock, Star, ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "NEET",
    subtitle: "Medical Entrance",
    description: "Complete preparation for NEET with expert faculty and comprehensive study material",
    students: "15,000+",
    duration: "2 Years",
    rating: "4.9",
    subjects: ["Physics", "Chemistry", "Biology"],
    color: "from-green-500 to-emerald-600",
    icon: "🏥"
  },
  {
    id: 2,
    title: "IIT-JEE",
    subtitle: "Engineering Entrance",
    description: "Master JEE Main & Advanced with our proven methodology and expert guidance",
    students: "20,000+",
    duration: "2 Years",
    rating: "4.8",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    color: "from-blue-500 to-indigo-600",
    icon: "⚙️"
  },
  {
    id: 3,
    title: "School Preparation",
    subtitle: "Class 6-12",
    description: "Build strong foundations with CBSE, ICSE curriculum and board exam preparation",
    students: "25,000+",
    duration: "Flexible",
    rating: "4.7",
    subjects: ["All Subjects", "Multiple Boards"],
    color: "from-purple-500 to-violet-600",
    icon: "🎓"
  }
];

const ExamCategories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Choose Your Path to
            <span className="text-gradient"> Success</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive preparation programs designed for different competitive exams and academic goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.id}
              className="card-category group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              
              <CardContent className="p-8 relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <h3 className="text-2xl font-bold mb-1">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.subtitle}</p>
                  </div>
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    {category.rating}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{category.students}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{category.duration}</span>
                  </div>
                </div>

                {/* Subjects */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {category.subjects.map((subject, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full group">
                  Explore Courses
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamCategories;