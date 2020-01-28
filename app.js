const express = require('express');
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const sequelize = require('./db')   
const models = require('./models');
const routes = require('./routes')

const app = express();

app.engine('html', nunjucks.render); // como renderear templates html
app.set('view engine', 'html'); // que extensiones de archivo tienen los templates
nunjucks.configure('views', { noCache: true }); // donde encontrar las views




app.use('/', routes);

app.use(express.static(path.join(__dirname, '/public')))

// models.User.sync({})
//     .then(()=>{
//         return models.Page.sync({})
//     })
//     .then(()=>{
//         return sequelize.sync()
//     })
//     .then(() => {
//     console.log('Conectado a la base de datos');
//     app.listen(3000);
//     console.log('Servidor escuchando en el puerto 3000');
//     })
//     .catch(err => console.log(err));

sequelize.sync()
  .then(() => {
    console.log('Conectado a la base de datos');
    app.listen(3000);
    console.log('Servidor escuchando en el puerto 3000');
  })
  .catch(err => console.log(err));
