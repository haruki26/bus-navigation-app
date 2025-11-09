import { handle } from 'hono/aws-lambda';
import app from './routes'

export const handler = handle(app);
