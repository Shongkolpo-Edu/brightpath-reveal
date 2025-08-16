import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Download, Star, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Offline Learning",
    description: "Download videos and study anywhere, anytime"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Progress Tracking",
    description: "Monitor your learning journey with detailed analytics"
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Expert Support",
    description: "Get instant help from our expert mentors"
  }
];

const AndroidAppSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Learn On The Go with Our
                <span className="block text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Mobile App
                </span>
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Download our feature-rich mobile app and take your learning experience to the next level with offline content, progress tracking, and expert support.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl"
                >
                  <div className="text-yellow-300 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-white/80 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl flex items-center gap-3">
                <Download className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </Button>
              <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl flex items-center gap-3">
                <Download className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold">1M+</div>
                <div className="text-sm text-white/70">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold flex items-center gap-1">
                  4.8 <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>
                <div className="text-sm text-white/70">App Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-96 bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-[2.5rem] flex flex-col">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 py-4 text-white text-sm">
                    <div>9:41</div>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-white rounded-sm"></div>
                      <div className="w-1 h-2 bg-white rounded-sm"></div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="flex-1 px-6 pb-6">
                    <Card className="h-full bg-white/95 backdrop-blur-sm">
                      <CardContent className="p-6 h-full flex flex-col">
                        <div className="text-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                            <Smartphone className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="font-bold text-lg">EduTech App</h3>
                          <p className="text-sm text-muted-foreground">Learn Anywhere</p>
                        </div>

                        <div className="space-y-3 flex-1">
                          <div className="h-3 bg-gray-200 rounded-full">
                            <div className="h-3 bg-blue-500 rounded-full" style={{width: '75%'}}></div>
                          </div>
                          <div className="text-xs text-muted-foreground">Course Progress: 75%</div>
                          
                          <div className="space-y-2 mt-4">
                            <div className="h-12 bg-gray-100 rounded-lg flex items-center px-3">
                              <div className="w-8 h-8 bg-blue-100 rounded-lg mr-3"></div>
                              <div className="flex-1">
                                <div className="h-2 bg-gray-200 rounded mb-1"></div>
                                <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                              </div>
                            </div>
                            <div className="h-12 bg-gray-100 rounded-lg flex items-center px-3">
                              <div className="w-8 h-8 bg-green-100 rounded-lg mr-3"></div>
                              <div className="flex-1">
                                <div className="h-2 bg-gray-200 rounded mb-1"></div>
                                <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-float">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                <Download className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AndroidAppSection;