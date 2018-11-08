import { Directive, EventEmitter, HostListener, Input, Output, Injectable, Component, ViewChild, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { __awaiter } from 'tslib';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class FileDropDirective {
    constructor() {
        this.fileOver = new EventEmitter();
        this.fileDrop = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    static getDataTransfer(event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
    }
    /**
     * @param {?} types
     * @return {?}
     */
    static hasFiles(types) {
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
    }
    /**
     * @param {?} rule
     * @param {?} candidate
     * @return {?}
     */
    static matchRule(rule, candidate) {
        return new RegExp('^' + rule.split('*').join('.*') + '$').test(candidate);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDrop(event) {
        /** @type {?} */
        const dataTransfer = FileDropDirective.getDataTransfer(event);
        if (!FileDropDirective.hasFiles(dataTransfer.types)) {
            return;
        }
        event.preventDefault();
        /** @type {?} */
        const files = this.filterFiles(dataTransfer.files);
        event.preventDefault();
        this.fileOver.emit(false);
        this.fileDrop.emit(files);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragLeave(event) {
        this.fileOver.emit(false);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragOver(event) {
        /** @type {?} */
        const dataTransfer = FileDropDirective.getDataTransfer(event);
        if (!FileDropDirective.hasFiles(dataTransfer.types)) {
            return;
        }
        dataTransfer.dropEffect = 'copy';
        event.preventDefault();
        this.fileOver.emit(true);
    }
    /**
     * @param {?} files
     * @return {?}
     */
    filterFiles(files) {
        if (!this.accept || this.accept.length === 0) {
            return files;
        }
        /** @type {?} */
        const acceptedFiles = [];
        for (let i = 0; i < files.length; i++) {
            for (let j = 0; j < this.accept.length; j++) {
                if (FileDropDirective.matchRule(this.accept[j], files[i].type)) {
                    acceptedFiles.push(files[i]);
                    break;
                }
            }
        }
        return acceptedFiles;
    }
}
FileDropDirective.decorators = [
    { type: Directive, args: [{
                selector: '[fileDrop]'
            },] }
];
FileDropDirective.propDecorators = {
    accept: [{ type: Input }],
    fileOver: [{ type: Output }],
    fileDrop: [{ type: Output }],
    onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }],
    onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }],
    onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ImageUploadService {
    /**
     * @param {?} http
     */
    constructor(http) {
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
    uploadImage(url, image, headers, partName = 'image', customFormData, withCredentials) {
        if (!url || url === '') {
            throw new Error('Url is not set! Please set it before doing queries');
        }
        /** @type {?} */
        const formData = new FormData();
        if (customFormData) {
            for (const key of Object.keys(customFormData)) {
                formData.append(key, customFormData[key]);
            }
        }
        formData.append(partName, image);
        return this.http.post(url, formData, { withCredentials, headers, observe: 'response' });
    }
}
ImageUploadService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ImageUploadService.ctorParameters = () => [
    { type: HttpClient }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class FileHolder {
    /**
     * @param {?} src
     * @param {?} file
     */
    constructor(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ImageUploadComponent {
    /**
     * @param {?} imageService
     */
    constructor(imageService) {
        this.imageService = imageService;
        this.files = [];
        this.fileCounter = 0;
        this.fileOver = false;
        this.showFileTooLargeMessage = false;
        this.beforeUpload = metadata => metadata;
        this.buttonCaption = 'Select Images';
        this.disabled = false;
        this.cssClass = 'img-ul';
        this.clearButtonCaption = 'Clear';
        this.dropBoxMessage = 'Drop your images here!';
        this.max = 100;
        this.preview = true;
        this.withCredentials = false;
        this.uploadedFiles = [];
        this.removed = new EventEmitter();
        this.uploadStateChanged = new EventEmitter();
        this.uploadFinished = new EventEmitter();
        this.previewClicked = new EventEmitter();
        this.pendingFilesCounter = 0;
        this.onFileOver = (isOver) => this.fileOver = isOver;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.fileTooLargeMessage) {
            this.fileTooLargeMessage = 'An image was too large and was not uploaded.' + (this.maxFileSize ? (' The maximum file size is ' + this.maxFileSize / 1024) + 'KiB.' : '');
        }
        this.supportedExtensions = this.supportedExtensions ? this.supportedExtensions.map((ext) => 'image/' + ext) : ['image/*'];
    }
    /**
     * @return {?}
     */
    deleteAll() {
        this.files.forEach(f => this.removed.emit(f));
        this.files = [];
        this.fileCounter = 0;
        if (this.inputElement) {
            this.inputElement.nativeElement.value = '';
        }
    }
    /**
     * @param {?} file
     * @return {?}
     */
    deleteFile(file) {
        /** @type {?} */
        const index = this.files.indexOf(file);
        this.files.splice(index, 1);
        this.fileCounter--;
        if (this.inputElement) {
            this.inputElement.nativeElement.value = '';
        }
        this.removed.emit(file);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    previewFileClicked(file) {
        this.previewClicked.emit(file);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.uploadedFiles && changes.uploadedFiles.currentValue.length > 0) {
            this.processUploadedFiles();
        }
    }
    /**
     * @param {?} files
     * @return {?}
     */
    onFileChange(files) {
        if (this.disabled)
            return;
        /** @type {?} */
        const remainingSlots = this.max - this.fileCounter;
        /** @type {?} */
        const filesToUploadNum = files.length > remainingSlots ? remainingSlots : files.length;
        if (this.url && filesToUploadNum !== 0) {
            this.uploadStateChanged.emit(true);
        }
        this.fileCounter += filesToUploadNum;
        this.showFileTooLargeMessage = false;
        this.uploadFiles(files, filesToUploadNum);
    }
    /**
     * @param {?} response
     * @param {?} fileHolder
     * @return {?}
     */
    onResponse(response, fileHolder) {
        fileHolder.serverResponse = { status: response.status, response };
        fileHolder.pending = false;
        this.uploadFinished.emit(fileHolder);
        if (--this.pendingFilesCounter === 0) {
            this.uploadStateChanged.emit(false);
        }
    }
    /**
     * @return {?}
     */
    processUploadedFiles() {
        for (let i = 0; i < this.uploadedFiles.length; i++) {
            /** @type {?} */
            const data = this.uploadedFiles[i];
            /** @type {?} */
            let fileBlob;
            /** @type {?} */
            let file;
            /** @type {?} */
            let fileUrl;
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
    }
    /**
     * @param {?} files
     * @param {?} filesToUploadNum
     * @return {?}
     */
    uploadFiles(files, filesToUploadNum) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < filesToUploadNum; i++) {
                /** @type {?} */
                const file = files[i];
                if (this.maxFileSize && file.size > this.maxFileSize) {
                    this.fileCounter--;
                    this.inputElement.nativeElement.value = '';
                    this.showFileTooLargeMessage = true;
                    this.uploadStateChanged.emit(false);
                    continue;
                }
                /** @type {?} */
                const beforeUploadResult = yield this.beforeUpload({ file, url: this.url, abort: false });
                if (beforeUploadResult.abort) {
                    this.fileCounter--;
                    this.inputElement.nativeElement.value = '';
                    continue;
                }
                /** @type {?} */
                const img = (/** @type {?} */ (document.createElement('img')));
                img.src = window.URL.createObjectURL(beforeUploadResult.file);
                /** @type {?} */
                const reader = new FileReader();
                reader.addEventListener('load', (event) => {
                    /** @type {?} */
                    const fileHolder = new FileHolder(event.target.result, beforeUploadResult.file);
                    this.files.push(fileHolder);
                    this.uploadSingleFile(fileHolder, beforeUploadResult.url, beforeUploadResult.formData);
                }, false);
                reader.readAsDataURL(beforeUploadResult.file);
            }
        });
    }
    /**
     * @param {?} fileHolder
     * @param {?=} url
     * @param {?=} customForm
     * @return {?}
     */
    uploadSingleFile(fileHolder, url = this.url, customForm) {
        if (url) {
            this.pendingFilesCounter++;
            fileHolder.pending = true;
            this.imageService
                .uploadImage(url, fileHolder.file, this.headers, this.partName, customForm, this.withCredentials)
                .subscribe(response => this.onResponse(response, fileHolder), error => {
                this.onResponse(error, fileHolder);
                this.deleteFile(fileHolder);
            });
        }
        else {
            this.uploadFinished.emit(fileHolder);
        }
    }
}
ImageUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'image-upload',
                template: "<div\r\n     fileDrop\r\n     [accept]=\"supportedExtensions\"\r\n     (fileOver)=\"onFileOver($event)\"\r\n     (fileDrop)=\"onFileChange($event)\"\r\n     [ngClass]=\"cssClass\"\r\n     [ngClass]=\"{'img-ul-file-is-over': fileOver}\"     \r\n     [ngStyle]=\"style?.layout\"\r\n>\r\n  <div class=\"img-ul-file-upload img-ul-hr-inline-group\">    \r\n    <label *ngIf=\"fileCounter != max\"\r\n      class=\"img-ul-upload img-ul-button\" \r\n      [ngStyle]=\"style?.selectButton\"\r\n      [ngClass]=\"{'img-ul-disabled': disabled}\">\r\n      <span [innerText]=\"buttonCaption\"></span>\r\n      <input\r\n        type=\"file\"\r\n        [disabled]=\"disabled\"\r\n        [accept]=\"supportedExtensions\"\r\n        multiple (change)=\"onFileChange(input.files)\"\r\n        #input>\r\n    </label>\r\n    <button *ngIf=\"fileCounter > 0\"\r\n      [disabled]=\"disabled\"\r\n      class=\"img-ul-clear img-ul-button\" \r\n      (click)=\"deleteAll()\" \r\n      [ngStyle]=\"style?.clearButton\"\r\n      [innerText]=\"clearButtonCaption\">\r\n    </button>\r\n    <div class=\"img-ul-drag-box-msg\" [innerText]=\"dropBoxMessage\"></div>\r\n  </div>\r\n\r\n  <p class=\"img-ul-file-too-large\" *ngIf=\"showFileTooLargeMessage\" [innerText]=\"fileTooLargeMessage\"></p>\r\n\r\n  <div *ngIf=\"preview\" class=\"img-ul-container img-ul-hr-inline-group\" [ngStyle]=\"style?.previewPanel\">\r\n    <div\r\n      class=\"img-ul-image\"\r\n      *ngFor=\"let file of files\"\r\n      (click)=\"previewFileClicked(file)\"\r\n      [ngStyle]=\"{'background-image': 'url('+ file.src +')'}\"\r\n    >\r\n      <div *ngIf=\"file.pending\" class=\"img-ul-loading-overlay\">\r\n        <div class=\"img-ul-spinning-circle\"></div>\r\n      </div>\r\n      <div *ngIf=\"!file.pending\" \r\n        [ngClass]=\"{'img-ul-disabled': disabled}\" \r\n        class=\"img-ul-x-mark\" \r\n        (click)=\"deleteFile(file)\">\r\n        <span class=\"img-ul-close\"></span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: [".img-ul{--active-color:#3C9;--common-radius:3px;background-color:#f8f8f8;border-radius:var(--common-radius);border:1px dashed #d0d0d0;font-family:sans-serif;position:relative;color:#9b9b9b}.img-ul-file-is-over{border:var(--active-color) solid}.img-ul-hr-inline-group:after{clear:both;content:\"\";display:table}.img-ul-file-upload{padding:16px}.img-ul-drag-box-msg{display:inline-block;font-weight:600;margin-left:12px;padding-top:14px}label.img-ul-button input[type=file]{display:none;position:fixed;top:-99999px}.img-ul-clear{background-color:red}.img-ul-clear:disabled{background-color:#ff6464;cursor:default}.img-ul-upload{background-color:var(--active-color)}.img-ul-button{-moz-box-shadow:2px 2px 4px 0 rgba(148,148,148,.6);-webkit-box-shadow:2px 2px 4px 0 rgba(148,148,148,.6);border:none;box-shadow:2px 2px 4px 0 rgba(148,148,148,.6);color:#fff;cursor:pointer;display:inline-block;float:left;font-size:1.25em;font-weight:500;padding:10px;text-transform:uppercase}.img-ul-button:active span{display:block;position:relative;top:1px}.img-ul-container{background-color:#fdfdfd;padding:0 10px}.img-ul-image{background:center center/contain no-repeat;display:inline-block;float:left;height:86px;margin:6px;position:relative;width:86px}.img-ul-x-mark{background-color:#000;border-radius:2px;color:#fff;cursor:pointer;float:right;height:20px;margin:2px;opacity:.7;text-align:center;width:20px}.img-ul-close{height:20px;opacity:.7;padding-right:3px;position:relative;width:20px}.img-ul-x-mark:hover .img-ul-close{opacity:1}.img-ul-close:after,.img-ul-close:before{background-color:#fff;border-radius:2px;content:'';height:15px;position:absolute;top:0;width:2px}.img-ul-close:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.img-ul-close:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.img-ul-x-mark.img-ul-disabled{display:none}.img-ul-loading-overlay{background-color:#000;bottom:0;left:0;opacity:.7;position:absolute;right:0;top:0}.img-ul-spinning-circle{height:30px;width:30px;margin:auto;position:absolute;top:0;left:0;bottom:0;right:0;border-radius:50%;border:3px solid rgba(255,255,255,0);border-top:3px solid #fff;border-right:3px solid #fff;-webkit-animation:2s cubic-bezier(.085,.625,.855,.36) infinite spinner;animation:2s cubic-bezier(.085,.625,.855,.36) infinite spinner}.img-ul-file-too-large{color:red;padding:0 15px}.img-ul-upload.img-ul-disabled{background-color:#86e9c9;cursor:default}.img-ul-upload.img-ul-disabled:active span{top:0}@-webkit-keyframes spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]
            }] }
];
/** @nocollapse */
ImageUploadComponent.ctorParameters = () => [
    { type: ImageUploadService }
];
ImageUploadComponent.propDecorators = {
    beforeUpload: [{ type: Input }],
    buttonCaption: [{ type: Input }],
    disabled: [{ type: Input }],
    cssClass: [{ type: Input, args: ['class',] }],
    clearButtonCaption: [{ type: Input }],
    dropBoxMessage: [{ type: Input }],
    fileTooLargeMessage: [{ type: Input }],
    headers: [{ type: Input }],
    max: [{ type: Input }],
    maxFileSize: [{ type: Input }],
    preview: [{ type: Input }],
    partName: [{ type: Input }],
    style: [{ type: Input }],
    supportedExtensions: [{ type: Input, args: ['extensions',] }],
    url: [{ type: Input }],
    withCredentials: [{ type: Input }],
    uploadedFiles: [{ type: Input }],
    removed: [{ type: Output }],
    uploadStateChanged: [{ type: Output }],
    uploadFinished: [{ type: Output }],
    previewClicked: [{ type: Output }],
    inputElement: [{ type: ViewChild, args: ['input',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ImageUploadModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: ImageUploadModule,
            providers: [ImageUploadService]
        };
    }
}
ImageUploadModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    ImageUploadComponent,
                    FileDropDirective
                ],
                exports: [ImageUploadComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { ImageUploadModule, ImageUploadComponent, FileHolder, FileDropDirective as ɵb, ImageUploadService as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjItaW1hZ2UtdXBsb2FkLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyMi1pbWFnZS11cGxvYWQvbGliL2ZpbGUtZHJvcC5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXIyLWltYWdlLXVwbG9hZC9saWIvaW1hZ2UtdXBsb2FkLnNlcnZpY2UudHMiLCJuZzovL2FuZ3VsYXIyLWltYWdlLXVwbG9hZC9saWIvZmlsZS1ob2xkZXIudHMiLCJuZzovL2FuZ3VsYXIyLWltYWdlLXVwbG9hZC9saWIvaW1hZ2UtdXBsb2FkL2ltYWdlLXVwbG9hZC5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXIyLWltYWdlLXVwbG9hZC9saWIvaW1hZ2UtdXBsb2FkLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tmaWxlRHJvcF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWxlRHJvcERpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCkgYWNjZXB0OiBzdHJpbmdbXTtcclxuICBAT3V0cHV0KCkgZmlsZU92ZXI6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgZmlsZURyb3A6IEV2ZW50RW1pdHRlcjxGaWxlTGlzdD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVMaXN0PigpO1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBnZXREYXRhVHJhbnNmZXIoZXZlbnQ6IGFueSk6IERhdGFUcmFuc2ZlciB7XHJcbiAgICByZXR1cm4gZXZlbnQuZGF0YVRyYW5zZmVyID8gZXZlbnQuZGF0YVRyYW5zZmVyIDogZXZlbnQub3JpZ2luYWxFdmVudC5kYXRhVHJhbnNmZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBoYXNGaWxlcyh0eXBlczogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXR5cGVzKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZXMuaW5kZXhPZikge1xyXG4gICAgICByZXR1cm4gdHlwZXMuaW5kZXhPZignRmlsZXMnKSAhPT0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVzLmNvbnRhaW5zKSB7XHJcbiAgICAgIHJldHVybiB0eXBlcy5jb250YWlucygnRmlsZXMnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBtYXRjaFJ1bGUocnVsZTogc3RyaW5nLCBjYW5kaWRhdGU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoJ14nICsgcnVsZS5zcGxpdCgnKicpLmpvaW4oJy4qJykgKyAnJCcpLnRlc3QoY2FuZGlkYXRlKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxyXG4gIG9uRHJvcChldmVudDogYW55KSB7XHJcbiAgICBjb25zdCBkYXRhVHJhbnNmZXIgPSBGaWxlRHJvcERpcmVjdGl2ZS5nZXREYXRhVHJhbnNmZXIoZXZlbnQpO1xyXG5cclxuICAgIGlmICghRmlsZURyb3BEaXJlY3RpdmUuaGFzRmlsZXMoZGF0YVRyYW5zZmVyLnR5cGVzKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZmlsdGVyRmlsZXMoZGF0YVRyYW5zZmVyLmZpbGVzKTtcclxuXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5maWxlT3Zlci5lbWl0KGZhbHNlKTtcclxuICAgIHRoaXMuZmlsZURyb3AuZW1pdChmaWxlcyk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkcmFnbGVhdmUnLCBbJyRldmVudCddKVxyXG4gIG9uRHJhZ0xlYXZlKGV2ZW50KSB7XHJcbiAgICB0aGlzLmZpbGVPdmVyLmVtaXQoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKVxyXG4gIG9uRHJhZ092ZXIoZXZlbnQ6IGFueSkge1xyXG4gICAgY29uc3QgZGF0YVRyYW5zZmVyID0gRmlsZURyb3BEaXJlY3RpdmUuZ2V0RGF0YVRyYW5zZmVyKGV2ZW50KTtcclxuXHJcbiAgICBpZiAoIUZpbGVEcm9wRGlyZWN0aXZlLmhhc0ZpbGVzKGRhdGFUcmFuc2Zlci50eXBlcykpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ2NvcHknO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuZmlsZU92ZXIuZW1pdCh0cnVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmlsdGVyRmlsZXMoZmlsZXM6IEZpbGVMaXN0KTogYW55IHtcclxuICAgIGlmICghdGhpcy5hY2NlcHQgfHwgdGhpcy5hY2NlcHQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBmaWxlcztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhY2NlcHRlZEZpbGVzOiBGaWxlW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5hY2NlcHQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBpZiAoRmlsZURyb3BEaXJlY3RpdmUubWF0Y2hSdWxlKHRoaXMuYWNjZXB0W2pdLCBmaWxlc1tpXS50eXBlKSkge1xyXG4gICAgICAgICAgYWNjZXB0ZWRGaWxlcy5wdXNoKGZpbGVzW2ldKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhY2NlcHRlZEZpbGVzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEltYWdlVXBsb2FkU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBsb2FkSW1hZ2UodXJsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBGaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICBwYXJ0TmFtZTogc3RyaW5nID0gJ2ltYWdlJyxcclxuICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRm9ybURhdGE/OiB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IEJsb2IgfSxcclxuICAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+IHtcclxuICAgIGlmICghdXJsIHx8IHVybCA9PT0gJycpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVcmwgaXMgbm90IHNldCEgUGxlYXNlIHNldCBpdCBiZWZvcmUgZG9pbmcgcXVlcmllcycpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgaWYgKGN1c3RvbUZvcm1EYXRhKSB7XHJcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGN1c3RvbUZvcm1EYXRhKSkge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIGN1c3RvbUZvcm1EYXRhW2tleV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybURhdGEuYXBwZW5kKHBhcnROYW1lLCBpbWFnZSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgZm9ybURhdGEsIHsgd2l0aENyZWRlbnRpYWxzLCBoZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZUhvbGRlciB7XHJcbiAgcHVibGljIHBlbmRpbmcgPSBmYWxzZTtcclxuICBwdWJsaWMgc2VydmVyUmVzcG9uc2U6IHsgc3RhdHVzOiBudW1iZXIsIHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8YW55PiB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3JjOiBzdHJpbmcsIHB1YmxpYyBmaWxlOiBGaWxlKSB7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpbGVIb2xkZXIgfSBmcm9tICcuLi9maWxlLWhvbGRlcic7XHJcbmltcG9ydCB7IEltYWdlVXBsb2FkU2VydmljZSB9IGZyb20gJy4uL2ltYWdlLXVwbG9hZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3R5bGUgfSBmcm9tICcuLi9zdHlsZSc7XHJcbmltcG9ydCB7IFVwbG9hZE1ldGFkYXRhIH0gZnJvbSAnLi4vdXBsb2FkLW1ldGFkYXRhJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaW1hZ2UtdXBsb2FkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbWFnZS11cGxvYWQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBmaWxlczogRmlsZUhvbGRlcltdID0gW107XHJcbiAgZmlsZUNvdW50ZXIgPSAwO1xyXG4gIGZpbGVPdmVyID0gZmFsc2U7XHJcbiAgc2hvd0ZpbGVUb29MYXJnZU1lc3NhZ2UgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgYmVmb3JlVXBsb2FkOiAobWV0YWRhdGE6IFVwbG9hZE1ldGFkYXRhKSA9PiBVcGxvYWRNZXRhZGF0YSB8IFByb21pc2U8VXBsb2FkTWV0YWRhdGE+ID0gbWV0YWRhdGEgPT4gbWV0YWRhdGE7XHJcbiAgQElucHV0KCkgYnV0dG9uQ2FwdGlvbiA9ICdTZWxlY3QgSW1hZ2VzJztcclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgnY2xhc3MnKSBjc3NDbGFzcyA9ICdpbWctdWwnO1xyXG4gIEBJbnB1dCgpIGNsZWFyQnV0dG9uQ2FwdGlvbiA9ICdDbGVhcic7XHJcbiAgQElucHV0KCkgZHJvcEJveE1lc3NhZ2UgPSAnRHJvcCB5b3VyIGltYWdlcyBoZXJlISc7XHJcbiAgQElucHV0KCkgZmlsZVRvb0xhcmdlTWVzc2FnZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGhlYWRlcnM6IEh0dHBIZWFkZXJzIHwgeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICBASW5wdXQoKSBtYXggPSAxMDA7XHJcbiAgQElucHV0KCkgbWF4RmlsZVNpemU6IG51bWJlcjtcclxuICBASW5wdXQoKSBwcmV2aWV3ID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwYXJ0TmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHN0eWxlOiBTdHlsZTtcclxuICBASW5wdXQoJ2V4dGVuc2lvbnMnKSBzdXBwb3J0ZWRFeHRlbnNpb25zOiBzdHJpbmdbXTtcclxuICBASW5wdXQoKSB1cmw6IHN0cmluZztcclxuICBASW5wdXQoKSB3aXRoQ3JlZGVudGlhbHMgPSBmYWxzZTtcclxuICBASW5wdXQoKSB1cGxvYWRlZEZpbGVzOiBzdHJpbmdbXSB8IEFycmF5PHsgdXJsOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIGJsb2I/OiBCbG9iIH0+ID0gW107XHJcbiAgQE91dHB1dCgpIHJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVIb2xkZXI+KCk7XHJcbiAgQE91dHB1dCgpIHVwbG9hZFN0YXRlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgdXBsb2FkRmluaXNoZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVIb2xkZXI+KCk7XHJcbiAgQE91dHB1dCgpIHByZXZpZXdDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlSG9sZGVyPigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdpbnB1dCcpXHJcbiAgcHJpdmF0ZSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgcHJpdmF0ZSBwZW5kaW5nRmlsZXNDb3VudGVyID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlVXBsb2FkU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuZmlsZVRvb0xhcmdlTWVzc2FnZSkge1xyXG4gICAgICB0aGlzLmZpbGVUb29MYXJnZU1lc3NhZ2UgPSAnQW4gaW1hZ2Ugd2FzIHRvbyBsYXJnZSBhbmQgd2FzIG5vdCB1cGxvYWRlZC4nICsgKHRoaXMubWF4RmlsZVNpemUgPyAoJyBUaGUgbWF4aW11bSBmaWxlIHNpemUgaXMgJyArIHRoaXMubWF4RmlsZVNpemUgLyAxMDI0KSArICdLaUIuJyA6ICcnKTtcclxuICAgIH1cclxuICAgIHRoaXMuc3VwcG9ydGVkRXh0ZW5zaW9ucyA9IHRoaXMuc3VwcG9ydGVkRXh0ZW5zaW9ucyA/IHRoaXMuc3VwcG9ydGVkRXh0ZW5zaW9ucy5tYXAoKGV4dCkgPT4gJ2ltYWdlLycgKyBleHQpIDogWydpbWFnZS8qJ107XHJcbiAgfVxyXG5cclxuICBkZWxldGVBbGwoKSB7XHJcbiAgICB0aGlzLmZpbGVzLmZvckVhY2goZiA9PiB0aGlzLnJlbW92ZWQuZW1pdChmKSk7XHJcbiAgICB0aGlzLmZpbGVzID0gW107XHJcbiAgICB0aGlzLmZpbGVDb3VudGVyID0gMDtcclxuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCkge1xyXG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZWxldGVGaWxlKGZpbGU6IEZpbGVIb2xkZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maWxlcy5pbmRleE9mKGZpbGUpO1xyXG4gICAgdGhpcy5maWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgdGhpcy5maWxlQ291bnRlci0tO1xyXG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgIH1cclxuICAgIHRoaXMucmVtb3ZlZC5lbWl0KGZpbGUpO1xyXG4gIH1cclxuXHJcbiAgcHJldmlld0ZpbGVDbGlja2VkKGZpbGU6IEZpbGVIb2xkZXIpIHtcclxuICAgIHRoaXMucHJldmlld0NsaWNrZWQuZW1pdChmaWxlKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLnVwbG9hZGVkRmlsZXMgJiYgY2hhbmdlcy51cGxvYWRlZEZpbGVzLmN1cnJlbnRWYWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMucHJvY2Vzc1VwbG9hZGVkRmlsZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRmlsZUNoYW5nZShmaWxlczogRmlsZUxpc3QpIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcmVtYWluaW5nU2xvdHMgPSB0aGlzLm1heCAtIHRoaXMuZmlsZUNvdW50ZXI7XHJcbiAgICBjb25zdCBmaWxlc1RvVXBsb2FkTnVtID0gZmlsZXMubGVuZ3RoID4gcmVtYWluaW5nU2xvdHMgPyByZW1haW5pbmdTbG90cyA6IGZpbGVzLmxlbmd0aDtcclxuXHJcbiAgICBpZiAodGhpcy51cmwgJiYgZmlsZXNUb1VwbG9hZE51bSAhPT0gMCkge1xyXG4gICAgICB0aGlzLnVwbG9hZFN0YXRlQ2hhbmdlZC5lbWl0KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmlsZUNvdW50ZXIgKz0gZmlsZXNUb1VwbG9hZE51bTtcclxuICAgIHRoaXMuc2hvd0ZpbGVUb29MYXJnZU1lc3NhZ2UgPSBmYWxzZTtcclxuICAgIHRoaXMudXBsb2FkRmlsZXMoZmlsZXMsIGZpbGVzVG9VcGxvYWROdW0pO1xyXG4gIH1cclxuXHJcbiAgb25GaWxlT3ZlciA9IChpc092ZXIpID0+IHRoaXMuZmlsZU92ZXIgPSBpc092ZXI7XHJcblxyXG4gIHByaXZhdGUgb25SZXNwb25zZShyZXNwb25zZTogSHR0cFJlc3BvbnNlPGFueT4sIGZpbGVIb2xkZXI6IEZpbGVIb2xkZXIpIHtcclxuICAgIGZpbGVIb2xkZXIuc2VydmVyUmVzcG9uc2UgPSB7IHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZSB9O1xyXG4gICAgZmlsZUhvbGRlci5wZW5kaW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy51cGxvYWRGaW5pc2hlZC5lbWl0KGZpbGVIb2xkZXIpO1xyXG5cclxuICAgIGlmICgtLXRoaXMucGVuZGluZ0ZpbGVzQ291bnRlciA9PT0gMCkge1xyXG4gICAgICB0aGlzLnVwbG9hZFN0YXRlQ2hhbmdlZC5lbWl0KGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJvY2Vzc1VwbG9hZGVkRmlsZXMoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudXBsb2FkZWRGaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBkYXRhOiBhbnkgPSB0aGlzLnVwbG9hZGVkRmlsZXNbaV07XHJcblxyXG4gICAgICBsZXQgZmlsZUJsb2I6IEJsb2IsXHJcbiAgICAgICAgZmlsZTogRmlsZSxcclxuICAgICAgICBmaWxlVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICAgIGZpbGVVcmwgPSBkYXRhLnVybDtcclxuICAgICAgICBmaWxlQmxvYiA9IChkYXRhLmJsb2IpID8gZGF0YS5ibG9iIDogbmV3IEJsb2IoW2RhdGFdKTtcclxuICAgICAgICBmaWxlID0gbmV3IEZpbGUoW2ZpbGVCbG9iXSwgZGF0YS5maWxlTmFtZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsZVVybCA9IGRhdGE7XHJcbiAgICAgICAgZmlsZUJsb2IgPSBuZXcgQmxvYihbZmlsZVVybF0pO1xyXG4gICAgICAgIGZpbGUgPSBuZXcgRmlsZShbZmlsZUJsb2JdLCBmaWxlVXJsKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5maWxlcy5wdXNoKG5ldyBGaWxlSG9sZGVyKGZpbGVVcmwsIGZpbGUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgdXBsb2FkRmlsZXMoZmlsZXM6IEZpbGVMaXN0LCBmaWxlc1RvVXBsb2FkTnVtOiBudW1iZXIpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXNUb1VwbG9hZE51bTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1tpXTtcclxuXHJcbiAgICAgIGlmICh0aGlzLm1heEZpbGVTaXplICYmIGZpbGUuc2l6ZSA+IHRoaXMubWF4RmlsZVNpemUpIHtcclxuICAgICAgICB0aGlzLmZpbGVDb3VudGVyLS07XHJcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuc2hvd0ZpbGVUb29MYXJnZU1lc3NhZ2UgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXBsb2FkU3RhdGVDaGFuZ2VkLmVtaXQoZmFsc2UpO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBiZWZvcmVVcGxvYWRSZXN1bHQ6IFVwbG9hZE1ldGFkYXRhID0gYXdhaXQgdGhpcy5iZWZvcmVVcGxvYWQoeyBmaWxlLCB1cmw6IHRoaXMudXJsLCBhYm9ydDogZmFsc2UgfSk7XHJcblxyXG4gICAgICBpZiAoYmVmb3JlVXBsb2FkUmVzdWx0LmFib3J0KSB7XHJcbiAgICAgICAgdGhpcy5maWxlQ291bnRlci0tO1xyXG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJykgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgaW1nLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJlZm9yZVVwbG9hZFJlc3VsdC5maWxlKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBmaWxlSG9sZGVyOiBGaWxlSG9sZGVyID0gbmV3IEZpbGVIb2xkZXIoZXZlbnQudGFyZ2V0LnJlc3VsdCwgYmVmb3JlVXBsb2FkUmVzdWx0LmZpbGUpO1xyXG4gICAgICAgIHRoaXMuZmlsZXMucHVzaChmaWxlSG9sZGVyKTtcclxuICAgICAgICB0aGlzLnVwbG9hZFNpbmdsZUZpbGUoZmlsZUhvbGRlciwgYmVmb3JlVXBsb2FkUmVzdWx0LnVybCwgYmVmb3JlVXBsb2FkUmVzdWx0LmZvcm1EYXRhKTtcclxuICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChiZWZvcmVVcGxvYWRSZXN1bHQuZmlsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwbG9hZFNpbmdsZUZpbGUoZmlsZUhvbGRlcjogRmlsZUhvbGRlciwgdXJsID0gdGhpcy51cmwsIGN1c3RvbUZvcm0/OiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSkge1xyXG4gICAgaWYgKHVybCkge1xyXG4gICAgICB0aGlzLnBlbmRpbmdGaWxlc0NvdW50ZXIrKztcclxuICAgICAgZmlsZUhvbGRlci5wZW5kaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlXHJcbiAgICAgICAgLnVwbG9hZEltYWdlKHVybCwgZmlsZUhvbGRlci5maWxlLCB0aGlzLmhlYWRlcnMsIHRoaXMucGFydE5hbWUsIGN1c3RvbUZvcm0sIHRoaXMud2l0aENyZWRlbnRpYWxzKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICByZXNwb25zZSA9PiB0aGlzLm9uUmVzcG9uc2UocmVzcG9uc2UsIGZpbGVIb2xkZXIpLFxyXG4gICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uUmVzcG9uc2UoZXJyb3IsIGZpbGVIb2xkZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUZpbGUoZmlsZUhvbGRlcik7XHJcbiAgICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudXBsb2FkRmluaXNoZWQuZW1pdChmaWxlSG9sZGVyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmlsZURyb3BEaXJlY3RpdmUgfSBmcm9tICcuL2ZpbGUtZHJvcC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBJbWFnZVVwbG9hZFNlcnZpY2UgfSBmcm9tICcuL2ltYWdlLXVwbG9hZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW1hZ2VVcGxvYWRDb21wb25lbnQgfSBmcm9tICcuL2ltYWdlLXVwbG9hZC9pbWFnZS11cGxvYWQuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBJbWFnZVVwbG9hZENvbXBvbmVudCxcclxuICAgIEZpbGVEcm9wRGlyZWN0aXZlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbSW1hZ2VVcGxvYWRDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVVwbG9hZE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogSW1hZ2VVcGxvYWRNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW0ltYWdlVXBsb2FkU2VydmljZV1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxNQUthLGlCQUFpQjtJQUg5QjtRQUtZLGFBQVEsR0FBMEIsSUFBSSxZQUFZ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