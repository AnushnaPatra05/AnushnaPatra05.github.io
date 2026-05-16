import { useEffect, useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Camera,
} from "lucide-react";
import { CV_DOWNLOAD_URL } from "@/config/cv";

const roles = [
  "Frontend Engineer",
  "Programmer Analyst",
  "Angular Specialist",
];

const slideLabels = [
  "ABOUT ME",
  "COGNIZANT TECHNOLOGY SOLUTIONS",
  "MY TECH STACK",
];

type TechLogo = {
  src?: string;
  label: string;
};

const techLogos: TechLogo[] = [
  { src: "/angular.jpg", label: "Angular" },
  { src: "/rxjs.jpg", label: "RxJS" },
  { src: "/ts.jpg", label: "JavaScript & TypeScript" },
  { src: "/css.jpg", label: "SCSS & CSS3" },
  { src: "/html.jpg", label: "HTML5" },
  { src: "/nodejs.jpg", label: "Node.js" },
  { src: "/restapi.jpg", label: "REST API" },
  { src: "/json.jpg", label: "JSON" },
  { src: "/mongodb.jpg", label: "MongoDB" },
  { src: "/karma-jasmine.jpg", label: "Karma & Jasmine" },
  { src: "/NGRX.jpg", label: "NgRx" },
  { src: "/bootstrap.jpg", label: "Bootstrap" },
  { src: "/github.png", label: "GitHub" },
  { src: "/ci-cd.png", label: "CI/CD" },
];

