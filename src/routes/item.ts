import { Router } from 'express';
import {createItemController} from '../controller/item/createItem'
import {getItemsController} from '../controller/item/getItems'
import {getItemByIdController} from '../controller/item/getItemById'
import {updateItemController} from '../controller/item/updateItem'
import {deleteItemController} from '../controller/item/deleteItem'
import { authenticateToken } from '../../src/middleware/auth'

const router = Router();

router.post('/item', authenticateToken, createItemController);
router.get('/items', authenticateToken, getItemsController);
router.get('/item/:id', authenticateToken, getItemByIdController);
router.put('/item/:id', authenticateToken, updateItemController);
router.delete('/item/:id', authenticateToken, deleteItemController);

export default router;
