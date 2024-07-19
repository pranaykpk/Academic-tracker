import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import user from "./models/user.js";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import syllabus from "./models/syllabus.js";
import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs";
import progress from "./models/progress.js";
import fs from "fs";
import path from "path";

const app = express()
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }))

const con = mongoose.connect("mongodb://localhost:27017/realtimeproject")

app.get("/", (req, res) => {
    res.send("hello World")
})
app.post('/register', async (req, res) => {
    const { username, password } = req.body
    const existingUser = await user.findOne({ username });
    if (existingUser) {
        console.log("existing user");
        return res.status(400).json({ status: "error", error: "duplicate username" });
    }
    try {
        const userPass = await bcrypt.hash(password, 10)
        await new user({ username, password: userPass }).save();
        await new progress({ username }).save();
        res.json({ status: "ok" })
    }
    catch (err) {
        console.log(err);
        res.json({ status: "error", error: "duplicate username" })
    }
})
app.post('/login', async (req, res) => {
    const useracc = await user.findOne({
        username: req.body.username,

    })
    if (useracc) {
        let result = await bcrypt.compare(req.body.password, useracc.password)
        console.log(req.body.password, useracc.password, result);
        if (result) {
            console.log(req.body.password, useracc.password);

            res.status(200).json({ username: req.body.username });
        } else {
            res.status(201).json({ status: "error", error: "something is wrong" })
        }
    }
    else {
        console.log("empty");
        res.status(400)
    }
})
app.get('/syllabus/:code', async (req, res) => {

    try {
        const syllabusInfo = await syllabus.find({ inUrl: req.params.code });
        if (syllabusInfo.length < 1) {
            res.send("something wrong")
        }
        else {
            res.send(syllabusInfo)
        }

    } catch (error) {
        console.log(error);
    }
})
app.get('/progress/:username/:subname', async (req, res) => {
    const sub = req.params.subname;
    // console.log(sub);
    try {
        const subInfo = await progress.find({ username: req.params.username });
        res.status(200).json(subInfo)
    }
    catch (err) {
        res.status(400).json({ error: "something is wrong" })
        console.log(err);
    }
})
app.post('/addTopic/:username/:subname/:unit', async (req, res) => {
    const { username, subname, unit } = req.params;
    const { topic } = req.body;
  
    try {
      const subInfo = await progress.findOne({ username: username });
  
      if (!subInfo) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const updatePath = `subjects.${subname}.${unit}`;
      await progress.findOneAndUpdate(
        { username: username },
        { $push: { [updatePath]: topic } },
        { new: true }
      );
  
      const updatedSubInfo = await progress.findOne({ username: username });
      res.status(200).json(updatedSubInfo.subjects[subname][unit]);
    } catch (error) {
      console.error('Error adding topic:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.post('/progressdelete/:username/:subname/:unit', async (req, res) => {
    const { username, subname, unit } = req.params;
    const { topic } = req.body;
  
    try {
      console.log(username, subname, unit, req.body);
  
      const updatePath = `subjects.${subname}.${unit}`;
  
      const result = await progress.updateOne(
        { username },
        { $pull: { [updatePath]: topic } }
      );
  
      if (result.nModified === 0) {
        return res.status(404).json({ message: 'Topic not found' });
      }
  
      const updatedSubInfo = await progress.findOne({ username });
      
      res.status(200).json(updatedSubInfo.subjects[subname][unit]);
    } catch (error) {
      console.error('Error deleting topic:', error);
      res.status(400).json({ error: "Something went wrong" });
    }
  });
// app.post('/progressdelete/:username/:subname/:unit', async (req, res) => {
//     const { username, subname, unit } = req.params;
//     console.log(username, subname, unit, req.body);
//     try {
//         const subInfo = await progress.updateOne(
//             { username },
//             { $pull: { [`${subInfo[0]}.subjects.${subname}.${unit}`]: req.body.topic } }
//         );
//         console.log("This is delete");
//         console.log(subInfo[0].subjects[subname][unit]);
//         res.status(200).json(subInfo[0].subjects[subname][unit])
//     } catch (error) {
//         console.log(error);
//         res.status(400).json({ error: "something is wrong" })
//     }

// })
app.get('/getprogress/:username/:subname/:unit', async (req, res) => {
    const { username, subname, unit } = req.params;
    console.log(username, subname, unit);
    try {
        const subInfo = await progress.find({ username });
        console.log("This is get");
        // console.log(subInfo[0].subjects[subname][unit]);
        res.status(200).json(subInfo[0].subjects[subname][unit]) 
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "something is wrong" })
    }

})

app.get('/resources/:inUrlSub',(req,res)=>{
    const files = fs.readdirSync(`./resources/${req.params.inUrlSub}`)
    if(files.length>0){
        res.json(files)
    }
    else{
        res.status(201).json({message:"no files exist"})
    }
})


app.listen(3000, () => {
    console.log(`listening at ${port}`);
})