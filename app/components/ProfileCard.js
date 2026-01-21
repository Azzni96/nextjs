import styles from "./ProfileCard.module.css";

export default function ProfileCard({ name, role, status }) {
  const borderColor = status === "pro" ? "#f59e0b" : "#d1d5db"; // inline style

  return (
    <div
      className={`${styles.card} p-4 shadow-sm mt-4`} // Tailwind
      style={{ borderColor }} // inline
    >
      <p className={styles.name}>{name}</p> {/* CSS Module */}
      <p className="text-sm text-gray-600">{role}</p> {/* Tailwind */}

      <span
        className={`inline-block mt-2 px-3 py-1 rounded-full text-xs ${
          status === "pro"
            ? "bg-yellow-100 text-yellow-800"
            : "bg-gray-100 text-gray-700"
        }`}
      >
        Status: {status}
      </span>
    </div>
  );
}
