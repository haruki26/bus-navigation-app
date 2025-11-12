import { z } from 'zod';

const busQuerySchema = z.object({
  stopId: z.string().optional(),
}).optional();

export { busQuerySchema };
