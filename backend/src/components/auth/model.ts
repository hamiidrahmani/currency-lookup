import jwt from 'jsonwebtoken';
import { getEnv } from '../../utils';

// This should be implemented in some sort of database like redis or mongodb or ...
const generatedTokens: string[] = [];

const generateToken = (): string => {
  try {
    const token = jwt.sign({ iat: Date.now() }, getEnv().APP_SECRET);
    generatedTokens.push(token);
    return token;
  } catch {
    throw new Error('Token generation failed!');
  }
};

const verifyToken = (header: string | undefined): boolean => {
  const unauthorizedMessage = 'You are not authorized to access this resource!';

  if (typeof header !== 'undefined') {
    const token = header.split(' ')[1];

    // If token does not exists in generated token lists
    if (generatedTokens.indexOf(token) === -1) {
      throw new Error(unauthorizedMessage);
    }

    try {
      var decoded = jwt.verify(token, getEnv().APP_SECRET);
      if (decoded) {
        return true;
      } else {
        throw new Error(unauthorizedMessage);
      }
    } catch {
      throw new Error(unauthorizedMessage);
    }
  } else {
    throw new Error(unauthorizedMessage);
  }
};

export { generateToken, verifyToken };
