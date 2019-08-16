describe('Comprobar una cade de texto', () => {
  const text = "que bonita es la vida";
  test('Debe contener el siguiente texto', () => {
    expect(text).toMatch(/bonita/);
  })
})