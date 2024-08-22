
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import GradientCursor from "./components/GradientCursor";
import Projects from "./components/Projects";

export default function Home() {

  return (
    <div className="relative">
    <GradientCursor/>
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <About />
          <Experience />
          <Projects/>
        </main>
      </div>
    </div>
    </div>
  );
}
