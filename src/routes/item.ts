import { Router } from 'express';
import {createItemController} from '../controller/item/createItem'
import {getItemsController} from '../controller/item/getItems'
import {getItemByIdController} from '../controller/item/getItemById'
import {updateItemController} from '../controller/item/updateItem'
import {deleteItemController} from '../controller/item/deleteItem'

const router = Router();

router.post('/item', createItemController);
router.get('/items', getItemsController);
router.get('/item/:id', getItemByIdController);
router.put('/item/:id', updateItemController);
router.delete('/item/:id', deleteItemController);

export default router;
