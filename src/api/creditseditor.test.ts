// import supertest from 'supertest';
import creditseditor from './creditseditor';

describe('movie credit /', () => {
  it('should return 200 OK', async () => {
    const editorlist = await creditseditor(286217);
    expect(Array.isArray(editorlist)).toBe(true);
  });
});
