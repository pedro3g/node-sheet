class Cell {
  constructor(protected _value: any) {}

  get value(): string {
    return this._value;
  }
}

export default Cell;
