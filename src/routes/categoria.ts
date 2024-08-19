import { Router } from 'express';
import { createCategoriaController } from '../controller/categoria/createCategoria';
import { getCategoriasController } from '../controller/categoria/getCategorias';
import { getCategoriaByIdController } from '../controller/categoria/getCategoriaById';
import { updateCategoriaController } from '../controller/categoria/updateCategoria';
import { deleteCategoriaController } from '../controller/categoria/deleteCategoria';
import { authenticateToken } from '../../src/middleware/auth';

const router = Router();

router.post('/categoria', authenticateToken, createCategoriaController);
router.get('/categorias', authenticateToken, getCategoriasController);
router.get('/categoria/:cod', authenticateToken, getCategoriaByIdController);
router.put('/categoria/:cod', authenticateToken, updateCategoriaController);
router.delete('/categoria/:cod', authenticateToken, deleteCategoriaController);

export default router;
