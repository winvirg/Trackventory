import { Router } from 'express';
import { createProdutoController } from '../controller/produto/createProduto';
import { getProdutosController } from '../controller/produto/getProdutos';
import { getProdutoByIdController } from '../controller/produto/getProdutoById';
import { updateProdutoController } from '../controller/produto/updateProduto';
import { deleteProdutoController } from '../controller/produto/deleteProduto';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.post('/produto', authenticateToken, createProdutoController);
router.get('/produtos', authenticateToken, getProdutosController);
router.get('/produto/:cod_barras', authenticateToken, getProdutoByIdController);
router.put('/produto/:cod_barras', authenticateToken, updateProdutoController);
router.delete('/produto/:cod_barras', authenticateToken, deleteProdutoController);

export default router;
