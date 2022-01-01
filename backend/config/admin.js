module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7bcddc8328886ac1e16fd9ce838bbd0d'),
  },
});
