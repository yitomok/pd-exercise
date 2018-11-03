import express from 'express';

import { organisationsRouter } from './apis/organisations.v1';

export const apisRouter = express.Router();

apisRouter.use('/v1', [
    organisationsRouter
]);
