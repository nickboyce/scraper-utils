// Go to the detail page i.e. https://socialblade.com/tiktok/user/busuu/monthly

// Use this code in console
Highcharts.charts.forEach((chart) => {
  let csvLines = ["Date,Y-Value"];
  let dataPoints = [];

  chart.series.forEach((series) => {
    series.data.forEach((point) => {
    // Ensure point.x is a valid timestamp and point.y is a valid value
    if (typeof point.x === 'number' && typeof point.y === 'number') {
      const date = new Date(point.x);
      const formattedDate = date.toISOString().split('T')[0]; // Formats date as "YYYY-MM-DD"
      dataPoints.push({ date: formattedDate, y: point.y });
    }
  });
});

// Sort data points by date in reverse order
dataPoints.sort((a, b) => a.date.localeCompare(b.date));

// Construct CSV lines from the sorted data points
dataPoints.forEach((point) => {
  const csvLine = `${point.date},${point.y}`;
  csvLines.push(csvLine);
});

// Join the lines into a single CSV string
const csvContent = csvLines.join('\n');

// Output the CSV string to the console
console.log(`${chart.title.textStr}:\n${csvContent}`);
});
