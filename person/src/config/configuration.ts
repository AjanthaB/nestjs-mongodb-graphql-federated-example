export default () => ({
  port: parseInt(process.env.PORT, 10) || 4001,
  database: {
    uri:
      process.env.DATABASE_HOST ||
      'mongodb://localhost:27017/nestjs-federation',
  },
});
