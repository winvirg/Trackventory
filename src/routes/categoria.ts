import { Router } from 'express';
import { createCategoriaController } from '../controller/categoria/createCategoria';
import { getCategoriasController } from '../controller/categoria/getCategorias';
import { getCategoriaByIdController } from '../controller/categoria/getCategoriaById';
import { updateCategoriaController } from '../controller/categoria/updateCategoria';
import { deleteCategoriaController } from '../controller/categoria/deleteCategoria';

const router = Router();

router.post('/categoria', createCategoriaController);
router.get('/categorias', getCategoriasController);
router.get('/categoria/:cod', getCategoriaByIdController);
router.put('/categoria/:cod', updateCategoriaController);
router.delete('/categoria/:cod', deleteCategoriaController);

export default router;
