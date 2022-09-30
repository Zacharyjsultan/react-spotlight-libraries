import shoe from '../json/shoes.json';
// eslint-disable-next-line
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
// eslint-disable-next-line
import 'rsuite-table/dist/css/rsuite-table.css';

export default function ShoesTable() {
  return (
    <Table data={shoe}>
      <Column width={100}>
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={300}>
        <HeaderCell>shoe</HeaderCell>
        <Cell dataKey="shoe" />
      </Column>

      <Column width={300}>
        <HeaderCell>company</HeaderCell>
        <Cell dataKey="company" />
      </Column>

      <Column width={300}>
        <HeaderCell>color</HeaderCell>
        <Cell dataKey="color" />
      </Column>
    </Table>
  );
}