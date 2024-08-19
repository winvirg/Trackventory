import { Router } from 'express';
import { createProdutoController } from '../controller/produto/createProduto';
import { getProdutosController } from '../controller/produto/getProdutos';
import { getProdutoByIdController } from '../controller/produto/getProdutoById';
import { updateProdutoController } from '../controller/produto/updateProduto';
import { deleteProdutoController } from '../controller/produto/deleteProduto';

const router = Router();

router.post('/produto', createProdutoController);
router.get('/produtos', getProdutosController);
router.get('/produto/:cod_barras', getProdutoByIdController);
router.put('/produto/:cod_barras', updateProdutoController);
router.delete('/produto/:cod_barras', deleteProdutoController);

export default router;
