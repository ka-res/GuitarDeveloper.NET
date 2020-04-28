export class Extensions {
  public static getActionUrl(serverUrl: string, serviceName: string) {
    const partialName = serviceName.replace('Service', '').toLowerCase() + '/';

    return serverUrl + partialName;
  }
}
