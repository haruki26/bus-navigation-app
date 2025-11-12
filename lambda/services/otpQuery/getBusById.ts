import { Bus } from "../../types"
import { fetchOTP } from "./shared";

const query = `query GtfsExampleQuery ($gtfsId: String!) {
  route (id: $gtfsId) {
    shortName
    longName
    gtfsId
    color
    textColor
  }
}`

interface Response {
    route: Bus;
}

export const getBusById = async (gtfsId: string) =>
  (await fetchOTP<Response>(query, { gtfsId })).route
