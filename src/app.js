import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import http from 'http';

import { node_env, port } from './helpers/configs/general';
import apis, { errors } from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

const server = http.Server(app)

if (node_env != 'test') {
    server.listen(port);
}

app.use('/api', apis);
app.use(errors.notFoundHandler);
app.use(errors.errorHandler);

export { app as default }
