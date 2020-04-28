"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Extensions = /** @class */ (function () {
    function Extensions() {
    }
    Extensions.getActionUrl = function (serverUrl, serviceName) {
        var partialName = serviceName.replace('Service', '').toLowerCase() + '/';
        return serverUrl + partialName;
    };
    return Extensions;
}());
exports.Extensions = Extensions;
//# sourceMappingURL=extensions.js.map