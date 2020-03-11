"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const spaController_1 = __importDefault(require("../controllers/spaController"));
class SpaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', spaController_1.default.getAllServiceSpa);
        this.router.get('/:id', spaController_1.default.getServiceSpa);
        this.router.get('/horario/:id', spaController_1.default.getHorario);
    }
}
const spaRoutes = new SpaRoutes();
exports.default = spaRoutes.router;
