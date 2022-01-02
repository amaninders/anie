module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '72c6c19308c02cc6bee2552a9030d01a'),
  },
});
