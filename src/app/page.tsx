import { LandingSection } from '@/components/landing-section';
import { ProjectsSection } from '@/components/projects-section';
import { FooterSection } from '@/components/footer-section';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 sm:p-12 md:p-16">
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center space-y-16 md:space-y-24">
        <LandingSection />
        <ProjectsSection />
        <FooterSection />
      </div>
    </main>
  );
}
