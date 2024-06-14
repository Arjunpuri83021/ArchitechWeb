const express = require('express');

const router = express.Router();
const controller = require('../controller/Controller');
const interiorcontroller=require('../controller/Interiorpage')
const path=require('path')


const multer=require('multer');
const Interior = require('../modal/Interior');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads'); 
    },
    filename: (req, file, cb) => {
      cb(null,Date.now()+ path.extname(file.originalname)); 
    },
  });
  
  const upload = multer({ storage: storage });



  // architecture page



router.get('/',controller.Products)

router.post('/datapost',upload.array("image",10),controller.architecture)






router.get('/projects/finddata',controller.finddata)
router.get('/findbyid/:id',controller.findbyid)



// Interior page


router.post('/datapostinterior',upload.array("image",10),interiorcontroller.interior)
router.get('/projects/finddatainterior',interiorcontroller.finddatainterior)
router.get('/findbyid/:id',interiorcontroller.findbyidinterior)














module.exports = router;