import passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { findByUserId } from '../lib/db.js';

const { JWT_SECRET: jwtSecret, TOKEN_LIFETIME: tokenLifetime = 3600 } =
  process.env;

if (!jwtSecret) {
  console.error('Vantar .env gildi');
  process.exit(1);
}

// Helps with checking user sign-in by verifying whether user already exists.
async function strat(data, next) {
  // get id through data which is stored in token
  const user = await findByUserId(data.id);

  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
}

/**
 * Checks whether user is admin for admin endpoints.
 * @param {req, res, next}
 * @returns {next} go to next function.
 */
export function ensureAdmin(req, res, next) {
  if (req.isAuthenticated() && req.user?.admin) {
    return next();
  }

  const title = 'Síða fannst ekki';
  return res.status(404).json({ error: title });
}

/**
 * Checks whether user is signed in for user endpoints.
 * @param {req, res, next}
 * @returns {next} go to next function.
 */
export function requireAuthentication(req, res, next) {
  return passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      const errorMessage =
        info.name === 'TokenExpiredError' ? 'expired token' : 'invalid token';

      return res.status(401).json({ error: errorMessage });
    }

    const userInfo = user;
    delete userInfo.password;

    // Make user be accessible in rest of middlewares
    req.user = userInfo;

    return next();
  })(req, res, next);
}

// authentication token configurations
export const tokenOptions = { expiresIn: parseInt(tokenLifetime, 10) };

// jwtOptions for sign-in
export const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret,
};

passport.use(new Strategy(jwtOptions, strat));

export default passport;
