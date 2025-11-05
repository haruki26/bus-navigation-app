import { serve } from '@hono/node-server';
import app from './index';

serve({
  port: 3000,
  fetch: app.fetch,
});
