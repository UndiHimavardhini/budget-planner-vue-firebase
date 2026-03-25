import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function RepoCharts({ repos }) {
  const topRepos = repos.slice(0, 5);

  const data = {
    labels: topRepos.map((repo) => repo.name),
    datasets: [
      {
        label: "Stars",
        data: topRepos.map((repo) => repo.stargazers_count),
      },
      {
        label: "Forks",
        data: topRepos.map((repo) => repo.forks_count),
      },
    ],
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Repository Analytics</h2>
      <Bar data={data} />
    </div>
  );
}