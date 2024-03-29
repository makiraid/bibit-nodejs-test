const Joi = require('joi');
const validateJoi = require('validate.js');
const wrapper = require('../../../../helpers/utils/wrapper')

const validate = (param, schema) => {
    const { value, error } = Joi.validate(param, schema)
    if (!validateJoi.isEmpty(error)) {
        return {
            err: true,
            data: wrapper.responseCode(400, { reason: error.details[0].message }).result
        }
    }
    return { err: false, data: value }
};

const search = Joi.object().keys({
    title: Joi.string().optional(),
    page: Joi.string().optional().allow('')
});

const detail = Joi.object().keys({
    id: Joi.string().required(),
    title: Joi.string().optional().allow('')
});

module.exports = {
    validate,
    search,
    detail
}
