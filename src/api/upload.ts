// utils
import { APIRequest } from "../utils/api";
// interface
import { IUpload } from "./upload.interface";

export class APIUpload {
  /**
   * Get list of uploaded files of a project
   * @param name project name
   */
  public static async list(name: string) {
    return await APIRequest<IUpload[]>({
      path: `/upload/${name}`,
      method: "GET",
    });
  }

  /**
   * Get uploaded file of a project
   * @param name project name
   * @param id upload id
   */
  public static async get(name: string, id: string) {
    return await APIRequest<IUpload>({
      path: `/upload/${name}/${id}`,
      method: "GET",
    });
  }

  /**
   * Delete uploaded file of a project
   * @param name project name
   * @param id upload id
   */
  public static async delete(name: string, id: string) {
    return await APIRequest({
      path: `/upload/${name}/${id}`,
      method: "DELETE",
    });
  }

  /**
   * Prune uploaded files of a project
   * @param name project name
   */
  public static async prune(name: string) {
    return await APIRequest<IUpload[]>({
      path: `/upload/${name}/prune`,
      method: "POST",
    });
  }

  /**
   * Upload a file to a project
   * @param name project name
   * @param file file to upload
   */
  public static async upload(name: string, file: File) {
    // upload file with axios
    const formData = new FormData();
    formData.append("source", file);
    return await APIRequest<IUpload>({
      path: `/upload/${name}`,
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}
