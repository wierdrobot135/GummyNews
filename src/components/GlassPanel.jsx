export default function GlassPanel({ children, className = "" }) {
  return (
    <div
      className={`backdrop-blur-2xl bg-white/30 border border-white/40 shadow-xl rounded-3xl ${className}`}
      style={{
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      {children}
    </div>
  );
}
