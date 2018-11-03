import express from 'express';

import wrapAsyncFn from '../../helpers/express.util';

import { OrganisationsController } from '../../controllers/organisations';

export const organisationsRouter = express.Router();

organisationsRouter.post('/organisations', wrapAsyncFn(OrganisationsController.addOrganisations));
organisationsRouter.get('/organisations', wrapAsyncFn(OrganisationsController.findFirstDegreeOrganisations));
