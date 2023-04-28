import { ResponsiveContainer } from "recharts";
import { BarChart } from "recharts";
import { XAxis } from "recharts";
import { YAxis } from "recharts";
import { Bar } from "recharts";
import IProfissional from "../../types/IProfissional";
import IConsulta from "../../types/IConsulta";
import useDadosGrafico from "./useDadosGrafico";
import styled from "styled-components";

interface Props {
  profissionais: IProfissional[] | null;
  consultas: IConsulta[] | null;
}

interface IDados {
  nome: string;
  consultas: number;
}

const SecaoEstilizada = styled.section`
  background-color: var(--braco);
  border-radius: 16px;
`

function Grafico({ profissonais, consultas }: Props) {
  let dados: Array<IDados> = useDadosGrafico({ profissonais, consultas });
  return (
    <SecaoEstilizada>
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
    </SecaoEstilizada>
  );
}

export default Grafico;
