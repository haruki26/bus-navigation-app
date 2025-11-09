import { serve } from '@hono/node-server';
import app from './routes';

serve({
  port: 3000,
  fetch: app.fetch,
});
