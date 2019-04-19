const router = require('express').Router();
const controller = require('../controllers/index');
const { validateInput } = require('../middleware/validator');

router.post('/newpost', validateInput, controller.createPost);


module.exports = router;
