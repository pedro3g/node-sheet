import { randomUUID } from 'crypto';
import Cell from './cell';

export default class Row {
  private readonly id = randomUUID();
  private readonly cells: Cell[] = [];

  constructor(...cells: Cell[]) {
    this.cells = cells;
  }
}
