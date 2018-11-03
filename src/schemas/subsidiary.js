import Joi from 'joi';

export const Subsidiary = Joi.object({
    org_id: Joi.number().integer().required(),
    parent_id: Joi.number().integer().required()
});
