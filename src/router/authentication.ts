import * as express from 'express';

import {login, register} from '../controllers/authentication';
import users from './users';

export default (router: express.Router) => {
    router.post('/auth/register', register);
    router.post('/auth/login', login);
    router.post('/users', users);
}