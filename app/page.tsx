import Section_hero from "@/components/Section_hero";
import Header from "@/components/Header";

import Competences from "@/components/Competences";
import Projets from "@/components/Projets";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactSection from "@/components/ContactSection";



export default function Home() {
  return (
    <main className="bg-black text-white">
    <Header/>
      <Section_hero/>
      <Competences/>
      <Projets/>
      <ExperienceTimeline/>
      <ContactSection/>
    </main>
  );
}
