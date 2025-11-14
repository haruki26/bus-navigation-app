import { fetchOTP } from './shared';
import type { Bus } from '../../types';

const query = `query GetBuses {
  routes {
    id: gtfsId
    shortName
    longName
    color
    textColor
  }
}`;

interface Response {
  routes: Bus[];
}

export const getBuses = async () => (await fetchOTP<Response>(query)).routes;
