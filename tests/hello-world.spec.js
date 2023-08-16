const request = require('supertest');

describe('Minha primeira suíte de testes', () => {
  it('Hello world - Jest', () => {
    expect(1 + 1).toBe(2);
  });

  it.skip('Hello world - Teste Pendente de ajuste', async() => {
    await request('https://www.thunderclient.com').get('/welcome').expect(201);
  });

  it.todo('Exemplo de teste a ser feito');
});
