const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');

const app = express();
app.use(cors());

app.set('view engine', 'ejs')
app.listen(4000, () => {
  console.log('Server Works !!! At port 4000');
});

app.get('/', (req, res) => { 
  res.render('index')
})

app.get('/download', (req,res) => {
  var URL = req.query.URL;
  console.log(URL)
  res.header('Content-Disposition', 'attachment; filename="video.mp3"');
    ytdl(URL, {
      format: 'mp3'
    }).pipe(res);
});