import { DictionaryType } from "./enums";

export class DictionaryHelpers {
  public static getEnumName(value: number) {
    const values = Object.keys(DictionaryType)
      .map(key => DictionaryType[key])
      .filter(value => typeof value === 'string') as string[];
    const result = values[value];

    return result.toLowerCase();
  }
}
