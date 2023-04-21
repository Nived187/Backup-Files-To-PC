

const express = require('express')
const multer = require('multer')


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./img')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({storage:storage})
const app = express()

app.get('/',(req,res)=>{
    res.send('server Running')
}).listen(3000)

app.get('/backup',(req,res)=>{
    res.sendFile(__dirname+'/htmls/backup.html')
})

app.post('/backup',upload.array('file'),(req,res)=>{

   res.send('ok')    
    
})


