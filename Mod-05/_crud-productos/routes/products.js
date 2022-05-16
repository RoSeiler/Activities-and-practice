// ************ Require's ************
const express = require('express');
const router = express.Router();
const path= require('path');


// ************ Controller Require ************
const productsController = require('../controllers/productsController');


// ************ Multer Require ************

const multer=require("multer");

// ************ Multer setup ************
const multerDiskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, "../public/uploads")) //la carpeta uploads se crea automaticamente
    },

    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);//para q el nombre de la img sea dinamico y no se pise cuando se carga una tras otra
      cb(null,uniqueSuffix + "_" + file.fieldname + path.extname(file.originalname));//agregamos path y su propiedad
    }
  });
  

  const upload = multer({ storage: multerDiskStorage})// la const upload es la q vamos a usar en nuestras RUTAS  donde la necesite



/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); // muestra todos los productos

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); // muestra el formulario de creación
router.post('/', upload.single("productImage"), productsController.store); // almacena la información en la DB
                                                    //agregamos el objeto upload que habiamos creado con multer mas arriba y usamos el metodo single. Este metodo lleva un argumento que es el MISMO NOMBRE que le pusimos al name en el formulario

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', productsController.detail); // muestra el detalle de un producto

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/:id', productsController.update); //implementar aca todo lo de recien, lo de la imagen, y que pasa si no me mandan img??

/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy); 


module.exports = router;
