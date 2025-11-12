import { Hono } from 'hono';
import busesRoute from './buses'

const app = new Hono()
  .basePath('/api')
  .route('/buses', busesRoute)

export default app;
