function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
const express = require('express');
const app = express();
app.use(requireHTTPS);

if (process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('dist/eventvariete-front'));
} else {
    app.use(express.static('./dist/eventvariete-front'));
}

// app.get('*', function(req, res) {
//     res.sendFile('index.html', {root: '/dist/eventvariete-front/'}
//   );
//   });

app.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/eventvariete-front/index.html'));
    });

app.listen(process.env.PORT || 8080);




