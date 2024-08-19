import { Router } from 'express';
import { createUsuarioController } from '../controller/usuario/createUsuario';
import { getUsuariosController } from '../controller/usuario/getUsuarios';
import { getUsuarioByIdController } from '../controller/usuario/getUsuarioById';
import { updateUsuarioController } from '../controller/usuario/updateUsuario';
import { deleteUsuarioController } from '../controller/usuario/deleteUsuario';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.post('/usuario', authenticateToken, createUsuarioController);
router.get('/usuarios', authenticateToken, getUsuariosController);
router.get('/usuario/:id', authenticateToken, getUsuarioByIdController);
router.put('/usuario/:id', authenticateToken, updateUsuarioController)
router.delete('/usuario/:id', authenticateToken, deleteUsuarioController)

export default router;
