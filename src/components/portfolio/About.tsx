const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "Building", label: "Web Applications" },
  { value: "Cognizant", label: "Current Employer" },
  { value: "B.Tech", label: "Graduate 2023" },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="reveal mb-12">
          <div className="label-mint mb-3">About</div>
          <h2 className="text-3xl md:text-[36px] font-bold text-foreground">Who I am</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="reveal space-y-5 text-secondary-muted text-base leading-relaxed">
            <p>
              I'm <span className="text-foreground font-medium">Anushna Patra</span>, a Programmer Analyst at
              Cognizant with 3 years of hands-on experience building scalable frontend applications using Angular.
            </p>
            <p>
              I specialise in reactive architecture — Reactive Forms, RxJS streams, and NgRx state management.
              I care deeply about clean code, component design, and delivering smooth user experiences.
            </p>
            <p>
              Currently based in India, open to exciting frontend opportunities.
            </p>
          </div>

          <div className="reveal grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="p-6 glass-panel glass-card-hover"
              >
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 break-words">
                  {s.value}
                </div>
                <div className="text-xs text-secondary-muted uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
