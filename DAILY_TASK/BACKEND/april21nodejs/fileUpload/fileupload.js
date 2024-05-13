const express=require('express');
const app=express();
const upload=require('express-fileupload');


app.use(upload());

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.post('/',(req,res)=>{
    console.log('inside post');
    if(req.files){
        var file=req.files.file;
        var filename=file.name;
        console.log(file);
        file.mv('./uploads/'+filename,function(err){
            if(err){
                res.send(err.message)
            }
            else{
                res.send('File has been uploaded')
            }
        })
    }
})

app.listen(4500,()=>{
    console.log('Listening');
})
