/****************************************************************
 * This is simple server to handel a mock form post and get an
 * array of languages for a form select.  Not for production.
 * 
 * Use > node server.js 
 * to start the server.
 * 
 * It listens on 3100.
 * 
 * 
 ***************************************************************/
var http = require('http'); //built in http server in node.js.  Express is not needed here.
var formidable = require("formidable"); //allow easy use of forms
var util = require('util');

var server = http.createServer(function (req, res) {
    //setup cross-site headers to allow form on 3000 to talk to the server on 3100
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    
    //this will handle a mock post from the form
    if (req.method.toLowerCase() == 'post') {
        processForm(req, res);
        return;
    }

    //this will handel a mock get for the languages array for the form
    if(req.method.toLocaleLowerCase() == 'get'){
        var data = {
            data: {
                languages: [
                    'English',
                    'Spanish',
                    'German',
                    'French',
                    'Other'
                ]
            }
        };

        //create stringified version of the array above.
        var responseData = JSON.stringify(data);
        
        //send it back to the requester for the get... the angular form.  
        res.end(responseData);
        console.log('get: ', responseData);
        return;
    }

    res.end();
});

//this is what poccess the form
function processForm(req, res) {
    //this is what will parse the form from the body of the http post. 
    var form = new formidable.IncomingForm();

    //this is waht sets up fields array for us.
    form.parse(req, function (err, fields) {

        res.writeHead(200, {
            'content-type': 'text/plain'
        });
        
        fields.id = 'abc123'; //add the id back to the field object.

        var data = JSON.stringify({fields: fields});

        res.end(data);

        console.log('posted fields:\n');
        console.log(data);
    });
}

var port = 3100;
server.listen(port);
console.log("server listening on port " + port);