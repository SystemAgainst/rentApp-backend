const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'API for rentApp',
        description: 'Description'
    },
    host: 'localhost:5055'
};

const outputFile = './swagger-output.json';
const routes = ['./routes/userRouter.js', './routes/index.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);
