export class HelperApp {
  public fromGit(uri: string): string {
    return `git:${uri}`;
  }

  public fromUpload(filename: string): string {
    return `upload:${filename}`;
  }
}
