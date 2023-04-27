import { ResponsiveContainer } from "recharts";
import { BarChart } from "recharts/types/chart/BarChart";
import { XAxis } from "recharts/types/cartesian/XAxis";
import { YAxis } from "recharts/types/cartesian/YAxis";
import { Bar } from "recharts/types/cartesian/Bar";

function Grafico() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        layout="vertical"
        data={dados}
        margin={{ top: 25, rigth: 40, left: 40, bottom: 20 }}
      >
        <XAxis type="number"></XAxis>
        <YAxis type="category" datakey="nome"></YAxis>
        <Bar datakey="consultas" fill="#083860" barSize={30}></Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Grafico;
