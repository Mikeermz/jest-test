import { numbers } from '../number'

describe('Comparacion de numeros', () => {
  test('Mayor que', () => {
    expect(numbers(2,2)).toBeGreaterThan(2);
  })
  test('Mayor que o igual', () => {
    expect(numbers(2,2)).toBeGreaterThanOrEqual(4);
  })
  test('Menor que o igual', () => {
    expect(numbers(2,2)).not.toBeGreaterThanOrEqual(6);
  })
  test('Menor que', () => {
    expect(numbers(2,2)).toBeLessThan(6);
  })
  test('Menor que o igual', () => {
    expect(numbers(2,2)).toBeLessThanOrEqual(4);
  })
}) 