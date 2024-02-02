import { Router } from 'express';
import { 
    registerStudentController,
    getAllStudentsController,
    getStudentByIdController,
    deleteStudentController,
    modifyStudentController
} from '../../controllers/studentController.js';
import { ensureIsOwnerOrAdmin } from '../../middlewares/ensureIsOwnerOrAdmin.js'
import { ensureIsOwner } from '../../middlewares/ensureIsOwner.js';
import { checkAuth } from '../../jwt/auth.js';
import express from 'express';
import { uploadPayment } from '../../middlewares/multer.js';
import dirname from '../../utils/utils.js';
import path from 'path';
const router = Router();

router.use('/payment', express.static('src/public/paymentReceipt'))

router.post('/cash', registerStudentController);
router.post('/transfer', uploadPayment.single('file'), registerStudentController);
router.get('/', checkAuth, getAllStudentsController);
router.get('/:id', checkAuth, getStudentByIdController);
router.delete('/:id', checkAuth, ensureIsOwner, deleteStudentController);
router.put('/:id', checkAuth, ensureIsOwnerOrAdmin, modifyStudentController);

export default router;