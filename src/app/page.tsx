import "@/app/home.scss"
import { Hero } from "@/components/organisms/hero";
import { ProjectPreview } from "@/components/organisms/project-preview";

export default function Home() {
  return (
    <div className="h-screen p-5">
      <Hero headline="Kaleb Garner" subheadline="Web Developer" text="Web Developer based in North Texas. I have been working in the tech industry since 2022 and am currently pursuing my degree in Cybersecurity. My experience spans web design, software development, and interaction design."/>
      <ProjectPreview />
    </div>
  );
}
