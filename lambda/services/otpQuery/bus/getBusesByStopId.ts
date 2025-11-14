import { Bus } from '../../../types';
import { fetchOTP } from './../shared';

const query = `query getBusesByStopGtfsId($stopId: String!) {
  stop(id: $stopId) {
    routes {
      id: gtfsId
      shortName
      longName
      color
      textColor
    }
  }
}`;

interface Response {
  stop: {
    routes: Bus[];
  };
}

export const getBusesByStopId = async (stopId: string) =>
  (await fetchOTP<Response>(query, { stopId })).stop.routes;
