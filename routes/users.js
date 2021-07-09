var express = require('express');
var router = express.Router();
const { saveData, findData, updateData, deleteData} = require('../modules/UserModule')
const {sendMail } = require('../modules/mail')

router.get('/getall', findData);
router.post('/savedata', saveData);
router.put('/updatedata/:ids', updateData);
router.delete('/deletedata/:id', deleteData);
router.post('/sendmail', sendMail);

module.exports = router;
