import Joi from 'joi';

import { Organisation } from '../schemas';
import OrganisationsService from '../services/organisations';
import SubsidiariesService from '../services/subsidiaries';

import { flattenOrganisations } from '../helpers/data.util';

export const OrganisationsController = {
    async addOrganisations (req, res) {
        let org = await Joi.validate(req.body, Organisation);

        let data = flattenOrganisations(org);

        let names = Object.keys(data);

        // Upsert all parents
        let parents = await Promise.all(names.map((name) => OrganisationsService.upsertOrganisation(name)));

        // Make an object containing the parents' inserted ID from database
        let orgs = parents.reduce((acc, parent) => {
            acc[parent.name] = parent.id;

            return acc;
        }, {});

        // For every parents, add their daughters to database
        await Promise.all(names.map((name) =>
            Promise.all(data[name].map((subsidiary) =>
                SubsidiariesService.upsertSubsidiary(orgs[subsidiary], orgs[name])))
        ));

        res.sendStatus(201);
    },

    async findFirstDegreeOrganisations (req, res) {
        let { org_name, next } = await Joi.validate(req.query, Joi.object({
            org_name: Joi.string().min(3).max(1000).required(),
            next: Joi.string().min(3).max(1000)
        }));

        let results = await OrganisationsService.findFirstDegreeByName(org_name, next || '');

        res.json(results);
    },
}
