import { Column as ExternalColum } from 'exceljs';

interface Column extends ExternalColum {}
interface Row {
  [key: string]: any;
}

class Worksheet {
  protected _columns: Array<Partial<Column>> = [];
  protected _rows: Row[] = [];

  constructor(protected _pageName: string) {}

  public setColumns(data: Array<Partial<Column>>): void {
    this._columns = data;
  }

  public addRow(row: Row): void {
    this._rows.push(row);
  }

  get pageName(): string {
    return this._pageName;
  }

  get columns(): Array<Partial<Column>> {
    return this._columns;
  }

  get rows(): Row[] {
    return this._rows;
  }
}

export default Worksheet;
