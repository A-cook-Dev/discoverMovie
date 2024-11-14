import supertest from 'supertest';
import app from '../src/index';

describe('GET /', () => {
    it('should return 302 redirect', async () => {
        const response = await supertest(app).get('/');
        expect(response.status).toBe(302);
    });
});

describe('GET /api/v1/discovermovie/:year', () => {
    it('should return 400', async () => {
        const response = await supertest(app).get('/api/v1/discovermovie/11111');
        expect(response.status).toBe(400);
    });
});

describe('express server errors', () => {
    it('should return 404 OK', async () => {
        const response = await supertest(app).get('/notfound');
        expect(response.status).toBe(404);
    });
});