import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, ChevronDown, ImageIcon } from "lucide-react";
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
      {/* Aurora borealis background */}
      <div className="aurora-bg">
        <div className="aurora-band a1" />
        <div className="aurora-band a2" />
        <div className="aurora-band a3" />
        <div className="aurora-band a4" />
      </div>

      <div className="hero-split relative z-[2] w-full">
        {/* LEFT */}
        <div className="hero-left fade-in-up">
          <div className="label-mint mb-6">Frontend Developer · Cognizant</div>

          <h1
            className="font-extrabold tracking-tight mb-5 gradient-text"
            style={{ fontSize: "clamp(36px, 6vw, 58px)", lineHeight: 1.05, fontWeight: 800 }}
          >
            Anushna Patra
          </h1>

          <div
            className="relative mb-6 overflow-hidden"
            style={{ height: 44, fontSize: "clamp(20px, 2.4vw, 26px)" }}
          >
            {roles.map((r, i) => (
              <span
                key={r}
                className="absolute inset-0 font-normal"
                style={{
                  color: "#3ECFA4",
                  transition: "opacity 280ms ease, transform 280ms ease",
                  opacity: i === idx ? 1 : 0,
                  transform: i === idx ? "translateY(0)" : "translateY(-8px)",
                }}
              >
                {r}
              </span>
            ))}
          </div>

          <p className="text-base mb-8 leading-relaxed" style={{ color: "#A0A0A0" }}>
            3 years building reactive, scalable Angular applications at Cognizant.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <Button asChild size="lg" className="glass-btn-primary hover:bg-transparent">
              <Link to="/projects">
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" className="glass-btn-secondary hover:bg-transparent">
              <a href={CV_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </Button>
          </div>

          <div style={{ width: 60, height: 2, background: "#3ECFA4", borderRadius: 1, marginTop: 8 }} />
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          {/* Replace this div with <img src="/profile.jpg" /> when ready */}
          <div
            className="profile-photo"
            style={{
              width: 220,
              height: 220,
              borderRadius: "50%",
              border: "2px solid rgba(62,207,164,0.40)",
              boxShadow: "0 0 40px rgba(62,207,164,0.15), 0 0 80px rgba(168,85,247,0.10)",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <ImageIcon className="w-6 h-6" style={{ color: "#A0A0A0" }} />
            <span style={{ color: "#A0A0A0", fontSize: 12 }}>Upload your photo</span>
          </div>

          <div className="glass-card" style={{ padding: 24, width: "100%" }}>
            <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 600, marginBottom: 10 }}>
              Who I Am
            </h3>
            <div style={{ color: "#A0A0A0", fontSize: 13, lineHeight: 1.7 }}>
              <p>I'm Anushna Patra, a Programmer Analyst at Cognizant with 3 years of hands-on Angular experience.</p>
              <p>I specialise in reactive architecture — Reactive Forms, RxJS streams, and NgRx state management.</p>
              <p>Passionate about clean code, scalable UI, and delivering smooth user experiences.</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {["3+ Years", "Angular Expert", "Cognizant", "B.Tech 2023"].map((s) => (
                <span
                  key={s}
                  style={{
                    background: "rgba(62,207,164,0.10)",
                    border: "0.5px solid rgba(62,207,164,0.25)",
                    color: "#3ECFA4",
                    borderRadius: 999,
                    fontSize: 11,
                    padding: "3px 12px",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#skills"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-mint animate-bounce-down z-[3]"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;
