import * as crypto from 'crypto';

export const random = () => crypto.randomBytes(128).toString('base64')
const SECRET = 's3cr3t';
export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
};


