var express = require('express');
const nodemailer = require("nodemailer");
var app = express();
require("dotenv").config();
var PORT = 5000;
const cors =require("cors");
const pool =require("./db");
const { test } = require('media-typer');



//middleware
app.use(cors());
app.use(express.json());

//Nodemailer 
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      pass: process.env.WORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
   });

   transporter.verify((err, success) => {
    err
      ? console.log(err)
      : console.log(`=== Server is ready to take messages: ${success} ===`);
   });

    app.post("/send-create-event", function (req, res) {
     let mailOptions = {
         from: process.env.EMAIL,
         to:`${req.body.data.emails[0]}`,
         subject: `Please Confirm Email: ${req.body.data.emails[0]}`,
         text: `${req.body.data.secretToken}`,
       };

       transporter.sendMail(mailOptions, function (err, data) {
         if (err) {
           res.json({
             status: "fail",
           });
         } else {
           console.log("== Message Sent ==");
           res.json({
             status: "success",
           });
         }
       });
     })
   
    app.post("/send", function (req, res) {
    let mailOptions = {
        from: process.env.EMAIL,
        to:`${req.body.mailerState.email}`,
        subject: `Please Confirm Email: ${process.env.EMAIL}`,
        text: `${req.body.mailerState.message}`,
      };
   
      transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
          res.json({
            status: "fail",
          });
        } else {
          console.log("== Message Sent ==");
          res.json({
            status: "success",
          });
        }
      });
   });

//route to handle when user clicks on the confirmation email



//routes
//create a event request using the getVolunteers form
//to be added to Schedule table
app.post("/create-event", async(req,res)=>{
    try{
        const {
            type, title, names, 
            emails, tutoringSubjects, 
            tutoringTypes, comment, 
            link, beginTimes, endTimes, 
            membersSignedUp, numSpots, 
            approved, phones, dates, 
            locations, confirmed, secretToken
        } = req.body;

        const newEvent=await pool.query(
            "Insert INTO schedule (type, title, names, emails, tutoring_subjects, tutoring_types, comment, link, begin_times, end_times, members_signed_up, num_spots, approved, phones, dates, locations, confirmed, secret_token) VALUES($1,$2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING *",  
            [type, title, names, 
            emails, tutoringSubjects, 
            tutoringTypes, comment, 
            link, beginTimes, endTimes, 
            membersSignedUp, numSpots, 
            approved, phones, dates, 
            locations, confirmed, secretToken]);
       
            res.json(newEvent);

    } catch (err){
        console.error(err.message); 
    }
});


//create a vo
app.post("/vo", async(req,res)=>{
    try{
        const {title, description, date, starttime, endtime}=req.body;

        const newVo=await pool.query(
            "Insert INTO vo (title,description, date, starttime, endtime) VALUES($1,$2, $3, $4, $5) RETURNING *",  
            [title, description, date, starttime, endtime]);
       
            res.json(newVo);

    } catch (err){
        console.error(err.message); 
    }
});

//get all vo
app.get("/vo", async (req, res)=>{
    try{
        const allVos=await pool.query("SELECT * FROM vo");
        res.json(allVos.rows);
    }catch(err){
        console.error(err.message)
    }
});

//get todo
app.get("/vo/:id",  async(req,res)=>{
    try{
        const{id}=req.params;
        const vo=await pool.query("SELECT * FROM vo WHERE vo_id = $1", 
        [id])
        res.json(vo.rows[0])
    }catch (err){
        console.error(err.message);
    }
});

//update a todo
app.put("/vo/:id", async(req,res)=>{
    try{
        const {id} =req.params;
        const{title, description, date, starttime, endtime}=req.body
        const updateVo=await pool.query("UPDATE vo SET title =$1, description = $2, date=$3, starttime=$4, endtime=$5 WHERE vo_id=$6", 
        [title, description, date, starttime, endtime, id])

        res.json("Vo was updated")
    }catch (err){
        console.error(err.message)
    }
})


//delete a todo
app.delete("/vo/:id", async (req, res)=>{
    try{
        const {id}= req.params
        const deleteVo=await pool.query("DELETE FROM vo WHERE vo_id = $1",
        [id]);
        res.json("Vo was deleted");
    }catch(err){
        console.error(err.message)
    }
});


 
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})

//test table
app.post("/test", async(req,res)=>{
    try{
        const {time}=req.body;

        const newTest=await pool.query(
            "Insert INTO test (time) VALUES(ARRAY[$1]) RETURNING *",  
            [time]);
       
            res.json(newTest);

    } catch (err){
        console.error(err.message); 
    }
});