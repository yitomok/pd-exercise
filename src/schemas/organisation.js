import Joi from 'joi';

export const Organisation = Joi.object({
    org_name: Joi.string().min(3).max(1000).required(),
    daughters: Joi.array().items(Joi.lazy(() => Organisation))
});
