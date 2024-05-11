import jwt from 'jsonwebtoken';
import {
  comparePasswords,
  conditionalUpdate,
  createUser,
  deleteUserFromDb,
  findByUserId,
  findByUsername,
  listUsersFromDb,
} from '../lib/db.js';
import { jwtOptions, tokenOptions } from './passport.js';

/**
 * Retrieves a list of all users in the system.
 * @param {req, res}
 * @returns {Promise<Express.Response>} result.
 */
export async function listUsers(req, res) {
  let { order = 'default', offset = 0, limit = 10 } = req.query;
  offset = Number(offset);
  limit = Number(limit);
  order = String(order);

  const users = await listUsersFromDb(order, offset, limit);

  if (!users) {
    return res.status(404).json({ error: 'unable to list users' });
  }

  const result = {
    _links: {
      self: {
        href: `/users/?order=${order}&offset=${offset}&limit=${limit}`,
      },
    },
    users,
  };

  if (offset > 0) {
    result._links.prev = {
      href: `/users/?order=${order}&offset=${offset - limit}&limit=${limit}`,
    };
  }

  if (users.length === limit) {
    result._links.next = {
      href: `/users/?order=${order}&offset=${
        Number(offset) + limit
      }&limit=${limit}`,
    };
  }

  return res.status(200).json(result);
}

/**
 * Signs in a user.
 * @param {req, res}
 * @returns {Promise<Express.Response>} Result.
 */
export async function loginRoute(req, res) {
  const { username, password = '' } = req.body;

  const user = await findByUsername(username);

  if (!user) {
    return res.status(401).json({ error: 'Invalid username/password' });
  }

  const passwordIsCorrect = await comparePasswords(password, user.password);

  if (passwordIsCorrect) {
    const payload = { id: user.id };
    const token = jwt.sign(payload, jwtOptions.secretOrKey, tokenOptions);
    delete user.password;
    return res.status(200).json({
      user,
      token,
      expiresIn: tokenOptions.expiresIn,
    });
  }
  return res.status(401).json({ error: 'Invalid user/password' });
}

/**
 * Retrieves current user.
 * @param {req, res}
 * @returns {Promise<Express.Response>} Result.
 */
export async function showCurrentUser(req, res) {
  const { user: { id } = {} } = req;

  const user = await findByUserId(id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  delete user.password;

  return res.json(user);
}

/**
 * Check during signup that validates if values entered are legal.
 * @param {username, email, password}
 * name, username, and password that a potential user wants to use for their account.
 * @returns {String} Validation result.
 */
export async function validateUser(username, email, password) {
  if (
    typeof username !== 'string' ||
    username.length < 3 ||
    username.length > 64
  ) {
    return 'Username must be registered. Minimum 3 characters og maximum 64 characters';
  }

  if (typeof email !== 'string' || email.length < 3 || email.length > 256) {
    return 'Email mus be registered. Minimum 3 characters and maximum 256 characters.';
  }

  const user = await findByUsername(username);

  if (user === null) {
    return 'Could not verify username';
  }

  if (user) {
    return 'User already exists';
  }

  if (
    typeof password !== 'string' ||
    password.length < 3 ||
    username.length > 256
  ) {
    return 'Password must be registered. Minimum 3 characters';
  }

  return null;
}

/**
 * Register a new user.
 * @param {req, res}
 * @returns {Promise<Express.Response>} Result.
 */
export async function registerUser(req, res) {
  const { username, email, password } = req.body;

  const validationMessage = await validateUser(username, email, password);

  if (validationMessage) {
    return res.status(400).json({ error: validationMessage });
  }

  const user = await createUser(username, email, password);

  if (!user) {
    return res.status(400).json({ error: 'Could not create user' });
  }

  delete user.password;

  return res.status(201).json(user);
}

/**
 * Deletes a user.
 * @param {req, res}
 * @returns {Promise<Express.Response>} Result.
 */
export async function deleteUser(req, res) {
  const { id: userId } = req.user;
  const { userId: userToBeDeletedId } = req.params;

  const user = await findByUserId(userId);

  if (!user.admin) {
    return res.status(401).json({ error: 'not admin' });
  }

  const userToBeDeleted = await findByUserId(userToBeDeletedId);

  if (!userToBeDeleted) {
    return res.status(404).json({ error: 'user not found' });
  }

  const result = await deleteUserFromDb(userToBeDeleted.id);

  if (result) {
    return res.status(200).json({});
  }

  return res.status(400).json({ error: 'unable to delete user' });
}

/**
 * Updates user.
 * @param {req, res}
 * @returns {Promise<Express.Response>} Result of user update.
 */
export async function updateUser(req, res) {
  // const { userId } = req.params;
  const { id: userId } = req.user;
  const { completedSentences, completedVerifications } = req.body;

  const user = await findByUserId(userId);

  if (!user) {
    return res.status(404).json({ error: 'user not found' });
  }

  const fields = [
    completedSentences ? 'completedSentences' : null,
    completedVerifications ? 'completedVerifications' : null,
  ];

  const values = [
    completedSentences ? Number(user.completedsentences) + 1 : null,
    completedVerifications ? Number(user.completedverifications) + 1 : null,
  ];

  const result = await conditionalUpdate('users', user.id, fields, values);

  if (!result) {
    return res.status(500).json({ error: 'unable to update user' });
  }

  return res.status(200).json(result.rows[0]);
}
