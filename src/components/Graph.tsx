import { useEffect, useRef } from "react";
import Chart, { ChartOptions, ChartType } from 'chart.js/auto';

const Graph = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const myChart = useRef<Chart>();

  useEffect(() => {
    const myChartRef = chartRef.current?.getContext('2d');

    if (myChart.current) {
      myChart.current.destroy();
    }

    if (myChartRef) {
      myChart.current = new Chart(myChartRef, {
        type: 'line' as ChartType,
        data: {
          labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'],
          datasets: [
            {
              label: 'Ventas',
              data: [12, 19, 8, 15, 2],
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
              label: 'Ventas 2',
              data: [12, 9, 8, 5, 17],
              backgroundColor: 'rgba(70, 110, 192, 0.6)',
            },
          ],
        },
        options: {} as ChartOptions,
      });
    }
  }, []);

  return <canvas ref={chartRef} />;
}

export default Graph