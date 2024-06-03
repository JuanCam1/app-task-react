import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import { ProjectCountAdapter, TaskCountAdapter } from "../models/home.models";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface Props {
  label: string;
  data: TaskCountAdapter | ProjectCountAdapter
}

const options = {
  plugins: {
    legend: {
      display: false, 
    },
  },
};

const BarGrap = ({ label, data }: Props) => {

  const colors = ['#a30d26', '#D97706', '#16A34A', '#142ea3'];
  const midata = {
    datasets: [
      {
        label: label,
        data: data,
        backgroundColor: colors
      }
    ]
  };
  return (
    <>
      <h2 className="text-center text-xl font-bold">{label}</h2>
      <Bar data={midata} options={options} />
    </>
  )
}

export default BarGrap