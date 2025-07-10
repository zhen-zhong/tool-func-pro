"use strict";
// ⚙️ 自动生成的工具函数汇总文件，请勿手动修改
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const copyToClipboard_1 = __importDefault(require("./tools/copyToClipboard"));
const debounce_1 = __importDefault(require("./tools/debounce"));
const deepClone_1 = __importDefault(require("./tools/deepClone"));
const extractVideoFrame_1 = __importDefault(require("./tools/extractVideoFrame"));
const formatFileSize_1 = __importDefault(require("./tools/formatFileSize"));
const formatThousands_1 = __importDefault(require("./tools/formatThousands"));
const formatTime_1 = __importDefault(require("./tools/formatTime"));
const getBase64_1 = __importDefault(require("./tools/getBase64"));
const getQueryParam_1 = __importDefault(require("./tools/getQueryParam"));
const simpleQsStringify_1 = __importDefault(require("./tools/simpleQsStringify"));
const throttle_1 = __importDefault(require("./tools/throttle"));
const toFixedFix_1 = __importDefault(require("./tools/toFixedFix"));
const toolFun = {
    copyToClipboard: copyToClipboard_1.default,
    debounce: debounce_1.default,
    deepClone: deepClone_1.default,
    extractVideoFrame: extractVideoFrame_1.default,
    formatFileSize: formatFileSize_1.default,
    formatThousands: formatThousands_1.default,
    formatTime: formatTime_1.default,
    getBase64: getBase64_1.default,
    getQueryParam: getQueryParam_1.default,
    simpleQsStringify: simpleQsStringify_1.default,
    throttle: throttle_1.default,
    toFixedFix: toFixedFix_1.default,
};
exports.default = toolFun;
