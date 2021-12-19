module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1746ef1c04bd70a8553c053b4db33887'),
  },
});