const SLIDE_COUNT = 3;

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDE_COUNT);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + SLIDE_COUNT) % SLIDE_COUNT);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % SLIDE_COUNT);
  };

  const scrollToProjects = () => {
    document
      .querySelector("#projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "720px",
        overflow: "hidden",
        background: "#0B1020",
      }}
    >
      {/* ========================================================= */}
      {/* ARROWS */}
      {/* ========================================================= */}

      <button
        onClick={goPrev}
        aria-label="Previous Slide"
        style={arrowStyle("left")}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={goNext}
        aria-label="Next Slide"
        style={arrowStyle("right")}
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* ========================================================= */}
      {/* SLIDE 0 — ABOUT */}
      {/* ========================================================= */}

      <Slide active={activeIndex === 0}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, #0b1020 0%, #151932 50%, #1C1C1E 100%)",
          }}
        />

        <div className="hero-about-container">
          {/* IMAGE */}

          <div className="profile-image-wrap">
            <img
              src="/photoANUSHNA.jpg"
              alt="Anushna Patra"
              className="profile-image"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          {/* CONTENT */}

          <div className="hero-about-content">
            <div className="hero-small-title">
              PROGRAMMER ANALYST
            </div>

            <h2 className="hero-heading">
              Building scalable
              <br />
              Angular experiences.
            </h2>

            <p className="hero-description">
              Frontend Engineer with 3+ years of experience building
              enterprise-grade Angular applications at Cognizant.
              Passionate about reactive architecture, clean UI systems,
              accessibility, and scalable frontend engineering.
            </p>

            <div className="hero-tags">
              {[
                "3+ Years Experience",
                "Angular Expert",
                "RxJS & NgRx",
                "Kolkata, India",
              ].map((tag) => (
                <span key={tag} className="hero-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <SlideOverlay
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          scrollToProjects={scrollToProjects}
        />
      </Slide>

      {/* ========================================================= */}
      {/* SLIDE 1 — COGNIZANT */}
      {/* ========================================================= */}

      <Slide active={activeIndex === 1}>
        {/* IMAGE */}

        <div className="cognizant-image" />

        {/* OVERLAY */}

        <div className="cognizant-overlay" />

        {/* LOGO */}

        <div className="cts-logo-wrap">
          <img
            src="/ctslogo.jpg"
            alt="Cognizant"
            className="cts-logo"
          />
        </div>

        <SlideOverlay
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          scrollToProjects={scrollToProjects}
        />
      </Slide>

      {/* ========================================================= */}
      {/* SLIDE 2 — TECH STACK */}
      {/* ========================================================= */}

      <Slide active={activeIndex === 2}>
        <div className="tech-background" />

        <div className="tech-stack-container">
          <h3 className="tech-title">My Tech Stack</h3>

          <div className="tech-grid">
            {techLogos.map((tech) => (
              <TechItem
                key={tech.label}
                src={tech.src}
                label={tech.label}
              />
            ))}
          </div>
        </div>

        <SlideOverlay
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          scrollToProjects={scrollToProjects}
        />
      </Slide>

      {/* ========================================================= */}
      {/* DOWN ICON */}
      {/* ========================================================= */}

      <a href="#skills" className="scroll-down">
        <ChevronDown className="w-6 h-6" />
      </a>

      {/* ========================================================= */}
      {/* RESPONSIVE CSS */}
      {/* ========================================================= */}

      <style>
        {`
          /* ======================================================= */
          /* ABOUT SECTION */
          /* ======================================================= */

          .hero-about-container {
            position: absolute;
            inset: 0;
            z-index: 2;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 72px;

            padding: 120px 80px 260px;
          }

          .profile-image-wrap {
            width: 260px;
            height: 260px;
            border-radius: 50%;
            overflow: hidden;
            flex-shrink: 0;

            border: 2px solid rgba(62,207,164,0.45);

            background: rgba(255,255,255,0.04);

            box-shadow:
              0 0 40px rgba(62,207,164,0.15),
              0 0 80px rgba(168,85,247,0.15);
          }

          .profile-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center top;
            transform: scale(1.08);
          }

          .hero-about-content {
            max-width: 520px;

            display: flex;
            flex-direction: column;
            gap: 18px;
          }

          .hero-small-title {
            color: #3ECFA4;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.14em;
          }

          .hero-heading {
            color: #ffffff;
            font-size: 54px;
            line-height: 1.08;
            font-weight: 800;
            margin: 0;
          }

          .hero-description {
            color: rgba(255,255,255,0.72);
            font-size: 15px;
            line-height: 1.9;
            margin: 0;
          }

          .hero-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 8px;
          }

          .hero-tag {
            padding: 8px 14px;
            border-radius: 999px;

            background: rgba(62,207,164,0.08);
            border: 1px solid rgba(62,207,164,0.18);

            color: #3ECFA4;
            font-size: 12px;
            font-weight: 500;
          }

          /* ======================================================= */
          /* COGNIZANT */
          /* ======================================================= */

          .cognizant-image {
            position: absolute;
            inset: 0;

            background-image: url('/ctsoffice.jpg');
            background-repeat: no-repeat;

            /* IMPORTANT FIX */
            background-size: contain;
            background-position: center center;

            background-color: #0B1020;
          }

          .cognizant-overlay {
            position: absolute;
            inset: 0;

            background:
              linear-gradient(
                to top,
                rgba(0,0,0,0.88) 0%,
                rgba(0,0,0,0.35) 45%,
                rgba(0,0,0,0.18) 100%
              );
          }

          .cts-logo-wrap {
            position: absolute;
            top: 42px;
            right: 60px;
            z-index: 5;
          }

          .cts-logo {
            height: 34px;
            object-fit: contain;
            opacity: 0.92;
          }

          /* ======================================================= */
          /* TECH STACK */
          /* ======================================================= */

          .tech-background {
            position: absolute;
            inset: 0;

            background:
              linear-gradient(
                135deg,
                #0b1020 0%,
                #141b34 50%,
                #1C1C1E 100%
              );
          }

          .tech-stack-container {
            position: absolute;
            inset: 0;

            z-index: 2;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            padding:
              120px
              50px
              320px;
          }

          .tech-title {
            color: white;
            font-size: 30px;
            font-weight: 700;

            margin-bottom: 50px;
            letter-spacing: 0.04em;
          }

          .tech-grid {
            width: 100%;
            max-width: 1050px;

            display: grid;

            grid-template-columns:
              repeat(auto-fit, minmax(110px, 1fr));

            gap: 34px 26px;

            justify-items: center;
            align-items: center;
          }

          /* ======================================================= */
          /* SCROLL ICON */
          /* ======================================================= */

          .scroll-down {
            position: absolute;
            left: 50%;
            bottom: 18px;

            transform: translateX(-50%);

            z-index: 30;

            color: #3ECFA4;

            animation: bounce 2s infinite;
          }

          @keyframes bounce {
            0%,20%,50%,80%,100% {
              transform: translate(-50%,0);
            }

            40% {
              transform: translate(-50%,-10px);
            }

            60% {
              transform: translate(-50%,-5px);
            }
          }

          /* ======================================================= */
          /* TABLET */
          /* ======================================================= */

          @media (max-width: 1024px) {

            .hero-about-container {
              gap: 42px;
              padding:
                100px
                40px
                300px;
            }

            .hero-heading {
              font-size: 44px;
            }

            .profile-image-wrap {
              width: 220px;
              height: 220px;
            }

            .tech-stack-container {
              padding:
                100px
                30px
                380px;
            }

            .tech-grid {
              grid-template-columns:
                repeat(auto-fit, minmax(100px, 1fr));

              gap: 28px 20px;
            }
          }

          /* ======================================================= */
          /* MOBILE */
          /* ======================================================= */

          @media (max-width: 768px) {

            #hero {
              min-height: 900px !important;
            }

            .hero-about-container {
              flex-direction: column;

              text-align: center;

              gap: 28px;

              padding:
                90px
                24px
                340px;
            }

            .hero-about-content {
              align-items: center;
            }

            .hero-heading {
              font-size: 36px;
            }

            .hero-description {
              font-size: 14px;
            }

            .profile-image-wrap {
              width: 180px;
              height: 180px;
            }

            .cts-logo-wrap {
              right: 24px;
              top: 24px;
            }

            .cts-logo {
              height: 28px;
            }

            .tech-stack-container {
              justify-content: flex-start;

              padding:
                100px
                20px
                380px;
            }

            .tech-title {
              font-size: 24px;
              margin-bottom: 34px;
            }

            .tech-grid {
              grid-template-columns:
                repeat(3, 1fr);

              gap: 22px 10px;
            }
          }
        `}
      </style>
    </section>
  );
};

const TechItem = ({
  src,
  label,
}: {
  src?: string;
  label: string;
}) => {
  const [errored, setErrored] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 110,

        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        gap: 12,
      }}
    >
      <div
        style={{
          width: 74,
          height: 74,

          borderRadius: 18,

          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",

          backdropFilter: "blur(10px)",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          boxShadow: "0 6px 24px rgba(0,0,0,0.25)",
        }}
      >
        {!errored && src ? (
          <img
            src={src}
            alt={label}
            onError={() => setErrored(true)}
            style={{
              width: 42,
              height: 42,
              objectFit: "contain",
            }}
          />
        ) : (
          <Camera className="w-5 h-5 text-[#3ECFA4]" />
        )}
      </div>

      <span
        style={{
          color: "rgba(255,255,255,0.72)",
          fontSize: 12,
          fontWeight: 500,
          lineHeight: 1.5,
          textAlign: "center",
        }}
      >
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
        left: 0,
        right: 0,
        bottom: 0,

        zIndex: 10,

        padding: "40px 20px 60px",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        gap: 14,

        textAlign: "center",

        background:
          "linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.55) 60%, transparent 100%)",
      }}
    >
      <div
        style={{
          color: "#3ECFA4",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.16em",
        }}
      >
        {slideLabels[activeIndex]}
      </div>

      <h1
        style={{
          margin: 0,
          fontSize: "clamp(42px, 6vw, 62px)",
          fontWeight: 800,
          lineHeight: 1,

          background:
            "linear-gradient(90deg, #3ECFA4 0%, #a855f7 100%)",

          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Anushna Patra
      </h1>

      <div
        style={{
          position: "relative",
          height: 34,
          width: "100%",
          overflow: "hidden",
        }}
      >
        {roles.map((role, index) => {
          const active = index === activeIndex;

          return (
            <span
              key={role}
              style={{
                position: "absolute",
                inset: 0,

                textAlign: "center",

                color: "#3ECFA4",
                fontSize: "clamp(18px, 2vw, 24px)",

                opacity: active ? 1 : 0,

                transform: active
                  ? "translateY(0)"
                  : index < activeIndex
                  ? "translateY(-100%)"
                  : "translateY(100%)",

                transition: "all 300ms ease",
              }}
            >
              {role}
            </span>
          );
        })}
      </div>

      <div
        style={{
          width: 54,
          height: 3,
          borderRadius: 999,

          background:
            "linear-gradient(90deg, #3ECFA4 0%, #a855f7 100%)",
        }}
      />

      {/* BUTTONS */}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",

          gap: 14,
        }}
      >
        <button
          onClick={scrollToProjects}
          style={{
            border: "1.5px solid #3ECFA4",
            background: "transparent",
            color: "#3ECFA4",

            borderRadius: 999,

            padding: "12px 28px",

            fontSize: 14,
            fontWeight: 600,

            cursor: "pointer",
          }}
        >
          View My Work →
        </button>

        <a
          href={CV_DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            border: "1px solid rgba(255,255,255,0.16)",
            background: "rgba(255,255,255,0.08)",
            color: "#ffffff",

            borderRadius: 999,

            padding: "12px 28px",

            fontSize: 14,
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          Download CV ↓
        </a>
      </div>

      {/* DOTS */}

      <div
        style={{
          display: "flex",
          gap: 8,
          marginTop: 4,
        }}
      >
        {[0, 1, 2].map((index) => {
          const active = index === activeIndex;

          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                width: active ? 28 : 8,
                height: 8,

                borderRadius: 999,

                border: "none",

                background: active
                  ? "linear-gradient(90deg, #3ECFA4, #a855f7)"
                  : "rgba(255,255,255,0.32)",

                cursor: "pointer",

                transition: "all 300ms ease",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const Slide = ({
  active,
  children,
}: {
  active: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,

        opacity: active ? 1 : 0,

        transition: "opacity 500ms ease",

        pointerEvents: active ? "auto" : "none",
      }}
    >
      {children}
    </div>
  );
};

const arrowStyle = (
  side: "left" | "right"
): React.CSSProperties => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",

  zIndex: 20,

  width: 46,
  height: 46,

  borderRadius: "50%",

  border: "1px solid rgba(255,255,255,0.12)",

  background: "rgba(255,255,255,0.06)",

  color: "#ffffff",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  cursor: "pointer",

  backdropFilter: "blur(10px)",

  [side]: 24,
});

export default Hero;