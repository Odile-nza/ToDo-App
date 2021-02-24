import express from  'express'
import * as userController from '../controllers/userController'
import * as authController from '../controllers/authController'

const router = express.Router();

router.post('/signup',authController.signUp)
router.post('/login',authController.login)

router
.route('/')
.get(authController.protect,userController.getAllUsers)
.post(userController.createUser);

router
.route('/:id')
.get(userController.getUser)
.delete(userController.deleteUser)
.patch(userController.updateUser);

export default router;