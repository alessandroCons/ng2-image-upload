/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
var ImageUploadService = /** @class */ (function () {
    function ImageUploadService(http) {
        this.http = http;
    }
    /**
     * @param {?} url
     * @param {?} image
     * @param {?=} headers
     * @param {?=} partName
     * @param {?=} customFormData
     * @param {?=} withCredentials
     * @return {?}
     */
    ImageUploadService.prototype.uploadImage = /**
     * @param {?} url
     * @param {?} image
     * @param {?=} headers
     * @param {?=} partName
     * @param {?=} customFormData
     * @param {?=} withCredentials
     * @return {?}
     */
    function (url, image, headers, partName, customFormData, withCredentials) {
        if (partName === void 0) { partName = 'image'; }
        var e_1, _a;
        if (!url || url === '') {
            throw new Error('Url is not set! Please set it before doing queries');
        }
        /** @type {?} */
        var formData = new FormData();
        if (customFormData) {
            try {
                for (var _b = tslib_1.__values(Object.keys(customFormData)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    formData.append(key, customFormData[key]);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        formData.append(partName, image);
        return this.http.post(url, formData, { withCredentials: withCredentials, headers: headers, observe: 'response' });
    };
    ImageUploadService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ImageUploadService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    return ImageUploadService;
}());
export { ImageUploadService };
if (false) {
    /** @type {?} */
    ImageUploadService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtdXBsb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1pbWFnZS11cGxvYWQvIiwic291cmNlcyI6WyJsaWIvaW1hZ2UtdXBsb2FkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUE2QixNQUFNLHNCQUFzQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0M7SUFFRSw0QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUNwQyxDQUFDOzs7Ozs7Ozs7O0lBRU0sd0NBQVc7Ozs7Ozs7OztJQUFsQixVQUFtQixHQUFXLEVBQ1gsS0FBVyxFQUNYLE9BQTZELEVBQzdELFFBQTBCLEVBQzFCLGNBQW9ELEVBQ3BELGVBQXlCO1FBRnpCLHlCQUFBLEVBQUEsa0JBQTBCOztRQUczQyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFDdEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1NBQ3ZFOztZQUVLLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRTtRQUUvQixJQUFJLGNBQWMsRUFBRTs7Z0JBQ2xCLEtBQWtCLElBQUEsS0FBQSxpQkFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBLGdCQUFBLDRCQUFFO29CQUExQyxJQUFNLEdBQUcsV0FBQTtvQkFDWixRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDM0M7Ozs7Ozs7OztTQUNGO1FBRUQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFakMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLEVBQUUsZUFBZSxpQkFBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQzFGLENBQUM7O2dCQTFCRixVQUFVOzs7O2dCQUpGLFVBQVU7O0lBK0JuQix5QkFBQztDQUFBLEFBM0JELElBMkJDO1NBMUJZLGtCQUFrQjs7O0lBQ2pCLGtDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VVcGxvYWRTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGxvYWRJbWFnZSh1cmw6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IEZpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgIHBhcnROYW1lOiBzdHJpbmcgPSAnaW1hZ2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICBjdXN0b21Gb3JtRGF0YT86IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgQmxvYiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4ge1xyXG4gICAgaWYgKCF1cmwgfHwgdXJsID09PSAnJykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VybCBpcyBub3Qgc2V0ISBQbGVhc2Ugc2V0IGl0IGJlZm9yZSBkb2luZyBxdWVyaWVzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICBpZiAoY3VzdG9tRm9ybURhdGEpIHtcclxuICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoY3VzdG9tRm9ybURhdGEpKSB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgY3VzdG9tRm9ybURhdGFba2V5XSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQocGFydE5hbWUsIGltYWdlKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBmb3JtRGF0YSwgeyB3aXRoQ3JlZGVudGlhbHMsIGhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==