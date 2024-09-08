import { HistoricoMiddleware } from './historico.middleware';

describe('HistoricoMiddleware', () => {
  it('should be defined', () => {
    expect(new HistoricoMiddleware()).toBeDefined();
  });
});
