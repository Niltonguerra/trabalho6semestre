"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Administrator = void 0;
const common_1 = require("@nestjs/common");
const Administrator = (...args) => (0, common_1.SetMetadata)('administrator', args);
exports.Administrator = Administrator;
//# sourceMappingURL=administrator.decorator.js.map