import Column from './column';

class Worksheet {
  protected _pageName: string;
  protected column: Column[] = [];

  constructor(pageName: string) {
    this._pageName = pageName;
  }

  addColumn(column: Column): void {
    this.column.push(column);
  }

  addColumns(columns: Column[]): void {
    this.column = [...this.column, ...columns];
  }

  get pageName(): string {
    return this._pageName;
  }

  get data(): Column[] {
    return this.column;
  }
}

export default Worksheet;
