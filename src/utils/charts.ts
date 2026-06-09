export const getVar = (name: string) => {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
};

export const baseTooltip = () => ({
  backgroundColor: getVar('--surface'),
  borderColor: getVar('--border'),
  borderWidth: 1,
  titleColor: getVar('--text'),
  bodyColor: getVar('--muted'),
  titleFont: { family: 'Inter', size: 12 },
  bodyFont: { family: 'Inter', size: 11 },
  padding: 10,
});

export const chartOptions = (extra: Record<string, any> = {}) => {
  const { plugins: extraPlugins, scales: extraScales, ...restExtra } = extra;
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { ...baseTooltip(), ...extraPlugins?.tooltip },
      ...extraPlugins,
    },
    scales: {
      x: {
        grid: { color: getVar('--border') },
        ticks: { color: getVar('--muted'), font: { family: 'Inter', size: 10 }, maxTicksLimit: 10 },
        ...extraScales?.x,
      },
      y: {
        grid: { color: getVar('--border') },
        ticks: { color: getVar('--muted'), font: { family: 'Inter', size: 10 } },
        ...extraScales?.y,
      },
    },
    ...restExtra,
  };
};
