"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var environment_1 = require("../../environments/environment");
var kendo_angular_tooltip_1 = require("@progress/kendo-angular-tooltip");
var routes_1 = require("./routes");
var angular_notifier_1 = require("angular-notifier");
var notifierOptions_1 = require("../shared/notifications/notifierOptions");
var animations_1 = require("@angular/platform-browser/animations");
var localize_router_1 = require("localize-router");
var localize_router_http_loader_1 = require("localize-router-http-loader");
var kendo_angular_intl_1 = require("@progress/kendo-angular-intl");
var kendo_angular_grid_1 = require("@progress/kendo-angular-grid");
var core_1 = require("@ngx-translate/core");
var customTranslateHttpLoader_1 = require("../shared/locales/customTranslateHttpLoader");
var kendo_angular_inputs_1 = require("@progress/kendo-angular-inputs");
var kendo_angular_buttons_1 = require("@progress/kendo-angular-buttons");
var kendo_angular_dateinputs_1 = require("@progress/kendo-angular-dateinputs");
var kendo_angular_dialog_1 = require("@progress/kendo-angular-dialog");
var kendo_angular_dropdowns_1 = require("@progress/kendo-angular-dropdowns");
var kendo_angular_editor_1 = require("@progress/kendo-angular-editor");
var kendo_angular_layout_1 = require("@progress/kendo-angular-layout");
var kendo_angular_popup_1 = require("@progress/kendo-angular-popup");
var kendo_angular_upload_1 = require("@progress/kendo-angular-upload");
function getDefaultLang() {
    return environment_1.environment.language;
}
exports.getDefaultLang = getDefaultLang;
function getFactory(translateService, location, settings, http) {
    return new localize_router_http_loader_1.LocalizeRouterHttpLoader(translateService, location, settings, http);
}
exports.getFactory = getFactory;
exports.imports = [
    platform_browser_1.BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    kendo_angular_intl_1.IntlModule,
    kendo_angular_grid_1.ExcelModule,
    http_1.HttpClientModule,
    forms_1.FormsModule,
    router_1.RouterModule.forRoot(routes_1.routes),
    core_1.TranslateModule.forRoot({
        loader: {
            provide: core_1.TranslateLoader,
            useFactory: customTranslateHttpLoader_1.createTranslateLoader,
            deps: [http_1.HttpClient]
        }
    }),
    localize_router_1.LocalizeRouterModule.forRoot(routes_1.routes, {
        parser: {
            provide: localize_router_1.LocalizeParser,
            useFactory: getFactory,
            deps: [core_1.TranslateService, common_1.Location, localize_router_1.LocalizeRouterSettings, http_1.HttpClient]
        },
        defaultLangFunction: getDefaultLang
    }),
    forms_1.ReactiveFormsModule,
    angular_notifier_1.NotifierModule.withConfig(notifierOptions_1.customNotifierOptions),
    kendo_angular_inputs_1.InputsModule,
    animations_1.BrowserAnimationsModule,
    kendo_angular_dropdowns_1.DropDownsModule,
    kendo_angular_dateinputs_1.DateInputsModule,
    kendo_angular_buttons_1.ButtonsModule,
    kendo_angular_grid_1.GridModule,
    kendo_angular_dialog_1.WindowModule,
    kendo_angular_dialog_1.DialogsModule,
    kendo_angular_popup_1.PopupModule,
    kendo_angular_upload_1.UploadModule,
    kendo_angular_tooltip_1.TooltipModule,
    kendo_angular_editor_1.EditorModule,
    kendo_angular_layout_1.LayoutModule,
    kendo_angular_layout_1.PanelBarModule
];
//# sourceMappingURL=imports.js.map