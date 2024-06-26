const express = require('express');

const router = express.Router();
const controller = require('../controller/Controller');
const interiorcontroller=require('../controller/Interiorpage')
const admincontroller=require('../controller/Admincontroller')
const contactcontroller=require('../controller/Contactcontroller')
const replycontroller=require('../controller/Replycontroller')
const registerusercontroller=require('../controller/registerusercontroller')
const path=require('path')


const multer=require('multer');



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

router.get('/finddata',controller.finddata)

// delete projects
// router.delete('/deletedata/:id',controller.deletearchitectureprojects)





router.get('/projects/finddata',controller.finddata)
router.get('/findbyid/:id',controller.findbyid)



// Interior page


router.post('/datapostinterior',upload.array("image",10),interiorcontroller.interior)
router.get('/projects/finddatainterior',interiorcontroller.finddatainterior)
router.get('/findbyid/:id',interiorcontroller.findbyidinterior)
router.get('/interior/finddata',interiorcontroller.finddatainterior)


// admin login


router.post('/adminregister',admincontroller.adminregister)

router.post('/admin/adminlogin',admincontroller.adminlogin)


// contact

router.post('/contactquery',contactcontroller.contactquery)
router.get('/contact/findcontactdata',contactcontroller.findquery)

router.get('/contact/finddatabyidcontact/:id',contactcontroller.findbyidcontact)





// reply to user


router.post('/admin/reply/:queryid',replycontroller.Adminreply)





// Registered users




router.post("/Registereducation", upload.single('profile'), registerusercontroller.registeruserforedu);
router.get("/Registereducation/finddata",registerusercontroller.finddata)














module.exports = router;