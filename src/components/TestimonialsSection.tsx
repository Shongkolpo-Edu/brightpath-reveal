import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "NEET Qualifier 2024",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "EduTech's NEET course was a game-changer for me. The faculty is amazing and the study material is comprehensive. I scored 680+ and got into my dream medical college!",
    exam: "NEET"
  },
  {
    id: 2,
    name: "Arjun Kumar",
    role: "IIT Delhi Graduate",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The JEE Advanced course here is phenomenal. The problem-solving approach and mock tests helped me crack IIT with AIR 247. Highly recommended!",
    exam: "JEE"
  },
  {
    id: 3,
    name: "Sneha Patel",
    role: "Class 12 Topper",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The board exam preparation course helped me score 96% in Class 12. The teachers are very supportive and the doubt clearing sessions are excellent.",
    exam: "Board"
  },
  {
    id: 4,
    name: "Rahul Verma",
    role: "Engineering Student",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The foundation course in Class 11 built my concepts so strong that I never struggled in Class 12. The teaching methodology is outstanding.",
    exam: "Foundation"
  },
  {
    id: 5,
    name: "Anita Singh",
    role: "Medical Student",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "I was weak in Biology, but the NEET biology course transformed my understanding. The animated videos and practice questions are superb.",
    exam: "NEET"
  },
  {
    id: 6,
    name: "Vikash Gupta",
    role: "JEE Main Qualifier",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The Mathematics course is incredible. Complex problems are explained so simply. I improved my JEE Main score by 40 marks in just 3 months!",
    exam: "JEE"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            What Our <span className="text-gradient">Students Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from students who achieved their dreams with our courses
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="card-elevated group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-primary" />
                </div>

                {/* Student Info */}
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </p>

                {/* Exam Badge */}
                <div className="flex justify-between items-center">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    testimonial.exam === 'NEET' ? 'bg-green-100 text-green-700' :
                    testimonial.exam === 'JEE' ? 'bg-blue-100 text-blue-700' :
                    testimonial.exam === 'Board' ? 'bg-purple-100 text-purple-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {testimonial.exam} Success
                  </div>
                  <div className="text-2xl">🎓</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stats */}
        <div className="mt-20 bg-primary/5 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-2">Our Success Stories</h3>
            <p className="text-muted-foreground">Numbers that speak for our quality</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">15,000+</div>
              <div className="text-sm text-muted-foreground">NEET Qualifiers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">8,500+</div>
              <div className="text-sm text-muted-foreground">IIT-JEE Cleared</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Board Exam Success</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">4.9★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;