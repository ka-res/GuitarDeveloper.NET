"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormResultEventModel = /** @class */ (function () {
    function FormResultEventModel(isCorrect, isCancelled) {
        this.isCorrect = isCorrect;
        this.isCancelled = isCancelled;
        this.editing = isCorrect = null || isCorrect === undefined || isCorrect === false;
        this.isSuccessful = isCorrect && !isCancelled;
        this.needsRefresh = this.editing && this.isSuccessful;
    }
    return FormResultEventModel;
}());
exports.FormResultEventModel = FormResultEventModel;
//# sourceMappingURL=formResultEventModel.js.map