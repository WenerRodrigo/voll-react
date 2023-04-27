import { TableContainer } from "@mui/material";
import { Paper } from "@mui/material";
import { Table } from "@mui/material";
import TableHead from "@mui/material/TableHead/TableHead";
import TableRow from "@mui/material/TableRow/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody/TableBody";
import IConsulta from "../../types/IConsulta";
import styled from "@emotion/styled";

const CelulaEstilizada = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    color: "var(--azul-escuro)",
    fontSize: 18,
    fontWeight: 700,
    fontFamily: "var(--fonte-pricipal)",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontFamily: "var(--fonte-pricipal)"
  }
}));

const LinhaEstilizada = styled(TableRow)(() => ({
    [`&:nth-ofotype(odd)`]: {
        backgroundColor: "var(--cinza-claro)",
        align: "rigth"
    }
}))

function Tabela({ consultas }: { consultas: IConsulta[] | null }) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
          <TableHead>
            <TableRow>
              <CelulaEstilizada>Data</CelulaEstilizada>
              <CelulaEstilizada>Horário</CelulaEstilizada>
              <CelulaEstilizada>Profissional</CelulaEstilizada>
              <CelulaEstilizada>Especialidade</CelulaEstilizada>
              <CelulaEstilizada>Paciente</CelulaEstilizada>
              <CelulaEstilizada>Modalidade</CelulaEstilizada>
            </TableRow>
          </TableHead>
          <TableBody>
            {consultas?.map((linha) => {
              return (
                <LinhaEstilizada>
                  <CelulaEstilizada component="th" scope="row">
                    {new Date(linha.data).toLocaleDateString()}
                  </CelulaEstilizada>
                  <CelulaEstilizada>{linha.horario}</CelulaEstilizada>
                  <CelulaEstilizada>{linha.profissional[0].nome}</CelulaEstilizada>
                  <CelulaEstilizada>{linha.profissional[0].especialidade}</CelulaEstilizada>
                  <CelulaEstilizada>{linha.paciente}</CelulaEstilizada>
                  <CelulaEstilizada>{linha.modalidade}</CelulaEstilizada>
                </LinhaEstilizada>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Tabela;
