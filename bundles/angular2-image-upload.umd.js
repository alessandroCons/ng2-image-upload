(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('angular2-image-upload', ['exports', '@angular/core', '@angular/common/http', '@angular/common'], factory) :
    (factory((global['angular2-image-upload'] = {}),global.ng.core,global.ng.common.http,global.ng.common));
}(this, (function (exports,core,http,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var FileDropDirective = /** @class */ (function () {
        function FileDropDirective() {
            this.fileOver = new core.EventEmitter();
            this.fileDrop = new core.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        FileDropDirective.getDataTransfer = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
            };
        /**
         * @param {?} types
         * @return {?}
         */
        FileDropDirective.hasFiles = /**
         * @param {?} types
         * @return {?}
         */
            function (types) {
                if (!types) {
                    return false;
                }
                if (types.indexOf) {
                    return types.indexOf('Files') !== -1;
                }
                if (types.contains) {
                    return types.contains('Files');
                }
                return false;
            };
        /**
         * @param {?} rule
         * @param {?} candidate
         * @return {?}
         */
        FileDropDirective.matchRule = /**
         * @param {?} rule
         * @param {?} candidate
         * @return {?}
         */
            function (rule, candidate) {
                return new RegExp('^' + rule.split('*').join('.*') + '$').test(candidate);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        FileDropDirective.prototype.onDrop = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var dataTransfer = FileDropDirective.getDataTransfer(event);
                if (!FileDropDirective.hasFiles(dataTransfer.types)) {
                    return;
                }
                event.preventDefault();
                /** @type {?} */
                var files = this.filterFiles(dataTransfer.files);
                event.preventDefault();
                this.fileOver.emit(false);
                this.fileDrop.emit(files);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        FileDropDirective.prototype.onDragLeave = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.fileOver.emit(false);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        FileDropDirective.prototype.onDragOver = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var dataTransfer = FileDropDirective.getDataTransfer(event);
                if (!FileDropDirective.hasFiles(dataTransfer.types)) {
                    return;
                }
                dataTransfer.dropEffect = 'copy';
                event.preventDefault();
                this.fileOver.emit(true);
            };
        /**
         * @param {?} files
         * @return {?}
         */
        FileDropDirective.prototype.filterFiles = /**
         * @param {?} files
         * @return {?}
         */
            function (files) {
                if (!this.accept || this.accept.length === 0) {
                    return files;
                }
                /** @type {?} */
                var acceptedFiles = [];
                for (var i = 0; i < files.length; i++) {
                    for (var j = 0; j < this.accept.length; j++) {
                        if (FileDropDirective.matchRule(this.accept[j], files[i].type)) {
                            acceptedFiles.push(files[i]);
                            break;
                        }
                    }
                }
                return acceptedFiles;
            };
        FileDropDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[fileDrop]'
                    },] }
        ];
        FileDropDirective.propDecorators = {
            accept: [{ type: core.Input }],
            fileOver: [{ type: core.Output }],
            fileDrop: [{ type: core.Output }],
            onDrop: [{ type: core.HostListener, args: ['drop', ['$event'],] }],
            onDragLeave: [{ type: core.HostListener, args: ['dragleave', ['$event'],] }],
            onDragOver: [{ type: core.HostListener, args: ['dragover', ['$event'],] }]
        };
        return FileDropDirective;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var ImageUploadService = /** @class */ (function () {
        function ImageUploadService(http$$1) {
            this.http = http$$1;
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
                if (partName === void 0) {
                    partName = 'image';
                }
                var e_1, _a;
                if (!url || url === '') {
                    throw new Error('Url is not set! Please set it before doing queries');
                }
                /** @type {?} */
                var formData = new FormData();
                if (customFormData) {
                    try {
                        for (var _b = __values(Object.keys(customFormData)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var key = _c.value;
                            formData.append(key, customFormData[key]);
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return))
                                _a.call(_b);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                }
                formData.append(partName, image);
                return this.http.post(url, formData, { withCredentials: withCredentials, headers: headers, observe: 'response' });
            };
        ImageUploadService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ImageUploadService.ctorParameters = function () {
            return [
                { type: http.HttpClient }
            ];
        };
        return ImageUploadService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var FileHolder = /** @class */ (function () {
        function FileHolder(src, file) {
            this.src = src;
            this.file = file;
            this.pending = false;
        }
        return FileHolder;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var ImageUploadComponent = /** @class */ (function () {
        function ImageUploadComponent(imageService) {
            var _this = this;
            this.imageService = imageService;
            this.files = [];
            this.fileCounter = 0;
            this.fileOver = false;
            this.showFileTooLargeMessage = false;
            this.beforeUpload = function (metadata) { return metadata; };
            this.buttonCaption = 'Select Images';
            this.disabled = false;
            this.cssClass = 'img-ul';
            this.clearButtonCaption = 'Clear';
            this.dropBoxMessage = 'Drop your images here!';
            this.max = 100;
            this.preview = true;
            this.withCredentials = false;
            this.uploadedFiles = [];
            this.removed = new core.EventEmitter();
            this.uploadStateChanged = new core.EventEmitter();
            this.uploadFinished = new core.EventEmitter();
            this.previewClicked = new core.EventEmitter();
            this.pendingFilesCounter = 0;
            this.onFileOver = function (isOver) { return _this.fileOver = isOver; };
        }
        /**
         * @return {?}
         */
        ImageUploadComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (!this.fileTooLargeMessage) {
                    this.fileTooLargeMessage = 'An image was too large and was not uploaded.' + (this.maxFileSize ? (' The maximum file size is ' + this.maxFileSize / 1024) + 'KiB.' : '');
                }
                this.supportedExtensions = this.supportedExtensions ? this.supportedExtensions.map(function (ext) { return 'image/' + ext; }) : ['image/*'];
            };
        /**
         * @return {?}
         */
        ImageUploadComponent.prototype.deleteAll = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.files.forEach(function (f) { return _this.removed.emit(f); });
                this.files = [];
                this.fileCounter = 0;
                if (this.inputElement) {
                    this.inputElement.nativeElement.value = '';
                }
            };
        /**
         * @param {?} file
         * @return {?}
         */
        ImageUploadComponent.prototype.deleteFile = /**
         * @param {?} file
         * @return {?}
         */
            function (file) {
                /** @type {?} */
                var index = this.files.indexOf(file);
                this.files.splice(index, 1);
                this.fileCounter--;
                if (this.inputElement) {
                    this.inputElement.nativeElement.value = '';
                }
                this.removed.emit(file);
            };
        /**
         * @param {?} file
         * @return {?}
         */
        ImageUploadComponent.prototype.previewFileClicked = /**
         * @param {?} file
         * @return {?}
         */
            function (file) {
                this.previewClicked.emit(file);
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        ImageUploadComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.uploadedFiles && changes.uploadedFiles.currentValue.length > 0) {
                    this.processUploadedFiles();
                }
            };
        /**
         * @param {?} files
         * @return {?}
         */
        ImageUploadComponent.prototype.onFileChange = /**
         * @param {?} files
         * @return {?}
         */
            function (files) {
                if (this.disabled)
                    return;
                /** @type {?} */
                var remainingSlots = this.max - this.fileCounter;
                /** @type {?} */
                var filesToUploadNum = files.length > remainingSlots ? remainingSlots : files.length;
                if (this.url && filesToUploadNum !== 0) {
                    this.uploadStateChanged.emit(true);
                }
                this.fileCounter += filesToUploadNum;
                this.showFileTooLargeMessage = false;
                this.uploadFiles(files, filesToUploadNum);
            };
        /**
         * @param {?} response
         * @param {?} fileHolder
         * @return {?}
         */
        ImageUploadComponent.prototype.onResponse = /**
         * @param {?} response
         * @param {?} fileHolder
         * @return {?}
         */
            function (response, fileHolder) {
                fileHolder.serverResponse = { status: response.status, response: response };
                fileHolder.pending = false;
                this.uploadFinished.emit(fileHolder);
                if (--this.pendingFilesCounter === 0) {
                    this.uploadStateChanged.emit(false);
                }
            };
        /**
         * @return {?}
         */
        ImageUploadComponent.prototype.processUploadedFiles = /**
         * @return {?}
         */
            function () {
                for (var i = 0; i < this.uploadedFiles.length; i++) {
                    /** @type {?} */
                    var data = this.uploadedFiles[i];
                    /** @type {?} */
                    var fileBlob = void 0;
                    /** @type {?} */
                    var file = void 0;
                    /** @type {?} */
                    var fileUrl = void 0;
                    if (data instanceof Object) {
                        fileUrl = data.url;
                        fileBlob = (data.blob) ? data.blob : new Blob([data]);
                        file = new File([fileBlob], data.fileName);
                    }
                    else {
                        fileUrl = data;
                        fileBlob = new Blob([fileUrl]);
                        file = new File([fileBlob], fileUrl);
                    }
                    this.files.push(new FileHolder(fileUrl, file));
                }
            };
        /**
         * @param {?} files
         * @param {?} filesToUploadNum
         * @return {?}
         */
        ImageUploadComponent.prototype.uploadFiles = /**
         * @param {?} files
         * @param {?} filesToUploadNum
         * @return {?}
         */
            function (files, filesToUploadNum) {
                return __awaiter(this, void 0, void 0, function () {
                    var _loop_1, this_1, i;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _loop_1 = function (i) {
                                    var file, beforeUploadResult, img, reader;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                file = files[i];
                                                if (this_1.maxFileSize && file.size > this_1.maxFileSize) {
                                                    this_1.fileCounter--;
                                                    this_1.inputElement.nativeElement.value = '';
                                                    this_1.showFileTooLargeMessage = true;
                                                    this_1.uploadStateChanged.emit(false);
                                                    return [2 /*return*/, "continue"];
                                                }
                                                return [4 /*yield*/, this_1.beforeUpload({ file: file, url: this_1.url, abort: false })];
                                            case 1:
                                                beforeUploadResult = _a.sent();
                                                if (beforeUploadResult.abort) {
                                                    this_1.fileCounter--;
                                                    this_1.inputElement.nativeElement.value = '';
                                                    return [2 /*return*/, "continue"];
                                                }
                                                img = ( /** @type {?} */(document.createElement('img')));
                                                img.src = window.URL.createObjectURL(beforeUploadResult.file);
                                                reader = new FileReader();
                                                reader.addEventListener('load', function (event) {
                                                    /** @type {?} */
                                                    var fileHolder = new FileHolder(event.target.result, beforeUploadResult.file);
                                                    _this.files.push(fileHolder);
                                                    _this.uploadSingleFile(fileHolder, beforeUploadResult.url, beforeUploadResult.formData);
                                                }, false);
                                                reader.readAsDataURL(beforeUploadResult.file);
                                                return [2 /*return*/];
                                        }
                                    });
                                };
                                this_1 = this;
                                i = 0;
                                _a.label = 1;
                            case 1:
                                if (!(i < filesToUploadNum))
                                    return [3 /*break*/, 4];
                                return [5 /*yield**/, _loop_1(i)];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3:
                                i++;
                                return [3 /*break*/, 1];
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @param {?} fileHolder
         * @param {?=} url
         * @param {?=} customForm
         * @return {?}
         */
        ImageUploadComponent.prototype.uploadSingleFile = /**
         * @param {?} fileHolder
         * @param {?=} url
         * @param {?=} customForm
         * @return {?}
         */
            function (fileHolder, url, customForm) {
                var _this = this;
                if (url === void 0) {
                    url = this.url;
                }
                if (url) {
                    this.pendingFilesCounter++;
                    fileHolder.pending = true;
                    this.imageService
                        .uploadImage(url, fileHolder.file, this.headers, this.partName, customForm, this.withCredentials)
                        .subscribe(function (response) { return _this.onResponse(response, fileHolder); }, function (error) {
                        _this.onResponse(error, fileHolder);
                        _this.deleteFile(fileHolder);
                    });
                }
                else {
                    this.uploadFinished.emit(fileHolder);
                }
            };
        ImageUploadComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'image-upload',
                        template: "<div\r\n     fileDrop\r\n     [accept]=\"supportedExtensions\"\r\n     (fileOver)=\"onFileOver($event)\"\r\n     (fileDrop)=\"onFileChange($event)\"\r\n     [ngClass]=\"cssClass\"\r\n     [ngClass]=\"{'img-ul-file-is-over': fileOver}\"     \r\n     [ngStyle]=\"style?.layout\"\r\n>\r\n  <div class=\"img-ul-file-upload img-ul-hr-inline-group\">    \r\n    <label *ngIf=\"fileCounter != max\"\r\n      class=\"img-ul-upload img-ul-button\" \r\n      [ngStyle]=\"style?.selectButton\"\r\n      [ngClass]=\"{'img-ul-disabled': disabled}\">\r\n      <span [innerText]=\"buttonCaption\"></span>\r\n      <input\r\n        type=\"file\"\r\n        [disabled]=\"disabled\"\r\n        [accept]=\"supportedExtensions\"\r\n        multiple (change)=\"onFileChange(input.files)\"\r\n        #input>\r\n    </label>\r\n    <button *ngIf=\"fileCounter > 0\"\r\n      [disabled]=\"disabled\"\r\n      class=\"img-ul-clear img-ul-button\" \r\n      (click)=\"deleteAll()\" \r\n      [ngStyle]=\"style?.clearButton\"\r\n      [innerText]=\"clearButtonCaption\">\r\n    </button>\r\n    <div class=\"img-ul-drag-box-msg\" [innerText]=\"dropBoxMessage\"></div>\r\n  </div>\r\n\r\n  <p class=\"img-ul-file-too-large\" *ngIf=\"showFileTooLargeMessage\" [innerText]=\"fileTooLargeMessage\"></p>\r\n\r\n  <div *ngIf=\"preview\" class=\"img-ul-container img-ul-hr-inline-group\" [ngStyle]=\"style?.previewPanel\">\r\n    <div\r\n      class=\"img-ul-image\"\r\n      *ngFor=\"let file of files\"\r\n      (click)=\"previewFileClicked(file)\"\r\n      [ngStyle]=\"{'background-image': 'url('+ file.src +')'}\"\r\n    >\r\n      <div *ngIf=\"file.pending\" class=\"img-ul-loading-overlay\">\r\n        <div class=\"img-ul-spinning-circle\"></div>\r\n      </div>\r\n      <div *ngIf=\"!file.pending\" \r\n        [ngClass]=\"{'img-ul-disabled': disabled}\" \r\n        class=\"img-ul-x-mark\" \r\n        (click)=\"deleteFile(file)\">\r\n        <span class=\"img-ul-close\"></span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                        styles: [".img-ul{--active-color:#3C9;--common-radius:3px;background-color:#f8f8f8;border-radius:var(--common-radius);border:1px dashed #d0d0d0;font-family:sans-serif;position:relative;color:#9b9b9b}.img-ul-file-is-over{border:var(--active-color) solid}.img-ul-hr-inline-group:after{clear:both;content:\"\";display:table}.img-ul-file-upload{padding:16px}.img-ul-drag-box-msg{display:inline-block;font-weight:600;margin-left:12px;padding-top:14px}label.img-ul-button input[type=file]{display:none;position:fixed;top:-99999px}.img-ul-clear{background-color:red}.img-ul-clear:disabled{background-color:#ff6464;cursor:default}.img-ul-upload{background-color:var(--active-color)}.img-ul-button{-moz-box-shadow:2px 2px 4px 0 rgba(148,148,148,.6);-webkit-box-shadow:2px 2px 4px 0 rgba(148,148,148,.6);border:none;box-shadow:2px 2px 4px 0 rgba(148,148,148,.6);color:#fff;cursor:pointer;display:inline-block;float:left;font-size:1.25em;font-weight:500;padding:10px;text-transform:uppercase}.img-ul-button:active span{display:block;position:relative;top:1px}.img-ul-container{background-color:#fdfdfd;padding:0 10px}.img-ul-image{background:center center/contain no-repeat;display:inline-block;float:left;height:86px;margin:6px;position:relative;width:86px}.img-ul-x-mark{background-color:#000;border-radius:2px;color:#fff;cursor:pointer;float:right;height:20px;margin:2px;opacity:.7;text-align:center;width:20px}.img-ul-close{height:20px;opacity:.7;padding-right:3px;position:relative;width:20px}.img-ul-x-mark:hover .img-ul-close{opacity:1}.img-ul-close:after,.img-ul-close:before{background-color:#fff;border-radius:2px;content:'';height:15px;position:absolute;top:0;width:2px}.img-ul-close:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.img-ul-close:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.img-ul-x-mark.img-ul-disabled{display:none}.img-ul-loading-overlay{background-color:#000;bottom:0;left:0;opacity:.7;position:absolute;right:0;top:0}.img-ul-spinning-circle{height:30px;width:30px;margin:auto;position:absolute;top:0;left:0;bottom:0;right:0;border-radius:50%;border:3px solid rgba(255,255,255,0);border-top:3px solid #fff;border-right:3px solid #fff;-webkit-animation:2s cubic-bezier(.085,.625,.855,.36) infinite spinner;animation:2s cubic-bezier(.085,.625,.855,.36) infinite spinner}.img-ul-file-too-large{color:red;padding:0 15px}.img-ul-upload.img-ul-disabled{background-color:#86e9c9;cursor:default}.img-ul-upload.img-ul-disabled:active span{top:0}@-webkit-keyframes spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]
                    }] }
        ];
        /** @nocollapse */
        ImageUploadComponent.ctorParameters = function () {
            return [
                { type: ImageUploadService }
            ];
        };
        ImageUploadComponent.propDecorators = {
            beforeUpload: [{ type: core.Input }],
            buttonCaption: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            cssClass: [{ type: core.Input, args: ['class',] }],
            clearButtonCaption: [{ type: core.Input }],
            dropBoxMessage: [{ type: core.Input }],
            fileTooLargeMessage: [{ type: core.Input }],
            headers: [{ type: core.Input }],
            max: [{ type: core.Input }],
            maxFileSize: [{ type: core.Input }],
            preview: [{ type: core.Input }],
            partName: [{ type: core.Input }],
            style: [{ type: core.Input }],
            supportedExtensions: [{ type: core.Input, args: ['extensions',] }],
            url: [{ type: core.Input }],
            withCredentials: [{ type: core.Input }],
            uploadedFiles: [{ type: core.Input }],
            removed: [{ type: core.Output }],
            uploadStateChanged: [{ type: core.Output }],
            uploadFinished: [{ type: core.Output }],
            previewClicked: [{ type: core.Output }],
            inputElement: [{ type: core.ViewChild, args: ['input',] }]
        };
        return ImageUploadComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var ImageUploadModule = /** @class */ (function () {
        function ImageUploadModule() {
        }
        /**
         * @return {?}
         */
        ImageUploadModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: ImageUploadModule,
                    providers: [ImageUploadService]
                };
            };
        ImageUploadModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [
                            ImageUploadComponent,
                            FileDropDirective
                        ],
                        exports: [ImageUploadComponent]
                    },] }
        ];
        return ImageUploadModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.ImageUploadModule = ImageUploadModule;
    exports.ImageUploadComponent = ImageUploadComponent;
    exports.FileHolder = FileHolder;
    exports.ɵb = FileDropDirective;
    exports.ɵa = ImageUploadService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjItaW1hZ2UtdXBsb2FkLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYW5ndWxhcjItaW1hZ2UtdXBsb2FkL2xpYi9maWxlLWRyb3AuZGlyZWN0aXZlLnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vYW5ndWxhcjItaW1hZ2UtdXBsb2FkL2xpYi9pbWFnZS11cGxvYWQuc2VydmljZS50cyIsIm5nOi8vYW5ndWxhcjItaW1hZ2UtdXBsb2FkL2xpYi9maWxlLWhvbGRlci50cyIsIm5nOi8vYW5ndWxhcjItaW1hZ2UtdXBsb2FkL2xpYi9pbWFnZS11cGxvYWQvaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhcjItaW1hZ2UtdXBsb2FkL2xpYi9pbWFnZS11cGxvYWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2ZpbGVEcm9wXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbGVEcm9wRGlyZWN0aXZlIHtcclxuICBASW5wdXQoKSBhY2NlcHQ6IHN0cmluZ1tdO1xyXG4gIEBPdXRwdXQoKSBmaWxlT3ZlcjogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSBmaWxlRHJvcDogRXZlbnRFbWl0dGVyPEZpbGVMaXN0PiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZUxpc3Q+KCk7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGdldERhdGFUcmFuc2ZlcihldmVudDogYW55KTogRGF0YVRyYW5zZmVyIHtcclxuICAgIHJldHVybiBldmVudC5kYXRhVHJhbnNmZXIgPyBldmVudC5kYXRhVHJhbnNmZXIgOiBldmVudC5vcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2ZlcjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGhhc0ZpbGVzKHR5cGVzOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmICghdHlwZXMpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlcy5pbmRleE9mKSB7XHJcbiAgICAgIHJldHVybiB0eXBlcy5pbmRleE9mKCdGaWxlcycpICE9PSAtMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZXMuY29udGFpbnMpIHtcclxuICAgICAgcmV0dXJuIHR5cGVzLmNvbnRhaW5zKCdGaWxlcycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIG1hdGNoUnVsZShydWxlOiBzdHJpbmcsIGNhbmRpZGF0ZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cCgnXicgKyBydWxlLnNwbGl0KCcqJykuam9pbignLionKSArICckJykudGVzdChjYW5kaWRhdGUpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXHJcbiAgb25Ecm9wKGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IGRhdGFUcmFuc2ZlciA9IEZpbGVEcm9wRGlyZWN0aXZlLmdldERhdGFUcmFuc2ZlcihldmVudCk7XHJcblxyXG4gICAgaWYgKCFGaWxlRHJvcERpcmVjdGl2ZS5oYXNGaWxlcyhkYXRhVHJhbnNmZXIudHlwZXMpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5maWx0ZXJGaWxlcyhkYXRhVHJhbnNmZXIuZmlsZXMpO1xyXG5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmZpbGVPdmVyLmVtaXQoZmFsc2UpO1xyXG4gICAgdGhpcy5maWxlRHJvcC5lbWl0KGZpbGVzKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIFsnJGV2ZW50J10pXHJcbiAgb25EcmFnTGVhdmUoZXZlbnQpIHtcclxuICAgIHRoaXMuZmlsZU92ZXIuZW1pdChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pXHJcbiAgb25EcmFnT3ZlcihldmVudDogYW55KSB7XHJcbiAgICBjb25zdCBkYXRhVHJhbnNmZXIgPSBGaWxlRHJvcERpcmVjdGl2ZS5nZXREYXRhVHJhbnNmZXIoZXZlbnQpO1xyXG5cclxuICAgIGlmICghRmlsZURyb3BEaXJlY3RpdmUuaGFzRmlsZXMoZGF0YVRyYW5zZmVyLnR5cGVzKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSc7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5maWxlT3Zlci5lbWl0KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaWx0ZXJGaWxlcyhmaWxlczogRmlsZUxpc3QpOiBhbnkge1xyXG4gICAgaWYgKCF0aGlzLmFjY2VwdCB8fCB0aGlzLmFjY2VwdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIGZpbGVzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjY2VwdGVkRmlsZXM6IEZpbGVbXSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmFjY2VwdC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGlmIChGaWxlRHJvcERpcmVjdGl2ZS5tYXRjaFJ1bGUodGhpcy5hY2NlcHRbal0sIGZpbGVzW2ldLnR5cGUpKSB7XHJcbiAgICAgICAgICBhY2NlcHRlZEZpbGVzLnB1c2goZmlsZXNbaV0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFjY2VwdGVkRmlsZXM7XHJcbiAgfVxyXG59XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVVwbG9hZFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwbG9hZEltYWdlKHVybDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICBpbWFnZTogRmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSxcclxuICAgICAgICAgICAgICAgICAgICAgcGFydE5hbWU6IHN0cmluZyA9ICdpbWFnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUZvcm1EYXRhPzogeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBCbG9iIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PiB7XHJcbiAgICBpZiAoIXVybCB8fCB1cmwgPT09ICcnKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVXJsIGlzIG5vdCBzZXQhIFBsZWFzZSBzZXQgaXQgYmVmb3JlIGRvaW5nIHF1ZXJpZXMnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgIGlmIChjdXN0b21Gb3JtRGF0YSkge1xyXG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhjdXN0b21Gb3JtRGF0YSkpIHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCBjdXN0b21Gb3JtRGF0YVtrZXldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcm1EYXRhLmFwcGVuZChwYXJ0TmFtZSwgaW1hZ2UpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIGZvcm1EYXRhLCB7IHdpdGhDcmVkZW50aWFscywgaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVIb2xkZXIge1xyXG4gIHB1YmxpYyBwZW5kaW5nID0gZmFsc2U7XHJcbiAgcHVibGljIHNlcnZlclJlc3BvbnNlOiB7IHN0YXR1czogbnVtYmVyLCByZXNwb25zZTogSHR0cFJlc3BvbnNlPGFueT4gfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHNyYzogc3RyaW5nLCBwdWJsaWMgZmlsZTogRmlsZSkge1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWxlSG9sZGVyIH0gZnJvbSAnLi4vZmlsZS1ob2xkZXInO1xyXG5pbXBvcnQgeyBJbWFnZVVwbG9hZFNlcnZpY2UgfSBmcm9tICcuLi9pbWFnZS11cGxvYWQuc2VydmljZSc7XHJcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSAnLi4vc3R5bGUnO1xyXG5pbXBvcnQgeyBVcGxvYWRNZXRhZGF0YSB9IGZyb20gJy4uL3VwbG9hZC1tZXRhZGF0YSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ltYWdlLXVwbG9hZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLXVwbG9hZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VVcGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgZmlsZXM6IEZpbGVIb2xkZXJbXSA9IFtdO1xyXG4gIGZpbGVDb3VudGVyID0gMDtcclxuICBmaWxlT3ZlciA9IGZhbHNlO1xyXG4gIHNob3dGaWxlVG9vTGFyZ2VNZXNzYWdlID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIGJlZm9yZVVwbG9hZDogKG1ldGFkYXRhOiBVcGxvYWRNZXRhZGF0YSkgPT4gVXBsb2FkTWV0YWRhdGEgfCBQcm9taXNlPFVwbG9hZE1ldGFkYXRhPiA9IG1ldGFkYXRhID0+IG1ldGFkYXRhO1xyXG4gIEBJbnB1dCgpIGJ1dHRvbkNhcHRpb24gPSAnU2VsZWN0IEltYWdlcyc7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoJ2NsYXNzJykgY3NzQ2xhc3MgPSAnaW1nLXVsJztcclxuICBASW5wdXQoKSBjbGVhckJ1dHRvbkNhcHRpb24gPSAnQ2xlYXInO1xyXG4gIEBJbnB1dCgpIGRyb3BCb3hNZXNzYWdlID0gJ0Ryb3AgeW91ciBpbWFnZXMgaGVyZSEnO1xyXG4gIEBJbnB1dCgpIGZpbGVUb29MYXJnZU1lc3NhZ2U6IHN0cmluZztcclxuICBASW5wdXQoKSBoZWFkZXJzOiBIdHRwSGVhZGVycyB8IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgQElucHV0KCkgbWF4ID0gMTAwO1xyXG4gIEBJbnB1dCgpIG1heEZpbGVTaXplOiBudW1iZXI7XHJcbiAgQElucHV0KCkgcHJldmlldyA9IHRydWU7XHJcbiAgQElucHV0KCkgcGFydE5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBzdHlsZTogU3R5bGU7XHJcbiAgQElucHV0KCdleHRlbnNpb25zJykgc3VwcG9ydGVkRXh0ZW5zaW9uczogc3RyaW5nW107XHJcbiAgQElucHV0KCkgdXJsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgd2l0aENyZWRlbnRpYWxzID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdXBsb2FkZWRGaWxlczogc3RyaW5nW10gfCBBcnJheTx7IHVybDogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCBibG9iPzogQmxvYiB9PiA9IFtdO1xyXG4gIEBPdXRwdXQoKSByZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlSG9sZGVyPigpO1xyXG4gIEBPdXRwdXQoKSB1cGxvYWRTdGF0ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIHVwbG9hZEZpbmlzaGVkID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlSG9sZGVyPigpO1xyXG4gIEBPdXRwdXQoKSBwcmV2aWV3Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZUhvbGRlcj4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnaW5wdXQnKVxyXG4gIHByaXZhdGUgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIHByaXZhdGUgcGVuZGluZ0ZpbGVzQ291bnRlciA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW1hZ2VTZXJ2aWNlOiBJbWFnZVVwbG9hZFNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKCF0aGlzLmZpbGVUb29MYXJnZU1lc3NhZ2UpIHtcclxuICAgICAgdGhpcy5maWxlVG9vTGFyZ2VNZXNzYWdlID0gJ0FuIGltYWdlIHdhcyB0b28gbGFyZ2UgYW5kIHdhcyBub3QgdXBsb2FkZWQuJyArICh0aGlzLm1heEZpbGVTaXplID8gKCcgVGhlIG1heGltdW0gZmlsZSBzaXplIGlzICcgKyB0aGlzLm1heEZpbGVTaXplIC8gMTAyNCkgKyAnS2lCLicgOiAnJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN1cHBvcnRlZEV4dGVuc2lvbnMgPSB0aGlzLnN1cHBvcnRlZEV4dGVuc2lvbnMgPyB0aGlzLnN1cHBvcnRlZEV4dGVuc2lvbnMubWFwKChleHQpID0+ICdpbWFnZS8nICsgZXh0KSA6IFsnaW1hZ2UvKiddO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQWxsKCkge1xyXG4gICAgdGhpcy5maWxlcy5mb3JFYWNoKGYgPT4gdGhpcy5yZW1vdmVkLmVtaXQoZikpO1xyXG4gICAgdGhpcy5maWxlcyA9IFtdO1xyXG4gICAgdGhpcy5maWxlQ291bnRlciA9IDA7XHJcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGVsZXRlRmlsZShmaWxlOiBGaWxlSG9sZGVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZmlsZXMuaW5kZXhPZihmaWxlKTtcclxuICAgIHRoaXMuZmlsZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIHRoaXMuZmlsZUNvdW50ZXItLTtcclxuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCkge1xyXG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbW92ZWQuZW1pdChmaWxlKTtcclxuICB9XHJcblxyXG4gIHByZXZpZXdGaWxlQ2xpY2tlZChmaWxlOiBGaWxlSG9sZGVyKSB7XHJcbiAgICB0aGlzLnByZXZpZXdDbGlja2VkLmVtaXQoZmlsZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy51cGxvYWRlZEZpbGVzICYmIGNoYW5nZXMudXBsb2FkZWRGaWxlcy5jdXJyZW50VmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnByb2Nlc3NVcGxvYWRlZEZpbGVzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkZpbGVDaGFuZ2UoZmlsZXM6IEZpbGVMaXN0KSB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHJlbWFpbmluZ1Nsb3RzID0gdGhpcy5tYXggLSB0aGlzLmZpbGVDb3VudGVyO1xyXG4gICAgY29uc3QgZmlsZXNUb1VwbG9hZE51bSA9IGZpbGVzLmxlbmd0aCA+IHJlbWFpbmluZ1Nsb3RzID8gcmVtYWluaW5nU2xvdHMgOiBmaWxlcy5sZW5ndGg7XHJcblxyXG4gICAgaWYgKHRoaXMudXJsICYmIGZpbGVzVG9VcGxvYWROdW0gIT09IDApIHtcclxuICAgICAgdGhpcy51cGxvYWRTdGF0ZUNoYW5nZWQuZW1pdCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZpbGVDb3VudGVyICs9IGZpbGVzVG9VcGxvYWROdW07XHJcbiAgICB0aGlzLnNob3dGaWxlVG9vTGFyZ2VNZXNzYWdlID0gZmFsc2U7XHJcbiAgICB0aGlzLnVwbG9hZEZpbGVzKGZpbGVzLCBmaWxlc1RvVXBsb2FkTnVtKTtcclxuICB9XHJcblxyXG4gIG9uRmlsZU92ZXIgPSAoaXNPdmVyKSA9PiB0aGlzLmZpbGVPdmVyID0gaXNPdmVyO1xyXG5cclxuICBwcml2YXRlIG9uUmVzcG9uc2UocmVzcG9uc2U6IEh0dHBSZXNwb25zZTxhbnk+LCBmaWxlSG9sZGVyOiBGaWxlSG9sZGVyKSB7XHJcbiAgICBmaWxlSG9sZGVyLnNlcnZlclJlc3BvbnNlID0geyBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2UgfTtcclxuICAgIGZpbGVIb2xkZXIucGVuZGluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMudXBsb2FkRmluaXNoZWQuZW1pdChmaWxlSG9sZGVyKTtcclxuXHJcbiAgICBpZiAoLS10aGlzLnBlbmRpbmdGaWxlc0NvdW50ZXIgPT09IDApIHtcclxuICAgICAgdGhpcy51cGxvYWRTdGF0ZUNoYW5nZWQuZW1pdChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByb2Nlc3NVcGxvYWRlZEZpbGVzKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVwbG9hZGVkRmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZGF0YTogYW55ID0gdGhpcy51cGxvYWRlZEZpbGVzW2ldO1xyXG5cclxuICAgICAgbGV0IGZpbGVCbG9iOiBCbG9iLFxyXG4gICAgICAgIGZpbGU6IEZpbGUsXHJcbiAgICAgICAgZmlsZVVybDogc3RyaW5nO1xyXG5cclxuICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuICAgICAgICBmaWxlVXJsID0gZGF0YS51cmw7XHJcbiAgICAgICAgZmlsZUJsb2IgPSAoZGF0YS5ibG9iKSA/IGRhdGEuYmxvYiA6IG5ldyBCbG9iKFtkYXRhXSk7XHJcbiAgICAgICAgZmlsZSA9IG5ldyBGaWxlKFtmaWxlQmxvYl0sIGRhdGEuZmlsZU5hbWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbGVVcmwgPSBkYXRhO1xyXG4gICAgICAgIGZpbGVCbG9iID0gbmV3IEJsb2IoW2ZpbGVVcmxdKTtcclxuICAgICAgICBmaWxlID0gbmV3IEZpbGUoW2ZpbGVCbG9iXSwgZmlsZVVybCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZmlsZXMucHVzaChuZXcgRmlsZUhvbGRlcihmaWxlVXJsLCBmaWxlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIHVwbG9hZEZpbGVzKGZpbGVzOiBGaWxlTGlzdCwgZmlsZXNUb1VwbG9hZE51bTogbnVtYmVyKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzVG9VcGxvYWROdW07IGkrKykge1xyXG4gICAgICBjb25zdCBmaWxlID0gZmlsZXNbaV07XHJcblxyXG4gICAgICBpZiAodGhpcy5tYXhGaWxlU2l6ZSAmJiBmaWxlLnNpemUgPiB0aGlzLm1heEZpbGVTaXplKSB7XHJcbiAgICAgICAgdGhpcy5maWxlQ291bnRlci0tO1xyXG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgICAgICB0aGlzLnNob3dGaWxlVG9vTGFyZ2VNZXNzYWdlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwbG9hZFN0YXRlQ2hhbmdlZC5lbWl0KGZhbHNlKTtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgYmVmb3JlVXBsb2FkUmVzdWx0OiBVcGxvYWRNZXRhZGF0YSA9IGF3YWl0IHRoaXMuYmVmb3JlVXBsb2FkKHsgZmlsZSwgdXJsOiB0aGlzLnVybCwgYWJvcnQ6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgaWYgKGJlZm9yZVVwbG9hZFJlc3VsdC5hYm9ydCkge1xyXG4gICAgICAgIHRoaXMuZmlsZUNvdW50ZXItLTtcclxuICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgIGltZy5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChiZWZvcmVVcGxvYWRSZXN1bHQuZmlsZSk7XHJcblxyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlsZUhvbGRlcjogRmlsZUhvbGRlciA9IG5ldyBGaWxlSG9sZGVyKGV2ZW50LnRhcmdldC5yZXN1bHQsIGJlZm9yZVVwbG9hZFJlc3VsdC5maWxlKTtcclxuICAgICAgICB0aGlzLmZpbGVzLnB1c2goZmlsZUhvbGRlcik7XHJcbiAgICAgICAgdGhpcy51cGxvYWRTaW5nbGVGaWxlKGZpbGVIb2xkZXIsIGJlZm9yZVVwbG9hZFJlc3VsdC51cmwsIGJlZm9yZVVwbG9hZFJlc3VsdC5mb3JtRGF0YSk7XHJcbiAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmVmb3JlVXBsb2FkUmVzdWx0LmZpbGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGxvYWRTaW5nbGVGaWxlKGZpbGVIb2xkZXI6IEZpbGVIb2xkZXIsIHVybCA9IHRoaXMudXJsLCBjdXN0b21Gb3JtPzogeyBbbmFtZTogc3RyaW5nXTogYW55IH0pIHtcclxuICAgIGlmICh1cmwpIHtcclxuICAgICAgdGhpcy5wZW5kaW5nRmlsZXNDb3VudGVyKys7XHJcbiAgICAgIGZpbGVIb2xkZXIucGVuZGluZyA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLmltYWdlU2VydmljZVxyXG4gICAgICAgIC51cGxvYWRJbWFnZSh1cmwsIGZpbGVIb2xkZXIuZmlsZSwgdGhpcy5oZWFkZXJzLCB0aGlzLnBhcnROYW1lLCBjdXN0b21Gb3JtLCB0aGlzLndpdGhDcmVkZW50aWFscylcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgcmVzcG9uc2UgPT4gdGhpcy5vblJlc3BvbnNlKHJlc3BvbnNlLCBmaWxlSG9sZGVyKSxcclxuICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vblJlc3BvbnNlKGVycm9yLCBmaWxlSG9sZGVyKTtcclxuICAgICAgICAgICAgdGhpcy5kZWxldGVGaWxlKGZpbGVIb2xkZXIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnVwbG9hZEZpbmlzaGVkLmVtaXQoZmlsZUhvbGRlcik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpbGVEcm9wRGlyZWN0aXZlIH0gZnJvbSAnLi9maWxlLWRyb3AuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSW1hZ2VVcGxvYWRTZXJ2aWNlIH0gZnJvbSAnLi9pbWFnZS11cGxvYWQuc2VydmljZSc7XHJcbmltcG9ydCB7IEltYWdlVXBsb2FkQ29tcG9uZW50IH0gZnJvbSAnLi9pbWFnZS11cGxvYWQvaW1hZ2UtdXBsb2FkLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgSW1hZ2VVcGxvYWRDb21wb25lbnQsXHJcbiAgICBGaWxlRHJvcERpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW0ltYWdlVXBsb2FkQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VVcGxvYWRNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEltYWdlVXBsb2FkTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtJbWFnZVVwbG9hZFNlcnZpY2VdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiRGlyZWN0aXZlIiwiSW5wdXQiLCJPdXRwdXQiLCJIb3N0TGlzdGVuZXIiLCJodHRwIiwidHNsaWJfMS5fX3ZhbHVlcyIsIkluamVjdGFibGUiLCJIdHRwQ2xpZW50IiwiQ29tcG9uZW50IiwiVmlld0NoaWxkIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQUVBO1lBS1ksYUFBUSxHQUEwQixJQUFJQSxpQkFBWSxFQUFXLENBQUM7WUFDOUQsYUFBUSxHQUEyQixJQUFJQSxpQkFBWSxFQUFZLENBQUM7U0ErRTNFOzs7OztRQTdFZ0IsaUNBQWU7Ozs7WUFBOUIsVUFBK0IsS0FBVTtnQkFDdkMsT0FBTyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7YUFDbkY7Ozs7O1FBRWMsMEJBQVE7Ozs7WUFBdkIsVUFBd0IsS0FBVTtnQkFDaEMs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QyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7NEJBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzs0QkFBQyxTQUFTO3dCQUNqRDs0QkFDSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0NBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQ0FBQyxTQUFTOzZCQUFFOzRCQUM1RyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQ0FBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FBQyxNQUFNOzZCQUFFOzRCQUN0RixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0NBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQ0FBQyxNQUFNOzZCQUFFOzRCQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQ0FBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FBQyxDQUFDLENBQUMs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