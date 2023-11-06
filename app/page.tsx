import {
  Dashboard,
  Discover,
  Footer,
  Hero,
  Navbar,
  FreqAskQuest,
} from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col overflow-hidden">
        <Hero />
        <div className="padding-x padding-y max-width mb-[150px]" id="discover">
          <Discover />
        </div>
        <div className="padding-x padding-y max-width">
          <FreqAskQuest />
        </div>
      </main>
      <Footer />
    </>
  );
}
