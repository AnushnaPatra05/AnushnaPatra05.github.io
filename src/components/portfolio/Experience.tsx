import { useEffect, useRef, useState } from "react";

const entries = [
  {
    role: "Intern",
    company: "Cognizant Technology Solutions",
    period: "Jan 2023 – Mid 2023",
    bullets: [
      "Onboarded into Angular ecosystem and enterprise codebase",
      "Contributed to UI bug fixes, component styling, and feature enhancements",
      "Gained hands-on experience with Agile/Scrum workflows",
    ],
  },
  {
    role: "Programmer Analyst Trainee (PAT)",
    company: "Cognizant Technology Solutions",
    period: "2023 – 2024",
    bullets: [
      "Built and maintained Angular modules with reactive forms and custom validators",
      "Developed reusable component libraries using SCSS and Bootstrap",
      "Integrated REST APIs and handled JSON data transformation",
      "Learned and applied RxJS operators for async data handling",
    ],
  },
  {
    current: true,
    role: "Programmer Analyst",
    company: "Cognizant Technology Solutions",
    period: "2024 – Present",
    bullets: [
      "Leading Angular feature development for enterprise-scale client applications",
      "Implementing NgRx state management and complex RxJS data pipelines",
      "Conducting code reviews and mentoring junior developers",
      "Collaborating with cross-functional teams on REST API integration",
    ],
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="reveal mb-12">
          <div className="label-mint mb-3">Experience</div>
          <h2 className="text-3xl md:text-[36px] font-bold gradient-text">My Journey</h2>
        </div>

        <div ref={sectionRef} className={`relative max-w-3xl ${active ? "timeline-active" : ""}`}>
          <div className="timeline-line absolute left-[7px] top-2 bottom-2 w-0.5 bg-mint" />

          <div className="space-y-10">
            {entries.map((e, i) => (
              <div key={i} className="timeline-entry relative pl-10">
                <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-mint ring-4 ring-background" />

                <div className="p-6 rounded-xl bg-card border border-subtle hover:border-mint/50 transition-smooth">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    {e.current && (
                      <span className="px-2.5 py-0.5 rounded bg-mint text-primary-foreground text-xs font-semibold">
                        Current
                      </span>
                    )}
                    <span className="text-sm text-secondary-muted">{e.period}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{e.role}</h3>
                  <p className="text-mint text-sm mb-4">{e.company}</p>
                  <ul className="space-y-2 text-sm text-secondary-muted">
                    {e.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="mt-2 w-1 h-1 rounded-full bg-mint flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
