const path = require('path');


module.exports = (login,connection) =>{

    login
        //end point for connecting html page to my express page:-

        .get('/',(req,res)=>{

            connection.query('select * from stable',(err,rows)=>{
               res.sendFile(path.join(__dirname,'./login and signup html/login.html'))
            })
        })

        //end point for getting the data form html page and stored in to database:-

        .post('/',(req,res)=>{
            var username = req.body.username;
            var password = req.body.password;
            let problem = "select * from stable"
            var flag = false;
            connection.query(problem,(err,rows)=>{

                if (err) throw err;
                var totaldata = rows;
                for(i of totaldata){
                    if(i.username == username){
                        if(i.password == password){
                            flag = true;
                            var result = "your successfully login!";
                        }
                        else{
                            var result = "password is wrong!";
                        }
                    }
                    else{
                            var result = "username is wrong!";
                    }
                }
                if(flag){
                    // console.log(result);
                    res.render('result',{answer:result})
                }
                else{
                    // console.log(result);
                    res.render('result',{answer:result})
                }
            })
        })
    };



