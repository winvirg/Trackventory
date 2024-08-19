import { Router } from 'express';
import { createVendedorController } from '../controller/vendedor/createVendedor';
import { getVendedoresController } from '../controller/vendedor/getVendedores';
import { getVendedorByIdController } from '../controller/vendedor/getVendedorById';
import { updateVendedorController } from '../controller/vendedor/updateVendedor';
import { deleteVendedorController } from '../controller/vendedor/deleteVendedor';

const router = Router();

router.post('/vendedor', createVendedorController);
router.get('/vendedores', getVendedoresController);
router.get('/vendedor/:id', getVendedorByIdController);
router.put('/vendedor/:id', updateVendedorController);
router.delete('/vendedor/:id', deleteVendedorController);

export default router;
