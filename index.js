require('dotenv').config();
const express = require('express');
const sequelize = require('./config/db');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./routes/index');
const errorHandler = require('./middlewares/errorHandlingMiddleware');


const PORT = process.env.PORT || 5050;

const app = express();

app
    .use(cors())
    .use(express.json())
    .use("/api/v1", router)
    .use(cookieParser())

    .use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.error(e);
    }
};

start();
