import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, FileText, Search } from "lucide-react";
import { certificates, type Certificate } from "@/data/certificates";
import CertificateViewer from "./CertificateViewer";

const CARD_WIDTH = 260;
const GAP = 20;

const CertificationsCarousel = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selected, setSelected] = useState<Certificate | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateState = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = CARD_WIDTH + GAP;
    const idx = Math.round(el.scrollLeft / step);
    setActiveIndex(idx);
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateState();
    el.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);
    return () => {
      el.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (CARD_WIDTH + GAP), behavior: "smooth" });
  };

  const scrollToIndex = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: i * (CARD_WIDTH + GAP), behavior: "smooth" });
  };

  const arrowBase: React.CSSProperties = {
    width: 44,
    height: 44,
    borderRadius: "9999px",
    backgroundColor: "#2A2A2D",
    border: "0.5px solid rgba(255,255,255,0.1)",
    color: "#3ECFA4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    flexShrink: 0,
  };

  return (
    <section id="certifications" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="reveal mb-10">
          <div className="label-mint mb-3">Certifications</div>
          <h2 className="text-3xl md:text-[36px] font-bold gradient-text mb-3">Certifications</h2>
          <p style={{ color: "#A0A0A0", fontSize: "14px" }}>Credentials &amp; courses I've completed.</p>
        </div>

        <div className="flex items-center gap-4">
          <button
            aria-label="Previous"
            onClick={() => scrollBy(-1)}
            disabled={!canPrev}
            className="transition-smooth hover:!bg-[#3A3A3D] hover:!border-[#3ECFA4]"
            style={{ ...arrowBase, opacity: canPrev ? 1 : 0.3 }}
          >
            <ChevronLeft size={22} />
          </button>

          <div
            ref={scrollerRef}
            style={{
              display: "flex",
              gap: `${GAP}px`,
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              flex: 1,
              paddingBottom: "4px",
            }}
            className="[&::-webkit-scrollbar]:hidden"
          >
            {certificates.map((cert) => (
              <button
                key={cert.id}
                onClick={() => setSelected(cert)}
                className="reveal group transition-smooth text-left glass-cert"
                style={{
                  width: `${CARD_WIDTH}px`,
                  height: "200px",
                  flexShrink: 0,
                  padding: "20px",
                  paddingTop: "23px",
                  position: "relative",
                  overflow: "hidden",
                  scrollSnapAlign: "start",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    backgroundColor: "#3ECFA4",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                  }}
                />
                <div
                  style={{
                    height: "120px",
                    width: "100%",
                    borderRadius: "6px",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {cert.type === "image" ? (
                    <img
                      src={cert.file}
                      alt={cert.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "6px" }}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                      <FileText size={36} color="#3ECFA4" />
                      <div style={{ color: "#A0A0A0", fontSize: "12px" }}>PDF Document</div>
                    </div>
                  )}
                  <div
                    className="opacity-0 group-hover:opacity-100 transition-smooth"
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "rgba(0,0,0,0.45)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Search size={22} color="#3ECFA4" />
                  </div>
                </div>
                <div style={{ minHeight: 0 }}>
                  <div
                    style={{
                      color: "#fff",
                      fontSize: "13px",
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {cert.title}
                  </div>
                  <div style={{ color: "#A0A0A0", fontSize: "12px" }}>{cert.issuer}</div>
                  <div style={{ color: "#A0A0A0", fontSize: "11px" }}>{cert.date}</div>
                </div>
              </button>
            ))}
          </div>

          <button
            aria-label="Next"
            onClick={() => scrollBy(1)}
            disabled={!canNext}
            className="transition-smooth hover:!bg-[#3A3A3D] hover:!border-[#3ECFA4]"
            style={{ ...arrowBase, opacity: canNext ? 1 : 0.3 }}
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {certificates.map((c, i) => (
            <button
              key={c.id}
              aria-label={`Go to certificate ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className="transition-smooth"
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
                backgroundColor: i === activeIndex ? "#3ECFA4" : "#2A2A2D",
              }}
            />
          ))}
        </div>
      </div>

      <CertificateViewer cert={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default CertificationsCarousel;
