// interface
import { IAngorakOptions } from "./utils/api.interface";
// utils
import { setAngorakOptions } from "./utils/api";
// helper
import { HelperApp } from "./helper/app";
// api
import { APIAuth } from "./api/auth";
import { APIApp } from "./api/app";
import { APIUpload } from "./api/upload";

const auth = new APIAuth();

export class Angorak {
  constructor(options: IAngorakOptions) {
    setAngorakOptions(options);
  }

  public helper = {
    app: new HelperApp(),
  };

  public auth = auth;
  public app: APIApp = new APIApp();
  public upload: APIUpload = new APIUpload();
}
