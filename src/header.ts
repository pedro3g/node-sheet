import { randomBytes } from 'node:crypto';

class Header {
  protected _key: string;
  protected _title: string;
  protected _width: number;

  constructor({ title, width }: { title: string; width?: number }) {
    this._key = randomBytes(8).toString('hex');
    this._title = title;
    this._width = width ?? 20;
  }

  get key(): string {
    return this._key;
  }

  get title(): string {
    return this._title;
  }

  get width(): number {
    return this._width;
  }
}

export default Header;
