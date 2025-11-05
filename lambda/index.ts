import { Hono } from 'hono';
import { handle } from 'hono/aws-lambda';

const app = new Hono()
  .get('/', (c) => {
    return c.text('Hello, World!');
  })
  .get('/:user', (c) => {
    const user = c.req.param('user');
    return c.json({ message: `Hello, ${user}!` });
  });

export const handler = handle(app);
export default app;
