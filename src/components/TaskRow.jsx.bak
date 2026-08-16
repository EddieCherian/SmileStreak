import { CheckCircle, Circle } from "lucide-react";

export default function TaskRow({ title, description, completed, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all card focus:outline-none focus:ring-2 focus:ring-accent/20
        ${completed
          ? "opacity-90"
          : ""
        }`}
    >
      {completed ? (
        <CheckCircle className="w-7 h-7 text-accent" />
      ) : (
        <Circle className="w-7 h-7 text-muted" />
      )}

      <div className="flex-1 text-left">
        <p className="font-semibold text">{title}</p>
        <p className="text-sm muted">{description}</p>
      </div>
    </button>
  );
}
