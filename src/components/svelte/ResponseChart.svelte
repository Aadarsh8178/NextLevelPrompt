<script>
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";
  export let response;
  let delayed;
  let chartValues = response.data;
  let chartLabels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  let ctx;
  let chartCanvas;

  onMount(async (promise) => {
    ctx = chartCanvas.getContext("2d");
    new Chart(ctx, {
      type: response?.data?.chartType,
      data: {
        labels: response?.data?.labels,
        datasets: response?.data?.datasets,
      },
      options: {
        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (
              context.type === "data" &&
              context.mode === "default" &&
              !delayed
            ) {
              delay = context.dataIndex * 300 + context.datasetIndex * 100;
            }
            return delay;
          },
        },
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: "#FFFFFF",
            },
          },
        },
        scales: {
          y: {
            ticks: { color: "#FFFFFF", beginAtZero: true },
          },
          x: {
            ticks: { color: "#FFFFFF", beginAtZero: true },
          },
        },
      },
    });
  });
</script>

<canvas
  bind:this={chartCanvas}
  id="myChart"
  style="max-width: calc(100% - 50px);"
/>
