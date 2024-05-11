import express from 'express';
import multer from 'multer';
import { catchErrors } from '../lib/catch-errors.js';
import { ensureAdmin, requireAuthentication } from './passport.js';
import {
  addBulkSentences,
  createSentence,
  createSimplifiedSentence,
  deleteSentence,
  deleteSimplifiedSentence,
  getRandomSentence,
  getRandomSimplifiedSentence,
  listAllSimplifiedSentences,
  listSentences,
  listSimplifiedSentences,
  setSentenceSimplified,
  updateSentence,
  updateSimplifiedSentence,
} from './sentences.js';
import {
  deleteUser,
  listUsers,
  loginRoute,
  registerUser,
  showCurrentUser,
  updateUser,
} from './users.js';

export const router = express.Router();

const upload = multer({ dest: 'uploads/' });

export async function index(req, res) {
  return res.json({
    sentences: {
      allSimplifiedSentences: {
        href: '/sentences/simplified/all',
        methods: ['GET'],
      },
    },
    users: {
      users: {
        href: '/users',
        methods: ['GET'],
      },
      user: {
        href: '/users/:userId',
        methods: ['PATCH'],
      },
      me: {
        href: '/users/me',
        methods: ['GET'],
      },
      register: {
        href: '/users/register',
        methods: ['POST'],
      },
      login: {
        href: '/users/login',
        methods: ['POST'],
      },
      logout: {
        href: '/users/logout',
        methods: ['GET'],
      },
      randomSentence: {
        href: '/users/sentences/sentence',
        methods: ['GET'],
      },
      sentence: {
        href: '/users/sentences/:sentenceId',
        methods: ['PATCH'],
      },
      simplifiedSentences: {
        href: '/users/sentences/simplified',
        methods: ['POST'],
      },
      randomSimplifiedSentence: {
        href: '/users/sentences/simplified/sentence',
        methods: ['GET'],
      },
      simplifiedSentenceAction: {
        href: '/users/sentences/simplified/:sentenceId/:action',
        methods: ['PATCH'],
      },
    },
    admin: {
      sentences: {
        href: '/admin/sentences',
        methods: ['GET', 'POST'],
      },
      sentence: {
        href: '/admin/sentences/:sentenceId',
        methods: ['PATCH', 'DELETE'],
      },
      simplifiedSentences: {
        href: '/admin/sentences/simplified',
        methods: ['GET'],
      },
      simplifiedSentence: {
        href: '/admin/sentences/simplified/:sentenceId',
        methods: ['DELETE'],
      },
      simplifiedSentenceAction: {
        href: '/admin/sentences/simplified/:sentenceId/:action',
        methods: ['PATCH'],
      },
      user: {
        href: '/admin/users/:userId',
        methods: ['DELETE'],
      },
    },
  });
}

// Index
router.get('/', index);

// Sentences routes
router.get(
  '/sentences/simplified/all',
  catchErrors(listAllSimplifiedSentences)
);

// User routes
router.get('/users', requireAuthentication, catchErrors(listUsers));
router.patch('/users/:userId', requireAuthentication, catchErrors(updateUser));
router.get('/users/me', requireAuthentication, catchErrors(showCurrentUser));
router.post('/users/register', catchErrors(registerUser));
router.post('/users/login', catchErrors(loginRoute));
router.get('/users/logout', async (req, res) => {
  req.logout((err) => {
    if (err) {
      // return next(err);
      return res.status(500).json({ error: err });
    }
    return res.status(200).json('logout successful');
  });
});
router.get(
  '/users/sentences/sentence',
  requireAuthentication,
  catchErrors(getRandomSentence)
);
router.patch(
  '/users/sentences/:sentenceId',
  requireAuthentication,
  catchErrors(setSentenceSimplified)
);
router.post(
  '/users/sentences/simplified',
  requireAuthentication,
  catchErrors(createSimplifiedSentence)
);
router.get(
  '/users/sentences/simplified/sentence',
  requireAuthentication,
  catchErrors(getRandomSimplifiedSentence)
);
router.patch(
  '/users/sentences/simplified/:sentenceId/:action',
  requireAuthentication,
  catchErrors(updateSimplifiedSentence)
);

// Admin routes
router.get(
  '/admin/sentences',
  requireAuthentication,
  ensureAdmin,
  catchErrors(listSentences)
);
router.post(
  '/admin/sentences',
  requireAuthentication,
  ensureAdmin,
  catchErrors(createSentence)
);
router.post(
  '/admin/sentences/bulk',
  requireAuthentication,
  ensureAdmin,
  upload.single('csvFile'),
  catchErrors(addBulkSentences)
);
router.patch(
  '/admin/sentences/:sentenceId',
  requireAuthentication,
  ensureAdmin,
  catchErrors(updateSentence)
);
router.delete(
  '/admin/sentences/:sentenceId',
  requireAuthentication,
  ensureAdmin,
  catchErrors(deleteSentence)
);
router.get(
  '/admin/sentences/simplified',
  requireAuthentication,
  ensureAdmin,
  catchErrors(listSimplifiedSentences)
);
router.delete(
  '/admin/sentences/simplified/:sentenceId',
  requireAuthentication,
  ensureAdmin,
  catchErrors(deleteSimplifiedSentence)
);
router.patch(
  '/admin/sentences/simplified/:sentenceId/:action',
  requireAuthentication,
  ensureAdmin,
  catchErrors(updateSimplifiedSentence)
);
router.delete(
  '/admin/users/:userId',
  requireAuthentication,
  ensureAdmin,
  catchErrors(deleteUser)
);
