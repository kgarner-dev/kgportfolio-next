import { Hero } from "@/components/hero";
import { PreviewHeading } from "@/components/previewheading";
import { ProjectsPreview } from "@/components/projectspreview";

export default function Home() {
  return (
    <>
      <Hero headline="Kaleb Garner" subheadline="Web Developer" text="Web Developer based in North Texas. I have been working in the tech industry since 2022 and am currently pursuing my degree in Cybersecurity. My experience spans web design, software development, and interaction design."/>
      <PreviewHeading />
      <ProjectsPreview />
    </>
  );
}
