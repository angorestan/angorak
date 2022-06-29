import axios from "axios";
// interfaces
import { IAngorakOptions, IResponse } from "./api.interface";

export let Options: IAngorakOptions = {
  endpoint: "",
  auth: {
    username: "",
    password: "",
  },
};

export const setAngorakOptions = (options: IAngorakOptions) => {
  // if options endpoint was not a correct url, throw an error
  if (!options.endpoint.startsWith("http")) {
    throw new Error("Angorak endpoint must be a valid url");
  }
  // if options auth was not a correct object, throw an error
  if (options.auth.username.length == 0 || options.auth.password.length == 0) {
    throw new Error("Angorak auth must be a valid object");
  }

  Options = options;
};

export const APIRequest = async <T = undefined>(
  option: IAPIRequestOption
): Promise<IResponse<T>> => {
  try {
    let headers: any = option.headers
      ? option.headers
      : {
          "Content-Type": "application/json",
        };

    headers["Authorization"] = `Basic ${Buffer.from(
      `${Options.auth.username}:${Options.auth.password}`
    ).toString("base64")}`;

    return (
      await axios({
        method: option.method ?? "GET",
        url: encodeURI(`${Options.endpoint}/api/v1${option.path}`),
        data: option.data,
        headers: headers,
      })
    ).data;
  } catch (error) {
    return Promise.reject(null);
  }
};

export interface IAPIRequestOption {
  path: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  data?: object;
  headers?: object;
}
