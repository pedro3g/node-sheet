import { describe, expect, it } from 'vitest';
import Worksheet from '../worksheet';

describe('Worksheet', () => {
  it('should add a name to the worksheet', () => {
    const worksheet = new Worksheet('test');
    expect(worksheet.getName()).toBe('test');
  });

  it('should generate a unique id for the worksheet', () => {
    const worksheet = new Worksheet('test');
    const worksheet2 = new Worksheet('test');
    expect(worksheet.getId()).not.toBe(worksheet2.getId());
  });
});
