export function fmtPace(v: number | null) {
  if (!v) return '—';
  const m = Math.floor(v), s = Math.round((v - m) * 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export function movingAvg(data: (number | null)[], n: number) {
  return data.map((_, i) => {
    if (i < n - 1) return null;
    const s = data.slice(i - n + 1, i + 1).filter(v => v !== null) as number[];
    return s.length ? s.reduce((a, b) => a + b, 0) / s.length : null;
  });
}
