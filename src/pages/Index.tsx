import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedUpdates from "@/components/FeaturedUpdates";
import ExamCategories from "@/components/ExamCategories";
import CoursesSection from "@/components/CoursesSection";
import AndroidAppSection from "@/components/AndroidAppSection";
import VideoCoursesSection from "@/components/VideoCoursesSection";
import SkillCoursesSection from "@/components/SkillCoursesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturedUpdates />
      <ExamCategories />
      <CoursesSection />
      <AndroidAppSection />
      <VideoCoursesSection />
      <SkillCoursesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
