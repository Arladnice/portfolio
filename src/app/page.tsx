import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <Hero />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
