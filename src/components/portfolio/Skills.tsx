const groups = [
  {
    title: "Core Angular",
    items: [
      "Reactive Forms",
      "Custom Validators",
      "Module-based Routing",
      "BehaviorSubject",
      "Data Binding",
      "Dependency Injection",
      "Decorators",
      "Lifecycle Hooks",
      "Change Detection Strategy",
    ],
  },
  {
    title: "RxJS",
    items: [
      "valueChanges",
      "combineLatest",
      "subscribe",
      "takeUntil",
      "debounceTime",
      "forkJoin",
      "switchMap",
      "distinctUntilChanged",
    ],
  },
  {
    title: "State Management",
    items: ["NgRx Store", "Actions", "Reducers", "Effects", "Selectors"],
  },
  {
    title: "Markup & Styling",
    items: ["HTML5", "SCSS", "Bootstrap 5"],
  },
  {
    title: "APIs & Data",
    items: ["RESTful APIs", "JSON"],
  },
  {
    title: "Unit Testing",
    items: ["Karma", "Jasmine"],
  },
];

const Skills = ({ id = "skills" }: { id?: string }) => {
  return (
    <section id={id} className="section-padding bg-background">
      <div className="container-narrow">
        <div className="reveal mb-12">
          <div className="label-mint mb-3">Skills</div>
          <h2 className="text-3xl md:text-[36px] font-bold gradient-text">What I work with</h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "20px" }}
        >
          {groups.map((g) => (
            <div
              key={g.title}
              className="reveal glass-panel"
              style={{ padding: "20px 24px" }}
            >
              <div
                className="text-mint uppercase"
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  marginBottom: "12px",
                }}
              >
                {g.title}
              </div>
              <div className="flex flex-wrap" style={{ gap: "8px" }}>
                {g.items.map((item) => (
                  <span key={item} className="glass-pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
