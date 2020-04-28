export class Helpers {
  public static addDatePartToExportFileName() {
    return new Date().toISOString().slice(0, 10) + '.xlsx';
  }
}
