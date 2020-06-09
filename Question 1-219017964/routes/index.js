const express = require('express');
const router = express.Router();
const user = require('../model/User')

//Home route
router.get('/', (req, res)=>{
    res.render('home')
});
router.get('/login',(req, res)=>{
    res.render('login');
})
// Registration route
router.get('/register', (req, res)=>{
    res.render('registration');
});
router.get('/patients', (req, res)=>{
    res.render('patients');
});

//Post route

router.post('/register', (req, res)=>{
    const registrationData = {
        
        name: req.body.name,
        password: req.body.password,
        age: req.body.age,
        level: req.body.level,
        program: req.body.program
    }
    User.findOne({studentID: registrationData.studentID}).then((user)=>{
        if(user){
            console.log('Sorry there is a Patient with that ID please check if your ID is correct');
            return res.redirect('/register')
        } else {
            User.create(registrationData).then((newUser)=>{
                res.redirect('/patients')
            })
        }
    })
});


router.get('/patients', (req, res)=>{
    user.find({}).then((users)=>{
        res.render('patients', {
            users: users.reverse()
        })
    }).catch((error)=>{
        res.json({
            msg: `Sorrr ${error.message}`
        })
    });
})



module.exports = router;
