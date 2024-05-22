// create web server 
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

// create web server
http.createServer(function(request, response) {
    if (request.method == 'GET') {
        fs.readFile('comments.html', function(error, data) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
        });
    } else if (request.method == 'POST') {
        request.on('data', function(data) {
            var query = qs.parse(data.toString());
            var comment = query.comment;
            console.log(comment);
            fs.appendFile('comment.txt', comment + '\n', 'utf8', function(error) {
                response.writeHead(302, { 'Location': '?' });
                response.end();
            });
        });
    }
}).listen(52273, function() {
    console.log('Server Running at https:// ');
}   );