import { TableContainer } from "@mui/material";
import { Paper } from "@mui/material";
import { Table } from "@mui/material";
import TableHead from "@mui/material/TableHead/TableHead";
import TableRow from "@mui/material/TableRow/TableRow";
import TableCell from "@mui/material/TableCell/TableCell";
import TableBody from "@mui/material/TableBody/TableBody";

function Tabela() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Horário</TableCell>
              <TableCell>Profissional</TableCell>
              <TableCell>Especialidade</TableCell>
              <TableCell>Paciente</TableCell>
              <TableCell>Modalidade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                26/04/2023
              </TableCell>
              <TableCell>19:45</TableCell>
              <TableCell>Wener Rodrigo</TableCell>
              <TableCell>Clinico Geral</TableCell>
              <TableCell>Rodrigo</TableCell>
              <TableCell>Convênio</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Tabela;
