export default function ProgressBar({ percent = 0 }) {
  return (
    <div className="w-full bg-white border rounded-full h-3 overflow-hidden" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
      <div
        className="bg-accent-500 h-full transition-all"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
