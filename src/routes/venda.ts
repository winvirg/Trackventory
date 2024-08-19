import { Router } from 'express';
import { createVendaController } from '../controller/venda/createVenda';
import { getVendasController } from '../controller/venda/getVendas';
import { getVendaByIdController } from '../controller/venda/getVendaById';
import { updateVendaController } from '../controller/venda/updateVenda';
import { deleteVendaController } from '../controller/venda/deleteVenda';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.post('/venda', authenticateToken, createVendaController);
router.get('/vendas', authenticateToken, getVendasController);
router.get('/venda/:id', authenticateToken, getVendaByIdController);
router.put('/venda/:id', authenticateToken, updateVendaController);
router.delete('/venda/:id', authenticateToken, deleteVendaController);

export default router;
