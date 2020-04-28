import { PipeTransform, Pipe } from "@angular/core";
import { Tools } from "./tools";

@Pipe({ name: 'booleanPreview' })
export class BooleanPreviewPipe implements PipeTransform {
  public transform(value: boolean) {
    return Tools.boolToCharacter(value);
  }
}
