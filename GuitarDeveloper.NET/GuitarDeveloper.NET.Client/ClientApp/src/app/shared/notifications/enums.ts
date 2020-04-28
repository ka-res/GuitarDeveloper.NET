export enum NotifierMode {
  Info,
  Stat,
  Success,
  Warning,
  Error
}

export const notifierModeDescription = new Map<number, string>([
  [NotifierMode.Info, 'info'],
  [NotifierMode.Stat, 'stat'],
  [NotifierMode.Success, 'success'],
  [NotifierMode.Warning, 'warn'],
  [NotifierMode.Error, 'error']
]);

export enum DataGetMode {
  Obtained,
  Refreshed,
  Researched,
  NoData
}
