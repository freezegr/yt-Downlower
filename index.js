const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');

const app = express();
app.use(cors());
app.use(express.static(__dirname));

app.set('view engine', 'ejs')
app.listen(8080, () => {
  console.log('Server is ready!');
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
