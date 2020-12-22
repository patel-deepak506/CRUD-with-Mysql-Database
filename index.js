const express = require('express');
const db = require('./router/sql_db')
const app = express();
app.use(express.json())

// Get Data from Database

  // app.get('/user',(req, res)=>{
  //   db.query( 'SELECT * FROM details',(err,result)=>{
  //     res.send(result)
  //     if (err) throw err;
  //     console.log(result);
  //   });
  // });

// Insert Data in Database

  app.post('/users', (req, res) => {
    console.log(uuid());
    // res.send(req.body);
    console.log(count)
    let {id,name,age} = req.body;
    // let data = {
    //   id:req.body.id, 
    //   firstname:req.body.firstname,
    //   surname:req.body.surname  
    // }
    let sql = "INSERT INTO details (id, name, age) values(?,?,?)";          
  
    db.query(sql,[id,name,age], (err, rows) => {
  
      if(!err){  
        res.send("User successfully added");
      }else{
        console.log(err);
      }
    });
  });    
  // Delete data of Database

    app.delete('/delete/:id',(req,res)=>{
      db.query( 'DELETE FROM details WHERE id=?',[req.params.id],(err,result)=>{
        res.send(result)
        if (err) throw err;
        console.log("successful delete");
      });
    });
    
// Update data from database

    app.put('/update/:id',(req,res)=>{
      let {name,age} = req.body;
      let id = req.params.id;
      console.log(id, "this is params id");
      const updateQuery = "UPDATE `details` SET `name`=? ,`age`=? WHERE  `id`=?";      
  
      db.query(updateQuery,[name,age,id],(err,result)=>{
        console.log(result, "result data");
        if(!err){
          res.send("User successfully update");
        }else{
          console.log(err);
        }
        
      }); 

    });

  app.listen(2020, ()=>{
  console.log("successful");
  });
  
