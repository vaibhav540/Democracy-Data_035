import express from 'express'
const router = express.Router();
import UserController from '../controllers/userController.js';
import passport from 'passport';
import accessTokenAutoRefresh from '../middlewares/accessTokenAutoRefresh.js';
import checkAdminRole from '../middlewares/checkAdminRole.js';

// Public Routes
 // ".register is our enpoint if someone trigger this UserController.userRegistration will invoke"
router.post('/register', UserController.userRegistration)
router.post('/verify-email', UserController.varifyEmail)
router.post('/login', UserController.userLogin)
router.post('/refresh-token', UserController.getNewAccessToken)
router.post('/reset-password-link', UserController.sendUserPasswordResetEmail)
router.post('/reset-password/:id/:token', UserController.userPasswordReset)




// Protected Routes
router.get('/me',accessTokenAutoRefresh, passport.authenticate('jwt',{ session : false}), UserController.userProfile)
router.post('/change-password', accessTokenAutoRefresh, passport.authenticate('jwt', { session: false }), UserController.changeUserPassword)
router.post('/logout',accessTokenAutoRefresh, passport.authenticate('jwt',{ session : false}), UserController.userLogout)

// Admin Routes
router.get('/admin/users', accessTokenAutoRefresh, passport.authenticate('jwt', { session: false }), checkAdminRole, UserController.getAllUsers);
router.delete('/admin/users/:id', accessTokenAutoRefresh, passport.authenticate('jwt', { session: false }), checkAdminRole, UserController.deleteUser);

export default router;
