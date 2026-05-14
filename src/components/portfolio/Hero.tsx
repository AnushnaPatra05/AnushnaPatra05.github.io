import { useEffect, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { CV_DOWNLOAD_URL } from "@/config/cv";

const roles = ["UI Developer", "Frontend Engineer", "Angular Specialist"];

const slideLabels = [
  "FRONTEND DEVELOPER · COGNIZANT",
  "MY TECH STACK",
  "ABOUT ME",
];

const techLogos = [
  { src: "/logos/angular.png", label: "Angular" },
  { src: "/logos/rxjs.png", label: "RxJS" },
  { src: "/logos/typescript.png", label: "TypeScript" },
  { src: "/logos/javascript.png", label: "JavaScript" },
  { src: "/logos/html5.png", label: "HTML5" },
  { src: "/logos/css3.png", label: "CSS3" },
  { src: "/logos/nodejs.png", label: "Node.js" },
  { src: "/logos/restapi.png", label: "REST API" },
  { src: "/logos/json.png", label: "JSON" },
  { src: "/logos/mongodb.png", label: "MongoDB" },
  { src: "/logos/karma-jasmine.png", label: "Karma & Jasmine" },
];

const SLIDE_COUNT = 3;

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveIndex((i) => (i + 1) % SLIDE_COUNT), 4000);
    return () => clearInterval(t);
  }, []);

  const goPrev = () => setActiveIndex((i) => (i - 1 + SLIDE_COUNT) % SLIDE_COUNT);
  const goNext = () => setActiveIndex((i) => (i + 1) % SLIDE_COUNT);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="hero-section relative bg-background overflow-hidden"
      style={{ height: "100vh", width: "100%" }}
    >
      {/* Aurora */}
      <div className="aurora-bg">
        <div className="aurora-band a1" />
        <div className="aurora-band a2" />
        <div className="aurora-band a3" />
        <div className="aurora-band a4" />
      </div>

      {/* Carousel arrows */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className="hero-arrow"
        style={arrowStyle("left")}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={goNext}
        aria-label="Next slide"
        className="hero-arrow"
        style={arrowStyle("right")}
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* SLIDE 0 — Cognizant */}
      <Slide active={activeIndex === 0}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(public/ctsoffice.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#003d2e",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.40) 50%, rgba(0,0,0,0.20) 100%)",
          }}
        />
        <div
          className="slide-cog-logo"
          style={{
            position: "absolute",
            top: 40,
            right: 60,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <img
            src="public/ctslogo.jpg"
            alt="Cognizant"
            style={{ height: 28, width: "auto", objectFit: "contain", opacity: 0.9 }}
            onError={(e) => {
              const el = e.currentTarget;
              el.style.display = "none";
              const next = el.nextElementSibling as HTMLElement | null;
              if (next) next.style.display = "block";
            }}
          />
          <span
            style={{
              display: "none",
              color: "#fff",
              fontSize: 13,
              letterSpacing: "0.15em",
              opacity: 0.7,
            }}
          >
            COGNIZANT
          </span>
        </div>
        <SlideOverlay
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          scrollToProjects={scrollToProjects}
        />
      </Slide>

      {/* SLIDE 1 — Tech Stack */}
      <Slide active={activeIndex === 1}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, #0d0d1a 0%, #1a1a2e 50%, #1C1C1E 100%)",
          }}
        />
        <div
          className="slide-tech-content"
          style={{
            position: "absolute",
            top: 60,
            left: 0,
            right: 0,
            bottom: 280,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 60px",
            gap: 28,
          }}
        >
          <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 700, textAlign: "center", margin: 0 }}>
            My Tech Stack
          </h3>
          <div className="tech-grid" style={{ width: "100%", maxWidth: 760, margin: "0 auto" }}>
            {techLogos.map((t) => (
              <TechItem key={t.label} src={t.src} label={t.label} />
            ))}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span
                style={{
                  color: "#3ECFA4",
                  fontSize: 11,
                  background: "rgba(62,207,164,0.08)",
                  border: "0.5px solid rgba(62,207,164,0.2)",
                  borderRadius: 999,
                  padding: "6px 16px",
                }}
              >
                NgRx · Bootstrap · Git · CI/CD
              </span>
            </div>
          </div>
        </div>
        <SlideOverlay
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          scrollToProjects={scrollToProjects}
        />
      </Slide>

      {/* SLIDE 2 — Profile */}
      <Slide active={activeIndex === 2}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, #1a0a2e 0%, #0d0d1a 50%, #1C1C1E 100%)",
          }}
        />
        <div
          className="slide-profile-content"
          style={{
            position: "absolute",
            top: 40,
            left: 0,
            right: 0,
            bottom: 320,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 48,
            padding: "0 80px",
          }}
        >
          <div
            className="profile-photo-wrap"
            style={{
              width: 220,
              height: 220,
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid rgba(62,207,164,0.50)",
              boxShadow:
                "0 0 60px rgba(62,207,164,0.25), 0 0 100px rgba(168,85,247,0.15)",
              flex: "0 0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            <img
              src="public/photoANUSHNA.jpg"
              alt="Anushna Patra"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
              }}
              onError={(e) => {
                const el = e.currentTarget;
                el.style.display = "none";
                const fallback = el.nextElementSibling as HTMLElement | null;
                if (fallback) fallback.style.display = "flex";
              }}
            />
            <div
              style={{
                display: "none",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                color: "#A0A0A0",
              }}
            >
              <Camera className="w-6 h-6" />
              <span style={{ fontSize: 12 }}>Upload photo</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 320 }}>
            <div style={{ color: "#3ECFA4", fontSize: 15, fontWeight: 500 }}>Programmer Analyst</div>
            <div style={{ color: "#A0A0A0", fontSize: 13 }}>Cognizant Technology Solutions</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["3+ Years", "Angular Expert", "B.Tech 2023", "Kolkata, India"].map((s) => (
                <span
                  key={s}
                  style={{
                    background: "rgba(62,207,164,0.08)",
                    border: "0.5px solid rgba(62,207,164,0.22)",
                    color: "#3ECFA4",
                    borderRadius: 999,
                    fontSize: 11,
                    padding: "4px 12px",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
            <p style={{ color: "#A0A0A0", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
              Building scalable, reactive Angular applications at Cognizant — passionate about clean code and smooth user experiences.
            </p>
          </div>
        </div>
        <SlideOverlay
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          scrollToProjects={scrollToProjects}
        />
      </Slide>

      {/* Scroll chevron */}
      <a
        href="#skills"
        aria-label="Scroll down"
        className="text-mint animate-bounce-down"
        style={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 30,
          pointerEvents: "none",
        }}
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};

const arrowStyle = (side: "left" | "right"): React.CSSProperties => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 20,
  width: 40,
  height: 40,
  borderRadius: "50%",
  background: "rgba(255,255,255,0.08)",
  border: "0.5px solid rgba(255,255,255,0.15)",
  color: "#fff",
  fontSize: 20,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [side]: 20,
});

const TechItem = ({ src, label }: { src: string; label: string }) => {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span
          style={{
            color: "#3ECFA4",
            fontSize: 10,
            background: "rgba(62,207,164,0.08)",
            border: "0.5px solid rgba(62,207,164,0.2)",
            borderRadius: 999,
            padding: "6px 12px",
            textAlign: "center",
          }}
        >
          {label}
        </span>
      </div>
    );
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
      <img
        src={src}
        alt={label}
        onError={() => setErrored(true)}
        style={{ width: 52, height: 52, objectFit: "contain" }}
      />
      <span style={{ fontSize: 10, color: "rgba(255,255,255,0.60)", textAlign: "center" }}>
        {label}
      </span>
    </div>
  );
};

