export function PlaceholderBadge({ label = "Prototype layout" }: { label?: string }) {
  return <span className="placeholder-flag">{label}</span>;
}
