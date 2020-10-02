const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const contentDisposition = require('content-disposition');
const fs = require('fs');
const ytsr = require('ytsr');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

app.set('view engine', 'ejs')
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Server is ready!');
});

app.get('/', (req, res) => { 
  res.render('index');
})

app.get('/test', (req, res) => {
  res.render('play');

});

app.get('/search', (req, res) => {
  res.render('search');
});

app.get('/api/search', async (req, res) => {
  const linkUrl = req.query.url;
  const errorEmssage = {"timestamp": new Date(), "path": "/api/search/", "status": "405", "error" : "Method Not Allowed", "message": "no url parameter"}
  if(linkUrl == undefined) return res.end(JSON.stringify(errorEmssage, null, 2))
  const response = await ytsr(linkUrl).catch(error=>{
    return res.redirect('https://yt-music-installer.herokuapp.com/search?error=noResult');
  })
  let theVideo = response.items.filter(i=>i.type == 'video')[0]
  if(!theVideo) return res.redirect('https://yt-music-installer.herokuapp.com/search?error=noResult')
  
  const song = {
    title: theVideo.title,
    url: theVideo.link
  };
  res.redirect("https://yt-music-installer.herokuapp.com/"+`?url=${song.url}&title=${song.title}`)
});

app.get('/download', async (req,res) => {
  const URL = req.query.URL;
  const type = req.query.type;
  if(URL == undefined) return res.send('<script>alert("The url is not true")</script>')
  if(type == undefined) return res.redirect('https://yt-music-installer.herokuapp.com/?error=noType');
  if(type != 'mp3' && type != 'mp4') return res.redirect('https://yt-music-installer.herokuapp.com/?error=falseType');
  console.log(type)
  console.log(URL)
  async function info(){
    try {
      return await ytdl.getInfo(URL);
    }catch(err) {
      return res.redirect('https://yt-music-installer.herokuapp.com/?error=falseVideo');
    }
  } 
  let inform = await info()
  if(inform.title == undefined) return;
  if(type == 'mp3'){
    let mp3title = `${inform.title}.mp3`
    console.log(mp3title)
    res.set({
      "Content-Type: audio/mpeg",
      'Content-Disposition', contentDisposition(mp3title))
    });  
    console.log(res)
    ytdl(URL, {
      format: 'mp3',
      quality: 'highestaudio',
      filter: 'audioonly'
    }).pipe(res);

  }else {
    let mp4Title = `${inform.title}.mp4`
    res.header('Content-Disposition', contentDisposition(mp4Title));
    ytdl(URL, {
      form: 'mp4',
      quality: 'highestvideo'
    }).pipe(res)
  }
});

app.use(function(req, res){
  res.status(404).render('404') 
  res.status(400).render('400');
});
