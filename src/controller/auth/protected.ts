import { Router } from 'express';
import { authenticateToken } from '../../middleware/auth';

const router = Router();

router.get('/dados-protegidos', authenticateToken, (req, res) => {
  res.json({ message: 'Este é um dado protegido' });
});

export default router;
