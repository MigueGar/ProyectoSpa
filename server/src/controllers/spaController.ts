import { Request, Response } from 'express';
import pool from '../database';

class SpaController {

    public async getAllServiceSpa(req: Request, res: Response) {
        let serviciosSpa;
        serviciosSpa = await pool.query('SELECT * FROM servicio_spa');
        res.json(serviciosSpa);
    }

    public async getServiceSpa(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        let serviciosSpa = '';
        serviciosSpa = await pool.query('SELECT * FROM servicio_spa WHERE id = ?', [id]);            
        return res.json(serviciosSpa)
    }

    public async getHorario(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        let horarioServicioSpa = '';
        horarioServicioSpa = await pool.query('SELECT * FROM horario_servicio_spa WHERE id_servicio_spa = ?', [id]);            
        return res.json(horarioServicioSpa)
    }

}

const spaController = new SpaController();
export default spaController;