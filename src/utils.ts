import jwt from 'jsonwebtoken';
import { jwtSecret } from './config';

export function createToken(payload, options = {}) {
  const token = jwt.sign(payload, jwtSecret, options);
  return token;
}

export function decodeToken(token) {
  try {
    const decoded = jwt.verify(token, jwtSecret);
    return decoded;
  } catch (e) {
    console.error('Error while decoding token:', e.message);
    return null;
  }
}