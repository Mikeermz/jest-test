import {arrayColores, arrayFrutas} from '../arrays';

describe('Existencia de un elemento', () => {
  test('Tiene manzana', () => {
    expect(arrayFrutas()).toContain('manzana');
  });
  test('No contiene pera', () => {
    expect(arrayFrutas()).not.toContain('pera')
  })
  test('No contiene pera', () => {
    expect(arrayFrutas()).toHaveLength(3);
  })
});