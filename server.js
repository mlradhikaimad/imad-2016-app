var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleOne={
  title:'Article1',
  head:`Article One`;
  date:'Created on 29th september 2016',
  content: `<p>
        This is the first paragraph
    </p>
     <p>
        This is the second paragraph
    </p>
     <p>
        This is the third paragraph
    </p>`
  
      };
function creteTemplate(data)
{
    var title=data.title;
    var date=data.date;
    var head=data.head;
    var content=data.content;
}
var htmlTemplate=`
      <html>

<head>
    <title>
        
   ${title};       
    </title>
    <meta name="viewport" content="width-device-width,initial-scale=1"/>
<style>
.container{
    max-width: 800px;
    margin: 0 auto;
   color:blue;
   font-family:sans-serif;
}
</style>
</head>

<body>
    <div class="container">
    <div>
        <a href="/">Home</a>
    </div>
    <hr>
<div> ${head}; </div>
<div>      ${date}; </div>
<div>   ${content};     </div>


    </div>
</body>
</html>
      `;
      return htmlTemplate;
      }

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res)
{
     //res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
     createTemplate(articleone);
});
app.get('/article-two',function(req,res)
{
     res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three',function(req,res)
{
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
