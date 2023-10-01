const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const postController = require('../controllers/postController');
const subAdminController = require('../controllers/subAdminController');
const adminController = require('../controllers/adminController');

router.get('/user/create', userController.create);
router.get('/user/read', userController.read);
router.get('/user/delete', userController.delete);
router.get('/user/update', userController.update);

router.get('/post/create', postController.create);
router.get('/post/read', postController.read);
router.get('/post/delete', postController.delete);
router.get('/post/update', postController.update);

router.get('/subAdmin/create', subAdminController.create);
router.get('/subAdmin/read', subAdminController.read);
router.get('/subAdmin/delete', subAdminController.delete);
router.get('/subAdmin/update', subAdminController.update);

router.get('/adnin/create', adminController.create);
router.get('/adnin/read', adminController.read);
router.get('/adnin/delete', adminController.delete);
router.get('/adnin/update', adminController.update);


module.exports = router;