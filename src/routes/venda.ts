import { Router } from 'express';
import { createVendaController } from '../controller/venda/createVenda';
import { getVendasController } from '../controller/venda/getVendas';
import { getVendaByIdController } from '../controller/venda/getVendaById';
import { updateVendaController } from '../controller/venda/updateVenda';
import { deleteVendaController } from '../controller/venda/deleteVenda';

const router = Router();

router.post('/venda', createVendaController);
router.get('/vendas', getVendasController);
router.get('/venda/:id', getVendaByIdController);
router.put('/venda/:id', updateVendaController);
router.delete('/venda/:id', deleteVendaController);

export default router;
