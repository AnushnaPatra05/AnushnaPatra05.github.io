import { useEffect, useState } from "react";

const PageLoader = () => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const fadeTimer = setTimeout(() => setFading(true), 2000);
    const removeTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = prevOverflow || "auto";
    }, 2400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = prevOverflow || "auto";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        backgroundColor: "#1C1C1E",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        opacity: fading ? 0 : 1,
        transition: "opacity 400ms ease",
      }}
    >
      <div
        className="gradient-text"
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: "64px",
          fontWeight: 800,
          letterSpacing: "-0.02em",
        }}
      >
        AP
      </div>
      <div
        style={{
          width: "200px",
          height: "2px",
          background: "rgba(255,255,255,0.08)",
          borderRadius: "999px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "0%",
            background: "linear-gradient(90deg, #3ECFA4, #a855f7)",
            borderRadius: "999px",
            animation: "progressBar 1.8s ease-out forwards",
          }}
        />
      </div>
    </div>
  );
};

export default PageLoader;
