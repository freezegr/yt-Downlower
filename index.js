const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const contentDisposition = require('content-disposition');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.static(__dirname));

app.set('view engine', 'ejs')
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Server is ready!');
});

app.get('/', (req, res) => { 
  res.render('index')
})

app.get('/download', async (req,res) => {
  var URL = req.query.URL;
  var type = req.query.type;
  console.log(type)
  console.log(URL)
  let info = await ytdl.getInfo(URL);
  console.log(info.title)
  if(type == 'mp3'){
    let mp3title = `${info.title}.mp3`
    console.log(mp3title)
    res.header('Content-Disposition', contentDisposition(mp3title));  
    ytdl(URL, {
      format: 'mp3',
      quality: 'highestaudio',
      filter: 'audioonly'
    }).pipe(res);
  }else {
    let mp4Title = `${info.title}.mp4`
    res.header('Content-Disposition', contentDisposition(mp4Title));
    ytdl(URL, {
      form: 'mp4'
    }).pipe(res)
  }
});
