"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(process.env.PORT, 10) || 4002,
    database: {
        uri: process.env.DATABASE_HOST ||
            'mongodb://localhost:27017/nestjs-federation',
    },
});
//# sourceMappingURL=configuration.js.map