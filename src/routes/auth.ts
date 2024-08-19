import { Router } from 'express';
import { loginController } from '../controller/auth/login';
import { logoutController } from '../controller/auth/logout';
import { authenticateToken } from '../../src/middleware/auth';

const router = Router();

router.post('/login', loginController);
router.post('/logout', authenticateToken, logoutController)

export default router;
