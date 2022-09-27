const express = require('express')
const path = require('path')

class AppController{
    constructor(){
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.express.use(express.static(path.join(__dirname, './public')));
        this.express.set('views', path.join(__dirname, 'views'));
        this.express.set('view engine', 'ejs');
    }

    routes(){
        this.express.use(require('./routes'));
    }
}

module.exports = new AppController().express;