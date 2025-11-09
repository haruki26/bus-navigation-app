import { Hono } from 'hono';

const app = new Hono()
  .get('/', (c) => {
    return c.text('Hello, World!');
  })
  .get('/:user', (c) => {
    const user = c.req.param('user');
    return c.json({ message: `Hello, ${user}!` });
  });

export default app;
