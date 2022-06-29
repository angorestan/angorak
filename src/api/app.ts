// utils
import { APIRequest } from "../utils/api";
// interfaces
import { IApp, ITraefikConfig } from "./app.interface";

export class APIApp {
  /**
   * Get all apps
   */
  public async all() {
    return await APIRequest<IApp[]>({
      path: "/app",
    });
  }

  /**
   * Get a app by name
   * @param name The name of the app
   */
  public async get(name: string) {
    return await APIRequest<IApp>({
      path: `/app/${name}`,
    });
  }

  /**
   * Get traefik config for a app
   * @param name The name of the app
   */
  public async traefik(name: string) {
    return await APIRequest<ITraefikConfig>({
      path: `/app/${name}/traefik`,
    });
  }

  /**
   * Create a app
   * @param app The app to create
   */
  public async create(app: IApp) {
    return await APIRequest<IApp>({
      path: "/app",
      method: "POST",
      data: app,
    });
  }

  /**
   * Delete a app
   * @param name The name of the app
   */
  public async delete(name: string) {
    return await APIRequest<IApp>({
      path: `/app/${name}`,
      method: "DELETE",
    });
  }
}
