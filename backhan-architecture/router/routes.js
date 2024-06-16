const express = require('express');

const router = express.Router();
const controller = require('../controller/Controller');
const path=require('path')


const multer=require('multer')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads'); 
    },
    filename: (req, file, cb) => {
      cb(null,Date.now()+ path.extname(file.originalname)); 
    },
  });
  
  const upload = multer({ storage: storage });


router.get('/',controller.Products)

router.post('/datapost',upload.array("image",10),controller.architecture)
router.post('/interior',upload.array("image",10),controller.interior)
router.get('/projects/interior',controller.interior)

// contact

router.post('/contactquery',controller.contactquery)







router.get('/projects/finddata',controller.finddata)
router.get('/findbyid/:id',controller.findbyid)

















module.exports = router;