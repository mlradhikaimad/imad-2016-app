var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

      var articles={
          'article-one':
          {title:'Article1',
           head:'Article One',
           date:'Created on 29th september 2016',
           content: `<p>
                    This is the first paragraph of first article
                    </p>
                    <p>
                    This is the second paragraph of first article
                    </p>
                    <p>
                    This is the third paragraph of first article
                    </p>`
           },
           'article-two':
          {title:'Article2',
           head:'Article Two',
           date:'Created on 29th september 2016',
           content: `<p>
                    This is the first paragraph of second article
                    </p>
                    <p>
                    This is the second paragraph of second article
                    </p>
                    <p>
                    This is the third paragraph of second article
                    </p>`
           },
           'article-three':
          {title:'Article3',
           head:'Article Three',
           date:'Created on 29th september 2016',
           content: `<p>
                    This is the first paragraph of third article
                    </p>
                    <p>
                    This is the second paragraph of third article
                    </p>
                    <p>
                    This is the third paragraph of third article
                    </p>`
           }
                };
function createTemplate(data)
{
    var title=data.title;
    var date=data.date;
    var head=data.head;
    var content=data.content;

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
var counter=0;
app.get('/counter',function(req,res){

  counter=counter+1;
  res.send(counter.toString());
});

var names=[];
app.get('/submit-name',function(req,res){// URL: /submit-name?name=xxxx
    var name=req.query.name;
    names.push(name);
 
    res.send(JSON.stringify(names));
    
});

app.get('/:articleName',function(req,res)
{
     //res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
   var articleName=req.params.articleName;
    res.send( createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
