// utils
import { APIRequest } from "../utils/api";
// interface
import { IAuthUser } from "./auth.interface";

export class APIAuth {
  constructor() {}
  /**
   * Login to angor root account
   */
  public async login(username: string, password: string) {
    return await APIRequest<IAuthUser>({
      path: "/auth/login",
      method: "POST",
      data: {
        username,
        password,
      },
    });
  }

  /**
   * Change angor root account username and password
   */
  public async change(username: string, password: string) {
    return await APIRequest<IAuthUser>({
      path: "/auth/change",
      method: "POST",
      data: {
        username,
        password,
      },
    });
  }
}
