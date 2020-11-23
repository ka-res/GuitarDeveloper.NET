"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
var DictionaryHelpers = /** @class */ (function () {
    function DictionaryHelpers() {
    }
    DictionaryHelpers.getEnumName = function (value) {
        var values = Object.keys(enums_1.DictionaryType)
            .map(function (key) { return enums_1.DictionaryType[key]; })
            .filter(function (value) { return typeof value === 'string'; });
        var result = values[value];
        return result.toLowerCase();
    };
    return DictionaryHelpers;
}());
exports.DictionaryHelpers = DictionaryHelpers;
//# sourceMappingURL=dictionaryHelpers.js.map