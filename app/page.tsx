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
      <main className="overflow-hidden">
        <Hero />
        <div className="padding-x padding-y max-width h-[800px]" id="discover">
          <Discover />
        </div>
        <div className="padding-x padding-y max-width" id="discover">
          <FreqAskQuest />
        </div>
      </main>
      <Footer />
    </>
  );
}
