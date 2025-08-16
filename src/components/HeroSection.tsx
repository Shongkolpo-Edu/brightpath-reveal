import { Button } from "@/components/ui/button";
import { Play, Users, BookOpen, Trophy } from "lucide-react";
import heroMascot from "@/assets/hero-mascot.png";

const HeroSection = () => {
  return (
    <section className="relative bg-hero min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-20 h-20 bg-white rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-white rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Master Your
                <span className="block text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Future Today
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Join thousands of students achieving their dreams with our comprehensive online learning platform
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Start Learning Now
              </Button>
              <Button className="btn-secondary group">
                <BookOpen className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Explore Courses
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="text-sm">50,000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                <span className="text-sm">98% Success Rate</span>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Mascot */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={heroMascot} 
                alt="Educational Mascot" 
                className="w-96 h-96 lg:w-[500px] lg:h-[500px] object-contain animate-float drop-shadow-2xl"
              />
              {/* Floating elements around mascot */}
              <div className="absolute -top-8 -left-8 bg-white/20 backdrop-blur-sm rounded-full p-4 animate-float" style={{animationDelay: '0.5s'}}>
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="absolute top-16 -right-8 bg-white/20 backdrop-blur-sm rounded-full p-4 animate-float" style={{animationDelay: '1.5s'}}>
                <Trophy className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Stats Bar */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
          <div className="stats-bar">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Expert Teachers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Course Hours</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;