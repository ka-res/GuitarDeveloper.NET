"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var Tools = /** @class */ (function () {
    function Tools() {
    }
    Tools.createControl = function (value) {
        if (value === void 0) { value = null; }
        var control = new forms_1.FormControl();
        if (value !== null) {
            control.setValue(value);
        }
        return control;
    };
    Tools.showTooltip = function (e, tooltipDir) {
        var element = e.target;
        if ((element.nodeName === 'TD' || element.nodeName === 'TH')
            && element.offsetWidth < element.scrollWidth
            && element.innerText.length > 0) {
            tooltipDir.toggle(element);
        }
        else {
            tooltipDir.hide();
        }
    };
    Tools.getVariableName = function (unknownVariable) {
        var hasItems = Object.keys(unknownVariable).length > 0;
        return hasItems
            ? Object.keys(unknownVariable)[0]
            : '';
    };
    Tools.setRadioValue = function (form, controlName, value) {
        form.controls[controlName].setValue(value === 1);
    };
    Tools.boolToCharacter = function (value) {
        return value
            ? '' //U+2713
            : ''; //U+2717
    };
    // TODO przetestowac
    Tools.prepareForm = function (controlsData) {
        var _this = this;
        var formGroup;
        var formBuilder = new forms_1.FormBuilder();
        var formControls = new Array();
        controlsData.forEach(function (x) {
            formControls.push(_this.createControl(x[0]));
        });
        formGroup = formBuilder.group(formControls);
        return formGroup;
    };
    return Tools;
}());
exports.Tools = Tools;
//# sourceMappingURL=tools.js.map