const SlideOverlay = ({
  activeIndex,
  setActiveIndex,
  scrollToProjects,
}: {
  activeIndex: number;
  setActiveIndex: (i: number) => void;
  scrollToProjects: () => void;
}) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        background:
          "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.60) 60%, transparent 100%)",
        padding: "40px 0 60px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.14em",
          color: "#3ECFA4",
          textTransform: "uppercase",
        }}
      >
        {slideLabels[activeIndex]}
      </div>

      <h1
        className="hero-name gradient-text"
        style={{
          fontSize: 52,
          fontWeight: 800,
          lineHeight: 1.05,
          margin: 0,
          textAlign: "center",
        }}
      >
        Anushna Patra
      </h1>

      <div
        className="hero-role"
        style={{ height: 40, overflow: "hidden", position: "relative", width: "100%" }}
      >
        {roles.map((r, i) => {
          const isActive = i === activeIndex;
          return (
            <span
              key={r}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                margin: "0 auto",
                width: "100%",
                textAlign: "center",
                fontSize: 22,
                fontWeight: 400,
                color: "#3ECFA4",
                opacity: isActive ? 1 : 0,
                transform: isActive
                  ? "translateY(0)"
                  : i < activeIndex
                  ? "translateY(-100%)"
                  : "translateY(100%)",
                transition: "opacity 280ms ease, transform 280ms ease",
              }}
            >
              {r}
            </span>
          );
        })}
      </div>

      <div
        style={{
          width: 48,
          height: 2,
          background: "linear-gradient(90deg, #3ECFA4, #a855f7)",
          borderRadius: 1,
          margin: "0 auto",
        }}
      />

      <div
        className="hero-btn-row"
        style={{ display: "flex", flexDirection: "row", gap: 14, justifyContent: "center" }}
      >
        <button
          onClick={scrollToProjects}
          style={{
            background: "transparent",
            border: "1.5px solid #3ECFA4",
            color: "#3ECFA4",
            borderRadius: 999,
            padding: "11px 28px",
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
            transition: "all 200ms ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(62,207,164,0.12)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          View My Work →
        </button>
        <a
          href={CV_DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "rgba(255,255,255,0.10)",
            border: "1px solid rgba(255,255,255,0.20)",
            color: "#ffffff",
            borderRadius: 999,
            padding: "11px 28px",
            fontSize: 14,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            transition: "all 200ms ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.10)")}
        >
          Download CV ↓
        </a>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 4 }}>
        {[0, 1, 2].map((i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setActiveIndex(i)}
              style={{
                width: isActive ? 28 : 6,
                height: 6,
                borderRadius: isActive ? 3 : "50%",
                background: isActive
                  ? "linear-gradient(90deg, #3ECFA4, #a855f7)"
                  : "rgba(255,255,255,0.30)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 300ms ease",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const Slide = ({ active, children }: { active: boolean; children: React.ReactNode }) => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      opacity: active ? 1 : 0,
      transition: "opacity 500ms ease",
      pointerEvents: active ? "auto" : "none",
    }}
  >
    {children}
  </div>
);

export default Hero;
