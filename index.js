// var express = require('express')
// var app = express()
// var bodyParser = require('body-parser');
// var mongoose = require('mongoose')

// var fs = require('fs');
// var path = require('path');
// require('dotenv/config');

// mongoose.connect(process.env.DATABASE_URL,
// 	{ useNewUrlParser: true, useUnifiedTopology: true }, err => {
// 		console.log('connected')
// });

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
  
// // Set EJS as templating engine 
// app.set("view engine", "ejs");

// var multer = require('multer');
  
// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });
  
// var upload = multer({ storage: storage });

// var imgModel = require('./models/images');

// app.get('/', (req, res) => {
//     imgModel.find({}, (err, items) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send('An error occurred', err);
//         }
//         else {
//             res.render('/plants/index', { items: items });
//         }
//     });
// });

// app.post('/:id', upload.single('image'), (req, res, next) => {
  
//     var obj = {
//         name: req.body.name,
//         desc: req.body.desc,
//         img: {
//             data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
//             contentType: 'image/jpg'
//         }
//     }
//     imgModel.create(obj, (err, item) => {
//         if (err) {
//             console.log(err);
// 			console.log('not working')
//         }
//         else {
// 			console.log('working')
//             item.save();
//             res.redirect('/plants/index');
//         }
//     });
// });

// var port = process.env.PORT || '3000'
// app.listen(port, err => {
//     if (err)
//         throw err
//     console.log('Server listening on port', port)
// })