import { Router } from 'express';
import spaController from '../controllers/spaController';

class SpaRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', spaController.getAllServiceSpa);
        this.router.get('/:id', spaController.getServiceSpa);
        this.router.get('/horario/:id', spaController.getHorario);
    }

}

const spaRoutes = new SpaRoutes();
export default spaRoutes.router;