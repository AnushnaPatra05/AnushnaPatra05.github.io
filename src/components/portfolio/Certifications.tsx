const certs = [
  { title: "Certification Title", issuer: "Issuing Organization", date: "Month Year" },
  { title: "Certification Title", issuer: "Issuing Organization", date: "Month Year" },
  { title: "Certification Title", issuer: "Issuing Organization", date: "Month Year" },
  { title: "Certification Title", issuer: "Issuing Organization", date: "Month Year" },
  { title: "Certification Title", issuer: "Issuing Organization", date: "Month Year" },
  { title: "Certification Title", issuer: "Issuing Organization", date: "Month Year" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="reveal mb-10">
          <div className="label-mint mb-3">Certifications</div>
          <h2 className="text-3xl md:text-[36px] font-bold text-foreground mb-3">Certifications</h2>
          <p style={{ color: "#A0A0A0" }}>Credentials and courses I've completed.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c, i) => (
            <div
              key={i}
              className="reveal relative overflow-hidden"
              style={{
                backgroundColor: "#2A2A2D",
                border: "0.5px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "24px",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0"
                style={{
                  height: "3px",
                  backgroundColor: "#3ECFA4",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
              />
              <div
                className="mb-4"
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderRadius: "8px",
                }}
              />
              <div className="text-foreground" style={{ fontSize: "15px", fontWeight: 500 }}>
                {c.title}
              </div>
              <div style={{ color: "#A0A0A0", fontSize: "13px", marginTop: "4px" }}>{c.issuer}</div>
              <div style={{ color: "#A0A0A0", fontSize: "12px", marginTop: "2px" }}>{c.date}</div>
              <a
                href="#"
                className="inline-block mt-4 text-mint transition-smooth hover:opacity-80"
                style={{ fontSize: "12px" }}
              >
                View Certificate →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
