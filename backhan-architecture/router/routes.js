const express = require('express');

const router = express.Router();
const controller = require('../controller/Controller');
const interiorcontroller=require('../controller/Interiorpage')
const admincontroller=require('../controller/Admincontroller')
const contactcontroller=require('../controller/Contactcontroller')
const replycontroller=require('../controller/Replycontroller')
const registerusercontroller=require('../controller/registerusercontroller')
const sketchescontroller=require("../controller/Skechescontroller")
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



  // condition for pdf {resume} and profile image upload

  const fileFilter = (req, file, cb) => {
    if (file.fieldname === 'resume') {
      // Accept PDF files only for resume
      if (file.mimetype === 'application/pdf') {
        cb(null, true);
      } else {
        cb(new Error('Invalid file type, only PDFs are allowed for resume!'), false);
      }
    } else if (file.fieldname === 'image') {
      // Accept image files only for profile
      if (file.mimetype.startsWith('image/')) {
        cb(null, true);
      } else {
        cb(new Error('Invalid file type, only images are allowed for profile!'), false);
      }
    } else {
      cb(new Error('Invalid fieldname!'), false);
    }
  };







  
  const upload = multer({ storage: storage, fileFilter: fileFilter });


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
router.get('/interiorfindbyid/:id',interiorcontroller.findbyidinterior)
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




router.post("/Registereducation", upload.fields([{ name: 'image', maxCount: 1 }, { name: 'resume', maxCount: 1 }]), registerusercontroller.registeruserforedu);
router.get("/Registereducation/finddata",registerusercontroller.finddata)




// sketches 

router.post('/sketchespost',upload.array("image",6),sketchescontroller.saveSketches)
router.get("/getdata",sketchescontroller.finddata)










module.exports = router;