import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { CV_DOWNLOAD_URL } from "@/config/cv";

const roles = ["Programmer Analyst", "Angular Developer", "UI Engineer", "Problem Solver"];

const Hero = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-background overflow-hidden"
    >
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

      <div className="container-narrow relative z-10 py-32 w-full">
        <div className="max-w-3xl fade-in-up">
          <div className="label-mint mb-6">Frontend Developer · Cognizant</div>

          <h1
            className="text-white font-extrabold tracking-tight mb-5"
            style={{ fontSize: "clamp(40px, 8vw, 64px)", lineHeight: 1.05, fontWeight: 800 }}
          >
            Anushna Patra
          </h1>

          <div
            className="h-10 md:h-12 mb-6 relative overflow-hidden"
            style={{ fontSize: "clamp(20px, 3vw, 28px)" }}
          >
            {roles.map((r, i) => (
              <span
                key={r}
                className={`absolute inset-0 text-mint font-normal transition-all duration-500 ${
                  i === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
              >
                {r}
              </span>
            ))}
          </div>

          <p className="text-base md:text-lg text-secondary-muted max-w-2xl mb-10 leading-relaxed">
            3 years building reactive, scalable Angular applications at Cognizant.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Button asChild variant="mint" size="lg">
              <Link to="/projects">
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outlineLight" size="lg">
              <a href="/public/cv.docx" download="Anushna_Patra_CV.docx">
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="h-0.5 w-[60px] bg-mint" />
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-mint animate-bounce-down"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;
