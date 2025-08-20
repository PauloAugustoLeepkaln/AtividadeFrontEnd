export default function Quadro({ children }) {
  return (
    <div
      style={{
        background: "#0b0f16",
        minHeight: "15vh",
        display: "grid",
        placeItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#f5f7f7",
          padding: "28px",
          borderRadius: "8px",
          boxShadow: "0 10px 30px rgba(0,0,0,.35)",
        }}
      >
        {children}
      </div>
    </div>
  );
}