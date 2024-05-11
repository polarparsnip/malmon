/**
 * Higher-order function that surrounds async middleware with error handling.
 *
 * @param {function} fn Middleware that should be error handled.
 * @returns {function} Middleware with error handling.
 */
export function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}
