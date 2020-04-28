export interface IFormResultEventModel {
  editing: boolean;
  needsRefresh: boolean;
  isCorrect: boolean;
  isCancelled: boolean;
  isSuccessful: boolean;
}

export class FormResultEventModel implements IFormResultEventModel {
  public editing: boolean;
  public needsRefresh: boolean;
  public isCorrect: boolean;
  public isCancelled: boolean;
  public isSuccessful: boolean;

  constructor(isCorrect: boolean, isCancelled: boolean) {
    this.isCorrect = isCorrect;
    this.isCancelled = isCancelled;
    this.editing = isCorrect = null || isCorrect === undefined || isCorrect === false;
    this.isSuccessful = isCorrect && !isCancelled;
    this.needsRefresh = this.editing && this.isSuccessful;
  }
}
