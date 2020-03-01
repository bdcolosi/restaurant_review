const express = require('express');

const app = express();

es6Renderer = require('express-es6-template-engine');

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');



app.listen(3333, () => {
    console.log('Server is running on port 3333')
});

const rootRouter = require('./routes/index'),
restaurantRouter = require('./routes/restaurant')

app.use('/', rootRouter);
app.use('/restaurants', restaurantRouter);