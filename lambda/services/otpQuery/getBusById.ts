import { Bus } from "../../types"
import { fetchOTP } from "./shared";

const query = `query GtfsExampleQuery ($gtfsId: String!) {
  route (id: $gtfsId) {
    id: gtfsId
    shortName
    longName
    color
    textColor
  }
}`

interface Response {
    route: Bus;
}

export const getBusById = async (id: string): Promise<Bus> =>
  (await fetchOTP<Response>(query, { gtfsId: id })).route
