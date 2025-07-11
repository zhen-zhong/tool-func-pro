"use strict";
// ⚙️ 自动生成的工具函数汇总文件，请勿手动修改
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toFixedFix = exports.throttle = exports.simpleQsStringify = exports.getQueryParam = exports.getBase64 = exports.formatTime = exports.formatThousands = exports.formatFileSize = exports.extractVideoFrame = exports.deepClone = exports.debounce = exports.copyToClipboard = void 0;
const copyToClipboard_1 = __importDefault(require("./tools/copyToClipboard"));
exports.copyToClipboard = copyToClipboard_1.default;
const debounce_1 = __importDefault(require("./tools/debounce"));
exports.debounce = debounce_1.default;
const deepClone_1 = __importDefault(require("./tools/deepClone"));
exports.deepClone = deepClone_1.default;
const extractVideoFrame_1 = __importDefault(require("./tools/extractVideoFrame"));
exports.extractVideoFrame = extractVideoFrame_1.default;
const formatFileSize_1 = __importDefault(require("./tools/formatFileSize"));
exports.formatFileSize = formatFileSize_1.default;
const formatThousands_1 = __importDefault(require("./tools/formatThousands"));
exports.formatThousands = formatThousands_1.default;
const formatTime_1 = __importDefault(require("./tools/formatTime"));
exports.formatTime = formatTime_1.default;
const getBase64_1 = __importDefault(require("./tools/getBase64"));
exports.getBase64 = getBase64_1.default;
const getQueryParam_1 = __importDefault(require("./tools/getQueryParam"));
exports.getQueryParam = getQueryParam_1.default;
const simpleQsStringify_1 = __importDefault(require("./tools/simpleQsStringify"));
exports.simpleQsStringify = simpleQsStringify_1.default;
const throttle_1 = __importDefault(require("./tools/throttle"));
exports.throttle = throttle_1.default;
const toFixedFix_1 = __importDefault(require("./tools/toFixedFix"));
exports.toFixedFix = toFixedFix_1.default;
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
