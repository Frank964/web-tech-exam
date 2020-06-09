const express = require('express');

const router = express.Router();
const {createMaterial,updateMaterial,deleteMaterial} =require('../controllers/material')

router.post("/user",createMaterial)

router.put("/edit",updateMaterial)

router.delete("/delete",deleteMaterial)