export default function AchievementCard({ title, description }) {
  return (
    <div className="card p-4">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="muted text-sm">{description}</p>
    </div>
  );
}
