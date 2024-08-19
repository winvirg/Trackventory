import { Router } from 'express';
import { createVendedorController } from '../controller/vendedor/createVendedor';
import { getVendedoresController } from '../controller/vendedor/getVendedores';
import { getVendedorByIdController } from '../controller/vendedor/getVendedorById';
import { updateVendedorController } from '../controller/vendedor/updateVendedor';
import { deleteVendedorController } from '../controller/vendedor/deleteVendedor';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.post('/vendedor', authenticateToken, createVendedorController);
router.get('/vendedores', authenticateToken, getVendedoresController);
router.get('/vendedor/:id', authenticateToken, getVendedorByIdController);
router.put('/vendedor/:id', authenticateToken, updateVendedorController);
router.delete('/vendedor/:id', authenticateToken, deleteVendedorController);

export default router;
