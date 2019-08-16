import { sumar, restar, mult, dividir} from '../math';

describe('Calculos matematicos', () => {
  test('Prueba de sumas', () => {
    expect(sumar(3,1)).toBe(4);
  });
  test('Prueba de restas', () => {
    expect(restar(5,1)).toBe(4);
  });
  test('Prueba de multipliar', () => {
    expect(mult(3,1)).toBe(3);
  });
  test('Prueba de division', () => {
    expect(dividir(20,5)).toBe(4);
  });
});