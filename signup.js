const path = require('path');


module.exports = (signup,connection) =>{

    signup

        //end point for connecting html page to my express page:-

        .get('/',(req,res)=>{
               res.sendFile('/home/bhaskar/ex/front_back/login and signup html/sinup.html')       
        })

        //end point for getting the data form html page and stored in to database:-
        .post('/',(req,res)=>{
            
            var data = [[req.body.firstname,req.body.lastname,req.body.username,req.body.password]]

            console.log(data);

            let problem = "insert into stable(firstname,lastname,username,password) values ?"


            connection.query(problem,[data],(err,rows)=>{
                if (err) throw err;
                console.log("signup successfully!")
            })
            res.sendFile('/home/bhaskar/ex/front_back/login and signup html/finalsignup.html')
        })

    };




















