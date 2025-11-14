import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { busQuerySchema } from './schemas';
import { getBuses } from '../../services/otpQuery/bus/getBuses';
import { getBusesByStopId } from '../../services/otpQuery/bus/getBusesByStopId';
import { getBusById } from '../../services/otpQuery/bus/getBusById';

const route = new Hono()
  .get('/', zValidator('query', busQuerySchema), async (c) => {
    const query = c.req.valid('query');

    const res = await (async () => {
        if (query === undefined || Object.keys(query).length === 0) {
        return await getBuses();
      }

      if (query.stopId !== undefined && query.stopId !== '') {
        return await getBusesByStopId(query.stopId);
      }

      return [];
    })();

    return c.json({ buses: res });
  })
  .get('/:gtfsId', async (c) => {
    const { gtfsId } = c.req.param();
    const res = await getBusById(gtfsId);
    return c.json({ bus: res });
  });

export default route;
