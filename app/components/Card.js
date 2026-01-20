export default function Card({ highlighted, children }) {
  return (
    <div
      style={{
        padding: "16px",
        marginTop: "12px",
        borderRadius: "10px",
        border: "1px solid #ccc",
        backgroundColor: highlighted ? "#fff7cc" : "#ffffff",
      }}
    >
      {children}
    </div>
  );
}
