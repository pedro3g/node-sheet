import Cell from './cell';
import Header from './header';

class Column {
  protected _header: Header;
  protected _cells: Cell[];

  constructor({ header, cells }: { header: Header; cells: Cell[] }) {
    this._header = header;
    this._cells = cells;
  }

  addCell(cell: Cell): void {
    this._cells.push(cell);
  }

  get header(): { header: string; key: string; width: number } {
    return {
      header: this._header.title,
      key: this._header.key,
      width: this._header.width,
    };
  }

  get cells(): Cell[] {
    return this._cells;
  }
}

export default Column;
