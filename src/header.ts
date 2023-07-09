import { randomUUID } from 'crypto';
import Row from './row';

export default class Header {
  private readonly id = randomUUID();
  private readonly rows: Row[] = [];

  constructor(...rows: Row[]) {
    this.rows = rows;
  }
}
