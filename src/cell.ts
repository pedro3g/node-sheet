import { randomUUID } from 'crypto';

export default class Cell {
  private readonly id = randomUUID();

  constructor(private readonly value: string) {}

  getId(): string {
    return this.id;
  }
}
