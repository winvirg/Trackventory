import { Router } from 'express';
import { createUsuarioController } from '../controller/usuario/createUsuario';
import { getUsuariosController } from '../controller/usuario/getUsuarios';
import { getUsuarioByIdController } from '../controller/usuario/getUsuarioById';
import { updateUsuarioController } from '../controller/usuario/updateUsuario';
import { deleteUsuarioController } from '../controller/usuario/deleteUsuario';

const router = Router();

router.post('/usuario', createUsuarioController);
router.get('/usuarios', getUsuariosController);
router.get('/usuario/:id', getUsuarioByIdController);
router.put('/usuario/:id', updateUsuarioController)
router.delete('/usuario/:id', deleteUsuarioController)

export default router;
