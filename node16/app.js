const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const express = require('express');
//CREATE EXPRESS APP
const app = express();
app.use(cors());
app.use(bodyParser.json());

// DECLARE JWT-secretconst
 JWT_Secret = 'tecsup2019';
 var testUser = { email: 'tecsup@mail.com', password: '123456'};
 var token = "";

 app.post('/api/authenticate', (req, res) => {  
 if (req.body) {    
 var user = req.body; 
    console.log(user) 
       if (testUser.email===req.body.email && testUser.password === req.body.password) { 
            token = jwt.sign(user, JWT_Secret);    
              res.status(200).send({   
             signed_user: user,    
            token: token     
                        });   
             } else { 
                res.status(403).send({ 
                errorMessage: 'Authorization required!'      });  
                  }  
                  } else {
                    res.status(403).send({    
                  errorMessage: 'Please provide email and password'    }); 
                   }});
    app.get('/api/logout',(req, res)=>{
    	token = "";
    res.json({ logout: 'ok' });
  });

    //Middleware
    app.use(function(req, res, next){
    req_token = req.headers.authorization;
    if(token!='' && token!=null && token==req_token){
    	next();
    }
    else{
      res.status(403).send({
      	errorMessage: 'Authorization required!' });
  }});

    app.get('/api/listar', (req, res) => {
    let productos = [{
     nombre: 'chocosoda',
      precio: '0.80'},
      { nombre: 'fanta', precio: '1.80'},
      { nombre: 'sublime', precio: '1.50'},];
      res.json(productos);

});
app.listen(3000, () => console.log('Server started on port 3000'));





































































