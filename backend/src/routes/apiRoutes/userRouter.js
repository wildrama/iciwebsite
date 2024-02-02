import { Router } from 'express';
import { 
    registerUserController,
    loginUserController,
    recoverPasswordController,
    getTokenController,
    deleteUserController,
    getUsersController,
    changeRoleUserController
} from '../../controllers/userController.js';
import { ensureIsOwner } from '../../middlewares/ensureIsOwner.js';
import { ensureIsOwnerOrAdmin } from '../../middlewares/ensureIsOwnerOrAdmin.js';
import { passwordValidate } from '../../middlewares/validators/passwordValidator.js';
import { checkAuth, checkAuthRegisterTeacher, checkAuthToRecoverPass } from '../../jwt/auth.js';
const router = Router();

router.post('/register', getTokenController, checkAuthRegisterTeacher, registerUserController);
router.put('/login', loginUserController);
router.put('/recover', getTokenController, checkAuthToRecoverPass, passwordValidate, recoverPasswordController);
router.delete('/:userId', checkAuth, ensureIsOwner, deleteUserController);
router.get('/all', checkAuth, ensureIsOwnerOrAdmin, getUsersController);
router.put('/role/:userId', checkAuth, ensureIsOwner, changeRoleUserController);

export default router;