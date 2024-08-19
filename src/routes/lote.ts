import { Router } from 'express';
import {createLoteController} from '../controller/lote/createLote';
import {getLotesController} from '../controller/lote/getLotes';
import {getLoteByIdController} from '../controller/lote/getLoteById';
import {updateLoteController} from '../controller/lote/updateLote';
import {deleteLoteController} from '../controller/lote/deleteLote';

const router = Router();

router.post('/lote', createLoteController);
router.get('/lotes', getLotesController);
router.get('/lote/:id', getLoteByIdController);
router.put('/lote/:id', updateLoteController);
router.delete('/lote/:id', deleteLoteController);

export default router;
