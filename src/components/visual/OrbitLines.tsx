export function OrbitLines() {
  return (
    <svg className="orbit-svg" viewBox="0 0 1440 900" aria-hidden="true">
      <ellipse className="orbit-path" cx="520" cy="430" rx="430" ry="300" />
      <ellipse className="orbit-path" cx="540" cy="420" rx="560" ry="360" />
      <ellipse className="orbit-path" cx="900" cy="360" rx="380" ry="250" />
      <path
        className="orbit-path"
        d="M180 620 C 360 480, 620 500, 820 380 S 1200 220, 1320 300"
      />
      <path
        className="orbit-path"
        d="M80 240 C 280 180, 400 320, 560 280 S 980 120, 1180 210"
      />
    </svg>
  );
}
