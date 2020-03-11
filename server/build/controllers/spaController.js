"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class SpaController {
    getAllServiceSpa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let serviciosSpa;
            serviciosSpa = yield database_1.default.query('SELECT * FROM servicio_spa');
            res.json(serviciosSpa);
        });
    }
    getServiceSpa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            let serviciosSpa = '';
            serviciosSpa = yield database_1.default.query('SELECT * FROM servicio_spa WHERE id = ?', [id]);
            return res.json(serviciosSpa);
        });
    }
    getHorario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            let horarioServicioSpa = '';
            horarioServicioSpa = yield database_1.default.query('SELECT * FROM horario_servicio_spa WHERE id_servicio_spa = ?', [id]);
            return res.json(horarioServicioSpa);
        });
    }
}
const spaController = new SpaController();
exports.default = spaController;
