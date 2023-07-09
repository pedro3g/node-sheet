import { describe, expect, it } from 'vitest';
import Cell from '../cell';

describe('Cell', () => {
  it('should have a unique id', () => {
    expect(new Cell('test').getId()).not.toBe(new Cell('test').getId());
  });
});
