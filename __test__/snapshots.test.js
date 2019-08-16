import { getCharacter } from '../snapshots';
import rick from '../rick.json';

describe('Realizando Instantaneas', () => {
  test('Snapshot', () => {
    expect(getCharacter(rick)).toMatchSnapshot();
  });

  test('Siempre va a fallar', () => {
    const user = {
      name: "Mikee Ramirez",
      id: Math.floor(Math.random() * 20)
    }
    expect(user).toMatchSnapshot();
  });
  test('Aceptando excepciones', () => {
    const user = {
      name: "Mikee Ramirez",
      id: Math.floor(Math.random() * 20)
    }
    console.log(user)
    expect(user).toMatchSnapshot({
      id: expect.any(Number)
    });
  });
});