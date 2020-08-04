// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("pieShape").getContext('2d');
var pieShape = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Black", "White", "Asian"],
    datasets: [{
      backgroundColor: [
        "#f1c40f",
        "#e74c3c",
        "#34495e"
      ],
      data: [49.7, 31,19.3]
    }]
  }
});