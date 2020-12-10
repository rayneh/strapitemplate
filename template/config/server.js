module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    admin: {
      auth: {
        secret: env('ADMIN_JWT_SECRET', '1a0500a416dbc425b23c40d8bb55ca7c'),
      },
    },
  });
  