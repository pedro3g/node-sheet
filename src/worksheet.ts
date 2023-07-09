import { randomUUID } from 'crypto';

export default class Worksheet {
  private readonly id = randomUUID();

  constructor(private readonly name: string) {}

  getName(): string {
    return this.name;
  }

  getId(): string {
    return this.id;
  }
}
