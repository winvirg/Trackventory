import { Router } from 'express';
import {createLoteController} from '../controller/lote/createLote';
import {getLotesController} from '../controller/lote/getLotes';
import {getLoteByIdController} from '../controller/lote/getLoteById';
import {updateLoteController} from '../controller/lote/updateLote';
import {deleteLoteController} from '../controller/lote/deleteLote';
import { authenticateToken } from '../../src/middleware/auth';

const router = Router();

router.post('/lote', authenticateToken, createLoteController);
router.get('/lotes', authenticateToken, getLotesController);
router.get('/lote/:id', authenticateToken, getLoteByIdController);
router.put('/lote/:id', authenticateToken, updateLoteController);
router.delete('/lote/:id', authenticateToken, deleteLoteController);

export default router;
