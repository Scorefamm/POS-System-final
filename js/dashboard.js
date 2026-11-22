const chartCanvas = document.getElementById('salesChart');

if (chartCanvas) {
  const ctx = chartCanvas.getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Sun 15', 'Mon 16', 'Tue 17', 'Wed 18', 'Thu 19', 'Fri 20', 'Today'],
      datasets: [{
        label: 'Sales (Php)',
        data: [1400, 1650, 1580, 1980, 1750, 2200, 1850],
        borderColor: '#7254C9',
        backgroundColor: 'rgba(114, 84, 201, 0.12)',
        borderWidth: 3,
        pointBackgroundColor: '#7254C9',
        pointRadius: 4,
        fill: true,
        tension: 0.2
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, grid: { color: '#EAE8E3' } },
        x: { grid: { display: false } }
      }
    }
  });
}