import api from './discovermovie';

describe('movie credit /', () => {
  it('should return 200 OK', async () => {
    const editorlist = await api.discovermovie('2018');
    expect(Array.isArray(editorlist)).toBe(true);
  });
});