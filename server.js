const express = require('express');
const routes = require('./controllers');
const sequilize = require('./configure/connection');
const path = require('path');

const helpers = require('./utils/helpers');

const exphbs = require('express-handlebars');

const hbs = exphbs.create({ helpers })

const session = require('express-session');

const app = express();

const PORT = procesas.env.PORT || 3001;

const SequilizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: "Da secret",
    cookie: {

        //expires in 20 minutes
        expires: 20 * 60 * 1000
    },
    require: true,
    rolling: true,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequilize
    }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});