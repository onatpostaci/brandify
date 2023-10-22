import { Dashboard, Discover, Footer, Hero, Navbar } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <div className="padding-x padding-y max-width" id="discover">
          <Discover />
        </div>
      </main>
      <Footer />
    </>
  );
}
