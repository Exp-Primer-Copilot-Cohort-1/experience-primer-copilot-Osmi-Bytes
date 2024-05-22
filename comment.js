// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(request, response){
  var urlParsed = url.parse(request.url, true);

  if(urlParsed.pathname == '/comment'){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('Comment posted: ' + urlParsed.query.comment);
  } else {
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.end('404: Page not found');
  }
});

server.listen(3000, function(){
  console.log('Server is listening on port 3000');
});
