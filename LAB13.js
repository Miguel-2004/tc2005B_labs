const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const taskRoutes = require('./routes/taskRoutes');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(taskRoutes);

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
