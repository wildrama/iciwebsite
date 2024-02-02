import { check, validationResult } from 'express-validator'
import { HttpResponse } from '../../utils/httpResponse.js';
const httpResponse = new HttpResponse();

export const passwordValidate = [
    check('password', 'veryShort')
        .isLength({min:6}),
    (req, res, next) => {
        try {
            validationResult(req).throw()
            return next()
        } catch (error) {
            return httpResponse.BadRequest(res, 'veryShort')
        }
    }
];